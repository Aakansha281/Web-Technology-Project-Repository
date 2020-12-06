
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState , useEffect} from 'react'
import {Route, Redirect} from "react-router-dom";

import Header from './components/layouts/Header'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Articles from './components/Articles'
import axios from 'axios'
import AddArticle from './components/AddArticle'
import EditArticle from './components/EditArticle'
import Login from './components/Login'
import Article from './components/Article'

function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8080/articles").then(res => setPosts(res.data)).catch(error => console.log(error));
  })
  if (window.location.pathname === '/login' || window.location.pathname === '/') {
    return (
      <div className="App">
        <Route path="/">
          <Redirect to="/login" />
        </Route>
        <Route path='/login' render={(props) => <Login {...props}/>} />
      </div>
    )
  }

  return (
    <div className="App">
    <Header/>
    <Navbar/>
    <Route path='/articles' render={()=><Articles posts={posts}/>}/>
    <Route path='/login' render={(props)=><Login {...props}/>}/>
    <Route path='/article/:id' render={(props)=><Article {...props} posts={posts}/>}/>
    <Route path='/update/:id' render={(props)=><EditArticle {...props} posts={posts}/>}/>
    <Route path='/add-article' component={AddArticle}/>
    <Footer/>
</div>
  );
}

export default App;
