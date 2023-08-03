import React from 'react'
import balanceIcon from '/src/assets/Icons/Components/balance.png'
const CurrentBalance = (props) => {
    return (
        <div className="currentBalanceContainer">
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <p style={{fontFamily: "Poppins-Bold", fontSize: "20px"}}>Current Balance</p>
                <img src={balanceIcon} style = {{width:'83px', height:'51px'}}/>
            </div>
            <p style={{fontFamily: "Poppins-Bold", fontSize: "64px"}}>$ 82,683.82</p>
            <p style={{fontFamily: "Poppins", fontSize: "16px"}}>1234 **** 9876</p>
        </div>
    )   
}

export default CurrentBalance