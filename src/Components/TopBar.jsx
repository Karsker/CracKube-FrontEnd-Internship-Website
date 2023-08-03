import React from 'react'
import searchIcon from '/src/assets/Icons/SideNavbar/Search.png'
import alertIcon from '/src/assets/Icons/SideNavbar/Alarm.png'
import messageIcon from '/src/assets/Icons/TopBar/Message.png'
import settingsIcon from '/src/assets/Icons/TopBar/Settings.png'
import statusGreenIcon from '/src/assets/Icons/TopBar/statusGreen.png'
import statusGreyIcon from '/src/assets/Icons/TopBar/statusGrey.png'
import statusRedIcon from '/src/assets/Icons/TopBar/statusRed.png'
import samanthaUserIcon from '/src/assets/Icons/TopBar/samantha-user.png'
const TopBar = (props) => {
    return (
        <div class="topbar">
            <div className="searchBar">
                <img src={searchIcon} style={{height:25, width:24, marginLeft: 30, marginRight: 30}}></img>
                <input type="text" placeholder="Search here" className="searchArea"></input>
            </div> 

            <div style={{position:'relative'}}>
                <div className="topBarStatusIcon"><img src={alertIcon} style={{position:'relative'}}></img></div>
                <img src={statusGreenIcon} style={{position:'absolute', zIndex:1, top:'0px', right:'0px', marginLeft:'100px'}}/>
            </div>
            <div style={{position:'relative'}}>
                <div className="topBarStatusIcon"><img src={messageIcon} style={{position:'relative'}}></img></div>
                <img src={statusRedIcon} style={{position:'absolute', zIndex:1, top:'0px', right:'0px', marginLeft:'100px'}}/>
            </div>
            <div style={{position:'relative'}}>
                <div className="topBarStatusIcon"><img src={settingsIcon} style={{position:'relative'}}></img></div>
                <img src={statusGreyIcon} style={{position:'absolute', zIndex:1, top:'0px', right:'0px', marginLeft:'100px'}}/>
            </div>
            <div className="userDetails">
                <div className="userName">
                    <p style={{fontFamily:'Poppins-Bold', fontSize:'16px'}}>Samantha</p>
                    <p style={{fontFamily:'Poppins', color:'#828282', fontSize:'12px'}}>Peterdraw.co</p>
                </div>
                <div className="topBarStatusIcon"><img src={samanthaUserIcon} style={{height:'60px', width:'60px'}}></img></div>
            </div>
        </div>
    )
}
export default TopBar