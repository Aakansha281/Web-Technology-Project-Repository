import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPwd] = useState("");
    const [errorMsg, setErr] = useState("");
    const loginUser = e => {
        e.preventDefault();
        setErr('');
        var req = {
            email: email,
            password: password,
        }
        setEmail('');
        setPwd('');
        axios.post("http://localhost:8080/log_in", req).then(res => {
          props.history.push('/articles');
        }
        ).catch(err => {
            setErr(err.response.data);
        });
    };
    return (
        <LoginContainer>
            <div className="box">
                <div className="tf">Travel Forum
            <img className="world" src="icon_travel.svg"></img>
                </div>
            </div>
            { errorMsg }
            <form onSubmit={loginUser}>
                <div className="form-group">
                    <p className="log">Log In</p>
                    <label htmlFor="exampleInputEmail1" className="font">E-mail</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" name="login_email" id="exampleInputEmail1" placeholder="Email"></input>
                    <label htmlFor="exampleInputPassword1" className="font">Password</label>
                    <input value={password} onChange={e => setPwd(e.target.value)} type="password" className="form-control" name="login_password" id="exampleInputPassword1" placeholder="Password"></input>
                    <p className="font"><input type="checkbox"></input></p>
                    <button type="submit" className="btn btn-default">Log In</button>
                </div>
            </form>
        </LoginContainer>
    );
};

export default Login;
const LoginContainer = styled.div`
.box {
    background-image: url("letsgotravel.jpg");
    width: 490px;
    height: 550px;
    margin-left: 80px;
    margin-top: 100px;
    border-radius: 2%;

    float: left;
  }
  body {
    background : url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&w=1000&q=80");
    width:  100%;
    height: 736px;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
  }
  .tf {
    font-family: "Pacifico", cursive;
    font-size: 50px !important;
    color: black;
    font-weight: bold;
    text-align: left;
    padding-left: 15px;
    float: left;
  }
  .world {
    height: 100px;
  }
  form {
    background: rgba(0, 0, 0, 0.1);
    width: 800px;
    height: 550px;
    border: 1px solid #888;
    border-radius: 2%;
    margin-top: 100px;
    float: right;
    margin-right: 100px;
    padding-left: 50px;
    padding-top: 30px;
    position: relative;
  }

  .log {
    font-family: "Aclonica", sans-serif;
    font-size: 50px !important;
    color: black;
    font-weight: bold;
    text-align: left;
  }

  .btn {
    margin-top: 60px;
    background-color: #1bf0d4;
    font-weight: bold;
    font-size: 25px;
    color: white;
    border: px solid black;
  }

  btn:hover {
    opacity: 0.8;
  }

  label {
    color: white;
    font-size: 24px;
  }

  input[type="email"],
  input[type="password"] {
    width: 200px;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.1);
    color: white;
    font-size: 15px;
    font-weight: bold;
  }

  .font {
    font-family: "Aclonica", sans-serif;
  }

`;
