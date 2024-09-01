import Topbar from '../../components/Topbar/Topbar'
import Leftbar from '../../components/leftSidebar/leftbar'
import ProfileRight from '../../components/profileright/profileright'
import './profile.css'
import { useParams } from 'react-router'


export default function Profile(){
  const userName= useParams().username;
    return(
    <>
      <Topbar username={userName}></Topbar>
      <div className='profileContainer'>
        <Leftbar></Leftbar>
        <ProfileRight username= {userName}/>
      </div>
    </>
    )
}