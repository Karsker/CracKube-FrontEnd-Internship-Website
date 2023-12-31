import React from "react"

const Transfer = (props) => {
    return (
        <div className="transferContainer">
            <h1 style={{fontFamily: "Poppins-Bold", fontSize: "20px"}}>Transfer</h1>
            <p style={{fontFamily:"Poppins", fontSize: "16px"}}>Transfer to</p>
            <input type="textbox" className='transferInput'/>
            <p style={{fontFamily:"Poppins", fontSize: "16px"}}>Amount</p>
            <input type="textbox" className='transferInput'/>
            <p style={{fontFamily:"Poppins", fontSize: "16px"}}>Your Pin</p>
            <div style={{display:'flex', flexDirection:'row', width:'80%'}}>
                <input type="password" className='transferInput'/>
                <button style={{borderRadius:'12px', backgroundColor:'#369DC9', color:'black', fontFamily:'Poppins', fontSize:'12px', width:'150px'}}>Transfer</button>
            </div>
        </div>
    )
}

export default Transfer