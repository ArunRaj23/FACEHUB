import './leftbar.css'
import {RssFeed, Chat, Groups, PlayCircle,Bookmarks, Work, HelpOutline, Event, School} from "@mui/icons-material"

export default function Leftbar(){
    return(
        <div className='leftbar'>
            <div className='leftbarWrapper'>
                <ul className='leftbarList'>
                    <li className='leftbarListItem'>
                        <RssFeed className='leftbarIcon'></RssFeed>
                        <span className='leftbarIconText'>Feed</span>
                    </li>
                    <li className='leftbarListItem'>
                        <Chat className='leftbarIcon'></Chat>
                        <span className='leftbarIconText'>Chat</span>
                    </li>
                    <li className='leftbarListItem'>
                        < PlayCircle className='leftbarIcon'></PlayCircle>
                        <span className='leftbarIconText'>Videos</span>
                    </li>
                    <li className='leftbarListItem'>
                        <Groups className='leftbarIcon'></Groups>
                        <span className='leftbarIconText'>Groups</span>
                    </li>
                    <li className='leftbarListItem'>
                        <Bookmarks className='leftbarIcon'></Bookmarks>
                        <span className='leftbarIconText'>Bookmarks</span>
                    </li>
                    <li className='leftbarListItem'>
                        <HelpOutline className='leftbarIcon'></HelpOutline>
                        <span className='leftbarIconText'>Questions</span>
                    </li>
                    <li className='leftbarListItem'>
                        <Work className='leftbarIcon'></Work>
                        <span className='leftbarIconText'>Jobs</span>
                    </li>
                    <li className='leftbarListItem'>
                        <Event className='leftbarIcon'></Event>
                        <span className='leftbarIconText'>Events</span>
                    </li>
                    <li className='leftbarListItem'>
                        <School className='leftbarIcon'></School>
                        <span className='leftbarIconText'>Courses</span>
                    </li>
                </ul>
                <button className='leftbarButton'>Show more</button>
                <hr className='leftbarHr'/>
                <ul className='leftbarFriendList'>
                    <li className='leftbarFriend'>
                        <img src="/MyAssets/f4.jpg" alt="" className='leftbarFriendImg'/>
                        <span className='leftbarFriendName'>Ashutosh</span>
                    </li>
                    <li className='leftbarFriend'>
                        <img src="/MyAssets/f3.jpg" alt="" className='leftbarFriendImg'/>
                        <span className='leftbarFriendName'>Kohli</span>
                    </li>
                    <li className='leftbarFriend'>
                        <img src="/MyAssets/f7.jpg" alt="" className='leftbarFriendImg'/>
                        <span className='leftbarFriendName'>Sabrina</span>
                    </li>
                    <li className='leftbarFriend'>
                        <img src="/MyAssets/f4.jpg" alt="" className='leftbarFriendImg'/>
                        <span className='leftbarFriendName'>John</span>
                    </li>
                    <li className='leftbarFriend'>
                        <img src="/MyAssets/f7.jpg" alt="" className='leftbarFriendImg'/>
                        <span className='leftbarFriendName'>Sabrina</span>
                    </li>
                    <li className='leftbarFriend'>
                        <img src="/MyAssets/f1.jpg" alt="" className='leftbarFriendImg'/>
                        <span className='leftbarFriendName'>Ashutosh</span>
                    </li>
                    <li className='leftbarFriend'>
                        <img src="/MyAssets/f7.jpg" alt="" className='leftbarFriendImg'/>
                        <span className='leftbarFriendName'>Sabrina</span>
                    </li>
                    <li className='leftbarFriend'>
                        <img src="/MyAssets/f7.jpg" alt="" className='leftbarFriendImg'/>
                        <span className='leftbarFriendName'>Sabrina</span>
                    </li>
                    <li className='leftbarFriend'>
                        <img src="/MyAssets/f1.jpg" alt="" className='leftbarFriendImg'/>
                        <span className='leftbarFriendName'>Ashutosh</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}