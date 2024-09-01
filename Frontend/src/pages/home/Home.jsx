import Topbar from '../../components/Topbar/Topbar'
import Leftbar from '../../components/leftSidebar/leftbar'
import Feed from '../../components/feed/feed'
import Rightbar from '../../components/rightSidebar/rightbar'
import './home.css'

export default function Home({username}) {
  return (
    <>
      <Topbar username={username}></Topbar>
      <div className='homeContainer'>
        <Leftbar></Leftbar>
        <Feed username={username} isHome={true}></Feed>
        <Rightbar/>
      </div>
    </>
  )
}