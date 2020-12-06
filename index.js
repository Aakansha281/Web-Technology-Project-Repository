var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())

app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended:true
}))

mongoose.connect('mongodb://localhost:27017/mydb',{
  useNewUrLParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connectiong to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up",(req,res)=>{
  var fname = req.body.first_name;
  var lname = req.body.last_name;
  var uname = req.body.username;
  var password = req.body.password;
  var email = req.body.email;
  var phone = req.body.phone;


  var data = {
    "fname": fname,
    "lname": lname,
    "uname": uname,
    "password": password,
    "email": email,
    "phone": phone

  }

  db.collection('users').findOne({email:email},function(error,collection){
    if(error)
    {
      throw error;
    }
    if(collection) {
      console.log("User already exists");
      return res.redirect('/signup.html?signup=failed')
    }
    db.collection('users').insertOne(data,(err,collection)=>{
      if(err){
        throw err;
      }
      console.log("Record Inserted Successfully");
      return res.redirect('/signup_success.html');
      
    });
  });
})

app.get("/",(req,res)=>{
  res.set({
    "ALLow-access-ALLow-Origin": '*'
  })
  return res.redirect('/signup.html')
}).listen(3000);


app.post("/log_in",(req,res)=>{
  var login_id = req.body.login_email;


  db.collection('users').findOne({email:login_id},function(error,collection){
    if(error)
    {
      throw error;
    }
    console.log(collection);
    if(!collection) {
      return res.redirect('/Login_page.html');
    }
    return res.redirect('/signup_success.html');
    //console.log("User Logged in Successfully");
  });
  
})

console.log("Listening on PORT 3000");