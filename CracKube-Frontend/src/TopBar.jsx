import React from 'react'
import searchIcon from './assets/Icons/SideNavbar/Search.png'
import alertIcon from './assets/Icons/SideNavbar/Alarm.png'
import messageIcon from './assets/Icons/TopBar/Message.png'
import settingsIcon from './assets/Icons/TopBar/Settings.png'
const TopBar = (props) => {
    return (
        <div class="topbar">
            <div className="searchBar">
                <img src={searchIcon} style={{height:25, width:24, marginLeft: 30, marginRight: 30}}></img>
                <input type="text" placeholder="Search here" className="searchArea"></input>
            </div> 
            <div className="topBarStatusIcon"><img src={alertIcon}></img></div>
            <div className="topBarStatusIcon"><img src={messageIcon}></img></div>
            <div className="topBarStatusIcon"><img src={settingsIcon}></img></div>
        </div>
    )
}
export default TopBar