import axios from 'axios'
const BASE_URL = "http://localhost:8800/api/"

export const loginCall = async(userCredentials, dispatch)=>{
    dispatch({
        type: "LOGIN_START"
    });
    try{
        const res= await axios.post(BASE_URL+"auth/signin", userCredentials);
        dispatch({
            type:"LOGIN_SUCCESS",
            payload: res.data,
        })
        console.log(res.data)
    }catch(error){
        dispatch({
            type:"LOGIN_FAILURE",
            payload: error,
        })
    }
}