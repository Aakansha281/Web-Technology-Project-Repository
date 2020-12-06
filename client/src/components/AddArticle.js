import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
const AddArticle =() =>
{
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [authorname, setAuthorname] = useState("");
  const [message, setMessage]= useState("");
  const [fileName, setFileName]= useState("");
  const onChangeFile = e =>{
    setFileName(e.target.files[0]);
  }
  const changeOnClick = e => {
    e.preventDefault();
const formData = new FormData();
formData.append("title",title);
formData.append("article",article);

formData.append("authorname",authorname);
formData.append("articleImage",fileName);
    setTitle('');
    setArticle('');
    setAuthorname('');
axios.post("http://localhost:8080/articles/add", formData).then(res => setMessage(res.data)).catch(err => console.log(err));

  };
  return (
    <AddArticleContainer>
    <div className="container" >
    <h1>Add Article</h1>
    <span className="message">{message}</span>
    <form onSubmit={changeOnClick} encType="multipart/form-data">
  <div className="form-group">
    <label htmlFor="authorname">Author Name</label>
    <input type="text" value={authorname} onChange={e => setAuthorname(e.target.value)} className="form-control"  placeholder="Enter Author Name"/>

  </div>
  <div  className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control"  placeholder="Title"/>
  </div>
  <div class="form-group">
    <label htmlFor="article">Type article here...</label>
    <textarea value={article} onChange={e => setArticle(e.target.value)} className="form-control"  rows="3"></textarea>
  </div>
  <div className ="form-group">
  <label htmlFor="file">Choose Image
  </label>
  <input type="file" filename="articleImage" className="form-control-file" onChange={onChangeFile}></input>
  </div>
  <button type="submit"  className="btn btn-primary">Post Article</button>
</form>
</div>
</AddArticleContainer>
  );
};

export default AddArticle;
const AddArticleContainer = styled.div`
margin:3rem auto;
padding: 4rem;
width: 31.25rem;
.message{
  font-weight:900;
  color: var(--dark-green);
  padding: 1rem 1rem 1rem 0;

}



`;
