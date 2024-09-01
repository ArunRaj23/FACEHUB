import './share.css'
import { Tag, PermMedia, Place, Mood} from "@mui/icons-material"
import { useContext, useRef, useState } from 'react';
const BASE_URL = "http://localhost:8800/api/"
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import  {storage}  from "../../../Firebase/firebaseConfig"
import { v4 as uuidv4 } from 'uuid';


export default function Share(){
    const {user}= useContext(AuthContext);
    const PF=import.meta.env.VITE_PUBLIC_FOLDER + "/";
    const desc=useRef();
    const [file,setFile]= useState(null);

    const uploadPost = async (file) => {
        const uniqueFileName = `${uuidv4()}_${file.name}`;
        const storageRef = ref(storage, `posts/${uniqueFileName}`);
        try {
            await uploadBytes(storageRef, file);
            const url = await getDownloadURL(storageRef);
            return url;
        } catch (error) {
            console.log("error uploading image");
        }
    };

    const submitHandler=async (e)=>{
        e.preventDefault()
        const url = await uploadPost(file);

        const newpost={
            userId: user._id,
            desc: desc.current.value,
            content: e.target.files,
            fileUrl: url,
        }
        
        try{
            await axios.post( BASE_URL+"posts/newpost", newpost ,{
                headers: { "Content-Type": "application/json" },
              });

        }catch(error){
            console.log(error);
        }
    }

    return(
        <div className='share'>
            <div className='shareWrapper'>
                <div className='shareTop'>
                    <img className='shareImg' src={user.profilepic || PF + "Avatar1.png"} alt="" />
                    <input
                        placeholder={"What's on your mind "+user.username+" ?"}
                        className='shareInput'
                        ref={desc}
                    />
                </div>
                <hr className='sharehr'/>
                <form className='shareBottom' onSubmit={submitHandler}>
                    <div className='shareOptions'>
                        <label htmlFor='file' className='shareOption'>
                            <PermMedia htmlColor='tomato' className='shareOptionIcon'></PermMedia>
                            <span className='shareOptionText'>Photo or Video</span>
                            <input
                                name='postFile'
                                style={{display:"none"}}
                                type="file"
                                id='file'
                                accept='.png,.jpeg,.jpg'
                                onChange={(e)=>setFile(e.target.files[0])}
                            />
                        </label>
                        <div className='shareOption'>
                            <Tag htmlColor='blue' className='shareOptionIcon'></Tag>
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className='shareOption'>
                            <Place htmlColor='green' className='shareOptionIcon'></Place>
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className='shareOption'>
                            <Mood htmlColor='goldenrod' className='shareOptionIcon'></Mood>
                            <span className='shareOptionText'>Feelings</span>
                        </div>
                    </div>
                    <button className='shareButton' type='submit'>Share</button>
                </form>
            </div>
        </div>
    )
}