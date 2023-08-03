import React from "react";
import calendarIcon from '/src/assets/Icons/Components/Calendar.png'
import menuIcon from '/src/assets/Icons/Components/menu.png'

const BalanceForm = (props) => {
    return (
        <div className = "balanceFormContainer">
            <div style={{gridArea: 'header', position: 'relative'}}> 
                <h1 style={{fontFamily: "Poppins-Bold", fontSize: "20px", position: 'relative', left:'10px'}}>Add Balance Form</h1>
                <img src={menuIcon} style = {{position: 'absolute', right:'30px', top:'10px'}}/>
            </div>
            <div style={{gridArea:'companyName', display:'flex', flexDirection:'column'}}>
                <p style={{fontFamily: "Poppins-Bold", fontSize: "16px"}}>Company Name<p style={{display:'inline-block', color:'#FD6162'}}>&nbsp;*</p></p>
                <input type="textbox" className='transferInput' style={{width: '100%', height:'30px'}}/>
            </div>
            <div style={{gridArea:'dueDate', display:'flex', flexDirection:'column'}}>
                <p style={{fontFamily: "Poppins-Bold", fontSize: "16px"}}>Due Date<p style={{display:'inline-block', color:'#FD6162'}}>&nbsp;*</p></p>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <input type="textbox" className='transferInput' style={{width: '100%', display:'inline-block', height:'30px'}}/>
                    <img src={calendarIcon} style={{backgroundColor:'#2BC155', borderRadius:'12px', height:'20px', width:'20px', padding:'10px'}}/>
                </div>
            </div>
            <div style={{gridArea:'idAds', display:'flex', flexDirection:'column'}}>
                <p style={{fontFamily: "Poppins-Bold", fontSize: "16px"}}>ID Ads<p style={{display:'inline-block', color:'#FD6162'}}>&nbsp;*</p></p>
                <input type="textbox" className='transferInput' style={{width: '100%', display:'inline-block', height:'30px'}}/>
            </div>
            <div style={{gridArea:'totalBudget', display:'flex', flexDirection:'column'}}>
                <p style={{fontFamily: "Poppins-Bold", fontSize: "16px"}}>Total Budget<p style={{display:'inline-block', color:'#FD6162'}}>&nbsp;*</p></p>
                <input type="textbox" className='transferInput' style={{width: '100%', display:'inline-block', height:'30px'}}/>
            </div>
            <div style={{gridArea:'sendBtn', display:'flex', flexDirection:'column'}}>
                <p style={{fontFamily: "Poppins-Bold", fontSize: "16px"}}><br/><br/></p>
                <button style={{color:'black', backgroundColor:'#2BC155', fontFamily:'Poppins'}}>Send</button>
            </div>
        </div>
    )
}

export default BalanceForm