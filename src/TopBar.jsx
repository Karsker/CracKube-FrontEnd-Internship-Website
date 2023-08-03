import React from 'react'
import searchIcon from './assets/Icons/SideNavbar/Search.png'
import alertIcon from './assets/Icons/SideNavbar/Alarm.png'
import messageIcon from './assets/Icons/TopBar/Message.png'
import settingsIcon from './assets/Icons/TopBar/Settings.png'
import userIcon from './assets/Icons/Components/user.png'
import statusGreenIcon from './assets/Icons/TopBar/statusGreen.png'
const TopBar = (props) => {
    return (
        <div class="topbar">
            <div className="searchBar">
                <img src={searchIcon} style={{height:25, width:24, marginLeft: 30, marginRight: 30}}></img>
                <input type="text" placeholder="Search here" className="searchArea"></input>
            </div> 

            <div>
                <div className="topBarStatusIcon"><img src={alertIcon}></img></div>
            </div>
            <div className="topBarStatusIcon"><img src={messageIcon}></img></div>
            <div className="topBarStatusIcon"><img src={settingsIcon}></img></div>
            <p style={{fontFamily:'Poppins-Bold'}}>User</p>
            <div className="topBarStatusIcon"><img src={userIcon} style={{height:'60px', width:'60px'}}></img></div>
        </div>
    )
}
export default TopBar