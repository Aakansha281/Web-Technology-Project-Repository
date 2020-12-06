import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Link} from 'react-router-dom';
const Article = props =>
{const [title, setTitle] = useState("");
const [article, setArticle] = useState("");
const [authorname, setAuthorname] = useState("");
  const [fileName, setFileName]= useState("");
useEffect(() =>{
  axios.get(`http://localhost:8080/articles/${props.match.params.id}`).then( res => [setTitle(res.data.title), setArticle(res.data.article), setAuthorname(res.data.authorname), setFileName(res.data.articleImage)]).catch(err => console.log(err));
}, [props])
  return (
    <MainContainer>

    <h2>{title}</h2>
    <img src={`/uploads/${fileName}`} alt="..." style={{margin:"1rem auto",width:"40rem", height:"30rem", display:"flex"}}></img>

    <p>{article}</p><p className="badge badge-secondary">{authorname}</p><hr/><br/>
  <Link to="/">  <button type="submit"  class="btn btn-success">Back To home</button></Link>

    </MainContainer>

  );
};
export default Article;
const MainContainer = styled.div`margin: 6rem auto; padding: 3rem 14rem; h2 {text-align:center; color:var(--dark-green);
  .btn {background:var(--light-green); }}`;
