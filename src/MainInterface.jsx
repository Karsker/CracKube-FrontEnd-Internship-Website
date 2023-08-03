import React from "react"
import CurrentBalance from "./CurrentBalance"
import LatestTransaction from "./LatestTransaction"
import DuePayment from "./DuePayments"
import Transfer from "./transfer"
import BillingInfo from "./BillingInfo"
import BalanceForm from "./BalanceForm"
import AdCampaign from "./AdCampaignCard"
const MainInterface = (props) => {
    return (
        <div class="cardHolder">
            <h1 style={{fontFamily: 'Poppins-Bold', fontWeight:600, fontSize:40, marginLeft: '23%', gridArea:'header'}}>New Campaign</h1>
            <CurrentBalance/>
            <LatestTransaction/>
            <DuePayment/>
            <Transfer/>
            <BillingInfo/>
            <BalanceForm/>
            <AdCampaign campaignStyles = {{gridArea:'adCampaignCard', backgroundColor:"#FF6D4C"}} text="Ad Campaign Tutorials Video"/>
            <AdCampaign campaignStyles = {{gridArea:'campaignVideoCard', backgroundColor:"#369DC9"}} text="How to make great video campaign"/>
        </div>
    )
}

export default MainInterface