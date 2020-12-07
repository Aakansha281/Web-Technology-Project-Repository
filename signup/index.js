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
  var uname = req.body.user_name;
  var password = req.body.user_password;
  var email = req.body.user_email;
  var phone = req.body.user_number;


  var data = {
    "fname": fname,
    "lname": lname,
    "uname": uname,
    "password": password,
    "email": email,
    "phone": phone

  }
  db.collection('users').insertOne(data,(err,collection)=>{
    if(err){
      throw err;
    }
    console.log("Record Inserted Successfully");
  });

  return res.redirect('signup_success.html')
})

app.get("/",(req,res)=>{
  res.set({
    "ALLow-access-ALLow-Origin": '*'
  })
  return res.redirect('signup.html')
}).listen(3000);

console.log("Listening on PORT 3000");
