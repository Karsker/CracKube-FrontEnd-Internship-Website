import React from 'react'
import homeIcon from './assets/Icons/SideNavbar/Home.png'
import headerLogo from './assets/Icons/SideNavbar/headerLogo.png'
import categoryIcon from './assets/Icons/SideNavbar/Category.png'
const SideNav = (props) => {
    return (
        <div className="sidenav">
            <div class="navlogo"><img src={headerLogo} style={{height: 35, width: 41}}/>Iklan.</div>
            <div className="navbarLink"><img src={homeIcon} style={{height: 24, width: 24}}/><a href="#section">Dashboard</a></div>
            <div className="navbarLink"><img src={categoryIcon} style={{height: 24, width: 24}}/><a href="#section">Campaign</a></div>
            <div className="navbarLink"><img src={homeIcon} className="navIcon"/><a href="#section"> Social Network</a></div>
            <div className="navbarLink"><img src={homeIcon} style={{height: 24, width: 24}}/><a href="#section">Spending</a></div>
            <div className="navbarLink"><img src={homeIcon} style={{height: 24, width: 24}}/><a href="#section">Analystics</a></div>
            <div className="navbarLink"><img src={homeIcon} style={{height: 24, width: 24}}/><a href="#section">Form Campaign</a></div>
            <div className="navbarLink"><img src={homeIcon} style={{height: 24, width: 24}}/><a href="#section">Notification</a></div>
            <div className="navbarLink"><img src={homeIcon} style={{height: 24, width: 24}}/><a href="#section">Payment</a></div>
        </div>
    )
}

export default SideNav