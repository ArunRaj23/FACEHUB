import './feed.css'
import Share from '../share/share'
import Post from '../../components/post/post'
import { useState, useEffect } from 'react'
import axios from 'axios'

const BASE_URL = "http://localhost:8800/api/"

export default function Feed({username,isHome}){
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        const fetchPosts=async()=>{
            const user= await axios.get(`${BASE_URL}users?username=${username}`);
            const userId= user.data._id;
            const res= isHome? await axios.get(`${BASE_URL}posts/timeline/${userId}`):
                                await axios.get(`${BASE_URL}posts/profile/${username}`);     
            setPosts(res.data.sort((p1,p2)=>{
                return new Date(p2.createdAt)- new Date(p1.createdAt);
            }));
        };
        fetchPosts();
    },[username,isHome]);

    return(
        <div className='feed'>
            <div className='feedWrapper'>
                <Share ></Share>
                {posts.map( (p) => (
                    <Post key={p._id} post={p}/>
                ))}
            </div>
        </div>
    )
}