import './profileright.css'
import Feed from '../feed/feed'
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
const BASE_URL = "http://localhost:8800/api/"
import FriendList from '../friendsList/friendsList';
import { AuthContext } from '../../context/AuthContext';


export default function ProfileRight({username}){
    const [user,setUser]= useState({});
    const PF=import.meta.env.VITE_PUBLIC_FOLDER + "/";
    const [friends,setFriends]=useState([]);
    const {user:currentuser, dispatch}=useContext(AuthContext);
    const [followed,setFollowed]= useState(currentuser.followings.includes(user._id));

    useEffect(()=>{
        const fetchUser=async()=>{
            const res= await axios.get(BASE_URL+`users?username=${username}`);
            setUser(res.data);
            const followers=  res.data.followers || [];
            const followings= res.data.followings || [];
            const mergedArray= followers.concat(followings);
            const allfriends= [...new Set(mergedArray)];
            setFriends(allfriends);
        };
        fetchUser();
    },[username]);

    useEffect(() => {
        if (user?._id) {
            setFollowed(currentuser.followings.includes(user._id));
        }
    }, [currentuser, user.id]);

    const handleFollow= async ()=>{
        try{
            if(followed){
                await axios.put(BASE_URL+"users/"+user._id+"/unfollow",{userId:currentuser._id});
                dispatch({type:"UNFOLLOW",payload:user._id})
            }
            else{
                await axios.put(BASE_URL+"users/"+user._id+"/follow",{userId:currentuser._id});
                dispatch({type:"FOLLOW",payload:user._id})
            }
        }catch(err){
            console.log(err);
        }
        setFollowed(!followed);
    }

    return(
        <div className='profileright'>
            <div className='profilerightTop'>
                <div className='coverAnddpImgContainer'>
                    <img className='coverImg' src={user.coverpic || PF + "noCover.jpg"} alt="" />
                    <img className='profilepageImg' src={user.profilepic || PF + "Avatar1.png"} alt="" />
                </div>
                <div className='profileInfo'>
                    <h4 className='profileusername'>{user.username}</h4>
                    <span className='profileuserBio'>{user.bio ? user.bio : "Hey, I am using Facehub"}</span>
                </div>              
            </div>
            <div className='profilerightBottom'>
                <div className='profilerightBottomLeft'>
                    <Feed username={username} isHome={false}></Feed> 
                </div>
                <div className='profilerightBottomRight'>
                    <div className='profilerightBottomRightTop'>
                        {username!==currentuser.username &&
                            (
                            <button className='followButton' onClick={handleFollow}>
                                {followed? "Unfollow" : "Follow"}
                            </button>  
                            )
                        }
                        
                        <h4 className='userInfoHeading'>User information</h4>
                        <div className='userprofileInfo'>
                            <span className='Infokey'>City:</span>
                            <span className='Infovalue'>{user.city}</span>
                        </div>
                        <div className='userprofileInfo'>
                            <span className='Infokey'>Hometown:</span>
                            <span className='Infovalue'>{user.hometown}</span>
                        </div>
                        <div className='userprofileInfo'>
                            <span className='Infokey'>Relationship:</span>
                            <span className='Infovalue'>{user.relationship===1? "Single": user.relationship===2? "Married" : "-" }</span>
                        </div>
                    </div>
                    <div className='profilerightBottomRightBottom'>
                        <h4 className='userInfoHeading'>User friends</h4>
                        <div className='profilefriendsCollection'>
                            {friends.map( (f) => (
                            <FriendList key={f.id} friend={f} />
                            ))}
                        </div>
                    </div>
                    
                </div>          
            </div>
        </div>
    )
}