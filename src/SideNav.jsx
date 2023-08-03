import React from 'react'
import homeIcon from './assets/Icons/SideNavbar/Home.png'
import headerLogo from './assets/Icons/SideNavbar/headerLogo.png'
import categoryIcon from './assets/Icons/SideNavbar/Category.png'
import socialMediaIcon from './assets/Icons/SideNavbar/Discovery.png'
import spendingIcon from './assets/Icons/SideNavbar/Spending.png'
import formCampaignIcon from './assets/Icons/SideNavbar/FormCampaign.png'
import analyticsIcon from './assets/Icons/SideNavbar/Analytics.png'
import notificationIcon from './assets/Icons/SideNavbar/Notification.png'
import { useRef, useEffect } from 'react'
const SideNav = (props) => {
    const inputReference = useRef(null);

    useEffect(() => {
        inputReference.current.focus();
    }, []);
    return (
        <div className="sidenav">
            <div class="navlogo"><img src={headerLogo} style={{height: 35, width: 41}}/>Iklan.</div>

            <div className="navbarLink" ><img src={homeIcon} className="navIcon"/><a href="#section" id="home" ref={inputReference}>Dashboard</a><div className="selectionBar"></div></div>
            <div className="navbarLink"><img src={categoryIcon} className="navIcon"/><a href="#section">Campaign</a><div className="selectionBar"></div></div>
            <div className="navbarLink"><img src={socialMediaIcon} className="navIcon"/><a href="#section">Social Network</a><div className="selectionBar"></div></div>
            <div className="navbarLink"><img src={spendingIcon} className="navIcon"/><a href="#section">Spending</a><div className="selectionBar"></div></div>
            <div className="navbarLink"><img src={analyticsIcon} className="navIcon"/><a href="#section">Analytics</a><div className="selectionBar"></div></div>
            <div className="navbarLink"><img src={formCampaignIcon} className="navIcon"/><a href="#section">Form Campaign</a><div className="selectionBar"></div></div>
            <div className="navbarLink"><img src={notificationIcon} className="navIcon"/><a href="#section">Notification</a><div className="selectionBar"></div></div>
            <div className="navbarLink"><img src={homeIcon} className="navIcon"/><a href="#section">Payment</a><div className="selectionBar"></div></div>
            
        </div>
        
    )
}

export default SideNav