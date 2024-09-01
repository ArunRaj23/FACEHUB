import { useContext, useRef } from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import { loginCall } from '../../apiCalls';
const BASE_URL = "http://localhost:8800/api/"

export default function Login(){
    const email= useRef();
    const password= useRef();
    const {user, isFetching, error, dispatch}= useContext(AuthContext)

    const handleClick=async (e)=>{
        e.preventDefault();
        await loginCall({email: email.current.value, password: password.current.value}, dispatch)
    };

    console.log(user)

    return(
       <div className='login'>
        <div className='loginWrapper'>
            <div className='loginLeft'>
                <span className='sitename'>Facehub</span>
                <span className='siteTagline'>Connect, Share, and Discover with Friends - Your Hub for Online Friendship and Community.</span>
            </div>
            <div className='loginRight'>
                <form className='loginBox' onSubmit={handleClick}>
                    <input
                        className='userinput'
                        placeholder='Email'
                        type='email'
                        ref={email}
                        required
                    />
                    <input
                        className='userinput'
                        placeholder='Password'
                        type='password'
                        ref={password}
                        required
                        minLength='6'
                    />
                    <button className='loginButton' type='submit' disabled={isFetching}>
                        Log In
                    </button>
                    <div className='loginBoxBottom'>
                        <span className='forgotPassword'>Forgot Password?</span>
                        <Link to='/signup'>
                            <button className='newaccountbutton'>
                                Create a New Account
                            </button>
                        </Link>
                    </div>
                </form>            
            </div>
        </div>
       </div>
       
    )
}