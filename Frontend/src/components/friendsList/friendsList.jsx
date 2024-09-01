import { useEffect, useState } from 'react';
import './friendsList.css'
import axios from 'axios'
const BASE_URL = "http://localhost:8800/api/"
import { Link } from 'react-router-dom';

export default function FriendList({friend}){
    const [user,setUser]= useState({});
    const PF=import.meta.env.VITE_PUBLIC_FOLDER + "/";
    useEffect(()=>{
        const fetchUser=async()=>{
            const res= await axios.get(BASE_URL+`users?userId=${friend}`);
            setUser(res.data);
        };
        fetchUser();
    },[friend]);
    return(
        <Link to={"/profile/"+user.username} style={{textDecoration:"none"}}>
            <div className='profilefriend'>
                <img className='profilefriendImg' src={user.profilepic || PF + "Avatar1.png"} alt="" />
                <span className='profilefriendName'>{user.username}</span>
            </div>                    
        </Link>
        
    )
}