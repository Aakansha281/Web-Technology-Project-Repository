const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app= express();
const port = process.env.Port || 8080;
require('dotenv').config();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/mern',{useNewURLParser: true}).then(response =>{
  console.log("Mongo");}).catch(err=>{console.log("try again");});
  const articlesRouter = require('./routes/articles');
  app.use('/articles',articlesRouter);
  const loginRouter = require('./routes/loginRoute');
  app.use("/log_in", loginRouter);
  app.listen(port, ()=> {
  console.log(`server is running at port:${port}`);
});
