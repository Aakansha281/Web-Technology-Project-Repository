
import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from 'axios';
const Articles =({posts}) =>
{const [article, setArticle] = useState([]);
  const deleteArticle = id => {

    axios.delete(`http://localhost:8080/articles/${id}`).then(res=>alert(res.data));
    setArticle(article.filter(elem => elem._id !== id));

  };
  return (  <MainContainer>


      {posts.map((article, key) => (
        <div className="row row boxlayout">
        <div className="col">
      <div className="container" style={{position:"relative"}}>


      <Link to={{pathname:`/article/${article._id}`}} className="text-info">
        <h3>{article.title}</h3>
        </Link>
        <img src={`/uploads/${article.articleImage}`} alt="..." style={{width:"40rem", height:"20rem"}}></img>

      <div>
      <p className="badge  p-2">{article.authorname}</p>
    
</div>
      <div className="row my-6">
      <div className="col-sm-2">
      <Link to={`/update/${article._id}`}  className="btn btn-sm btn-outline-success">
        Edit Article
      </Link>

      </div>
      <div className="col-sm-2">
      <Link to={`/articles` } onClick= {() => deleteArticle(article._id)} className="btn btn-sm btn-outline-secondary">
        Delete Article
      </Link>

      </div>
      <hr/>
      </div>
      <hr/>

          </div>
          </div>
</div>


    ))}

      </MainContainer>);};
export default Articles;
const MainContainer = styled.div` margin:  0;
  background:#e8ffff;



 `;
