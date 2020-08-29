import React,{useState} from 'react';
import './Login.css';
import auth from './firebase'
import { Link, useHistory } from 'react-router-dom';

const Login = (props) => {
    const history=useHistory()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const onSignInClick=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(()=>{
            history.push('/')
        }).catch(err=>{
            alert(err.message)
        })
    }

    const onRegisterClick=()=>{
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
          history.push('/')
      })
      .catch((err) => {
        alert(err.message);
      });
    
   
    }



	return (
		<div className='login'>
            <div className="login__logoContainer">
                <Link to='/'>
                <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
            </Link>
            </div>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password"/>
                    <button onClick={onSignInClick} type='submit' className='login__signIn'>Sign In</button>
                </form>
                <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookie Notice and our Interest-Based Ads Notice</p>
                <button onClick={onRegisterClick} className='login__register'>Create your Amazon Account</button>
            </div>
		</div>
	);
};

export default Login;
