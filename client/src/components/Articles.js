
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


    <div className="container" style={{display:"inline-block", padding:"30 rem", margin: "30px"}}>
    {posts.map((article, key) => (<div style={{display:"inline-block"}}><div> <div style={{padding:"30 rem"}}>
      <img src={`/uploads/${article.articleImage}`} alt="..." style={{width:"20rem", height:"20rem",  margin: "10px"}}></img>

<div style={{margin: "3px 0px 3px 3px"}}>


<Link to={{pathname:`/article/${article._id}`}} className="text-info">
<h9>{article.title}</h9>
</Link>
<div>
<p className="badge  p-2">{article.authorname}</p></div></div>

    <Link style={{display:"inline-block",  margin: "0 0 30px 0"}} to={`/update/${article._id}`}  className="btn btn-sm btn-success">
      Edit Article
    </Link>


    <Link style={{display:"inline-block",  paddingleft:"30px",margin: "0 0 30px 30px"}} to={`/` } onClick= {() => deleteArticle(article._id)} className="btn btn-sm btn-secondary">
      Delete Article
    </Link></div></div>
</div>



  ))}
  </div>

      </MainContainer>);};
export default Articles;
const MainContainer = styled.div` margin:  0;
  background:#e8ffff;



 `;
