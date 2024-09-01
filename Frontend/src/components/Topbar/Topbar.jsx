import "./topbar.css"
import { Search , AccountCircle, Notifications, Chat } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";
const BASE_URL = "http://localhost:8800/api/"

export default function Topbar(){
    
    const PF=import.meta.env.VITE_PUBLIC_FOLDER + "/";
    const {user}= useContext(AuthContext)
    
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to='/' style={{textDecoration:"none"}}>
                    <span className="logo">Facehub</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                <Search className="searchIcon"></Search>
                <input placeholder="Search here" type="text" className="searchInput"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarlinks">
                    <span className="topbarlink">homepage</span>
                    <span className="topbarlink">timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <AccountCircle></AccountCircle>
                        <span className="Iconbadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat></Chat>
                        <span className="Iconbadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications></Notifications>
                        <span className="Iconbadge">3</span>
                    </div>
                </div>
                
                {/* change the link to profile. */}
                <Link to={`/profile/${user.username}`} style={{textDecoration:"none"}}>
                    <img src={user.profilepic || PF + "Avatar1.png"} alt="" className="profileImg"/>
                </Link>
                
            </div>
        </div>
    )
}