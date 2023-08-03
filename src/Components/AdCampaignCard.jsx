import React from "react";
import playIcon from '/src/assets/Icons/Components/play.png'
const AdCampaign = (props) => {
    return (
        <div className="campaignContainer" style={props.campaignStyles}>
            <p style={{fontFamily:"Poppins-Bold", fontSize: "20px"}}>{props.text}</p>
            <img src={playIcon} style={{height:'80px', width:'80px'}}/>
        </div>
    )
}

export default AdCampaign