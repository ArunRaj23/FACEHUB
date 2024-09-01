import './rightbar.css'
import {  } from "@mui/icons-material"

export default function Rightbar(){
    return(
        <div className='rightbar'>
            <div className='rightbarWrapper'>
                <div className='birthdaycontainer'>
                    <img className='cakeLogo' src='/MyAssets/cake2.png' alt=''/>
                    <span className='birthdayText'> <b>Ashutosh</b> and <b>3 others</b> have birthday today.</span>
                </div>
                <img className='ads' src="/MyAssets/ad1.jpg" alt=""/>
                <div className='rightbarBottom'>
                    <span className='onlineText'>Online Friends</span>
                    <ul className='onlineFriendList'>
                        <li className='onlineFriend'>
                            <div className='rightbarProfileImgcontainer'>
                                <img className='onlinefriendimg' src="/MyAssets/f1.jpg" alt="" />
                                <span className='onlineLogo'></span>
                            </div>
                            <span className='onlinefriendname'>Aman Kumar</span>
                        </li>
                        <li className='onlineFriend'>
                            <div className='rightbarProfileImgcontainer'>
                                <img className='onlinefriendimg' src="/MyAssets/f2.jpg" alt="" />
                                <span className='onlineLogo'></span>
                            </div>
                            <span className='onlinefriendname'>Preeti Kumari</span>
                        </li>
                        <li className='onlineFriend'>
                            <div className='rightbarProfileImgcontainer'>
                                <img className='onlinefriendimg' src="/MyAssets/f9.jpg" alt="" />
                                <span className='onlineLogo'></span>
                            </div>
                            <span className='onlinefriendname'>Kabir Singh</span>
                        </li>
                        <li className='onlineFriend'>
                            <div className='rightbarProfileImgcontainer'>
                                <img className='onlinefriendimg' src="/MyAssets/f3.jpg" alt="" />
                                <span className='onlineLogo'></span>
                            </div>
                            <span className='onlinefriendname'>John Carter</span>
                        </li>
                        <li className='onlineFriend'>
                            <div className='rightbarProfileImgcontainer'>
                                <img className='onlinefriendimg' src="/MyAssets/f13.jpg" alt="" />
                                <span className='onlineLogo'></span>
                            </div>
                            <span className='onlinefriendname'>Hannah Baker</span>
                        </li>
                        <li className='onlineFriend'>
                            <div className='rightbarProfileImgcontainer'>
                                <img className='onlinefriendimg' src="/MyAssets/f14.jpg" alt="" />
                                <span className='onlineLogo'></span>
                            </div>
                            <span className='onlinefriendname'>Clay Jensen</span>
                        </li>
                        <li className='onlineFriend'>
                            <div className='rightbarProfileImgcontainer'>
                                <img className='onlinefriendimg' src="/MyAssets/f4.jpg" alt="" />
                                <span className='onlineLogo'></span>
                            </div>
                            <span className='onlinefriendname'>Ramesh Singh</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}