import { useRef , useContext , useState} from 'react';
import './signup.css'
import { Link , useNavigate } from 'react-router-dom';
import axios from 'axios';
const BASE_URL = "http://localhost:8800/api/"

export default function Signup(){
    const username=useRef();
    const email= useRef();
    const password= useRef();
    const passwordAgain=useRef();
    const navigate = useNavigate();

    const handleClick= async(e)=>{
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Passwords don't match");

        }
        else{
            const user={
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try{
                await axios.post(BASE_URL+'auth/signup', user);
                navigate('/login');
                
            }catch(error){
                console.log("signup failed");
            }
        }
    };

    return(
       <div className='login'>
        <div className='loginWrapper'>
            <div className='loginLeft'>
                <span className='sitename'>Facehub</span>
                <span className='siteTagline'>Connect, Share, and Discover with Friends – Your Hub for Online Friendship and Community.</span>
            </div>
            <div className='loginRight'>
                <form className='loginBox' onSubmit={handleClick}>
                    <input 
                        className='userinput'
                        placeholder='Username'
                        ref={username}
                        required
                    />
                    <input
                        className='userinput'
                        placeholder='Email'
                        ref={email}
                        required
                        type='email'
                    />
                    <input
                        className='userinput'
                        placeholder='Create Your Password'
                        required
                        ref={password}
                        minLength='6'
                        type='password'
                    />
                    <input
                        className='userinput'
                        placeholder='Re-enter Your Password'
                        required
                        minLength='6'
                        ref={passwordAgain}
                        type='password'
                    />

                    <button className='loginButton' type='submit'>Sign Up</button>

                    <div className='loginBoxBottom'>
                        <Link to='/login'>
                            <button className='newaccountbutton'>Log into Account</button>
                        </Link> 
                    </div> 
                </form>            
            </div>
        </div>
       </div>
       
    )
}