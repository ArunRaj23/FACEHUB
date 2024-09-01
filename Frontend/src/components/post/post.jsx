import { useContext, useEffect, useState } from 'react';
import './post.css'
import {MoreVert, ThumbUp, Favorite} from "@mui/icons-material"
import axios from 'axios'
import { format, render, cancel, register } from 'timeago.js';
import { Link } from "react-router-dom"
const BASE_URL = "http://localhost:8800/api/"
import {AuthContext} from '../../context/AuthContext'


export default function Post({post}){
    const [user,setUser]= useState({});
    const [like,setLike]= useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const PF=import.meta.env.VITE_PUBLIC_FOLDER + "/";
    const {user:currentUser} = useContext(AuthContext);

    useEffect(()=>{
        const fetchUser=async()=>{
            const res= await axios.get(BASE_URL+`users?userId=${post.userId}`);
            setUser(res.data);
        };
        fetchUser();
    },[post.userId]);

    useEffect(()=>{
        setIsLiked(post.likes.includes(currentUser._id))
    },[currentUser._id, post.likes]);

    const likeHandler= async()=>{
        try{
            await axios.put(BASE_URL+`posts/${post._id}/like`,{ userId:currentUser._id });
        }catch(error){
            console.log(error)
        }
        setLike(isLiked? like-1 : like+1);
        setIsLiked(!isLiked)
    }

    return(
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopleft'>
                        {user.username && (
                            <Link to={`/profile/${user.username}`} style={{ textDecoration: "none" }}>
                                <img className='postUserImg' src={user.profilepic || PF + "Avatar1.png"} alt="" />
                            </Link>
                        )}
                    
                        <span className='postusername'>{user.username}</span>
                        <span className='postDate'>{format(post.createdAt)}</span>
                    </div>
                    <div className='postTopright'>
                        <MoreVert className='postToprightIcon'></MoreVert>
                    </div>
                </div>
                <div className='postCenter'>
                    <span className='postCaption'>{post.desc}</span>
                    <img className='postImg' src={post.img} alt="" />
                </div>
                <div className='postbottom'>
                    <div className='postbottomleft'>
                        <ThumbUp 
                            className='likeIcon'
                            onClick={likeHandler}
                        >
                        </ThumbUp>
                        <Favorite
                            className='heartIcon'
                            onClick={likeHandler}
                            >
                        </Favorite>
                        <span className='likecount'>Liked by {like} people</span> 
                    </div>
                    <div className='postbottomright'>
                        <span className='postComments'>{post.comments.length} comments</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}