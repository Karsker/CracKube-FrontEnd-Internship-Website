import React from "react"
import CurrentBalance from "/src/Components/CurrentBalance"
import LatestTransaction from "/src/Components/LatestTransaction"
import DuePayment from "/src/Components/DuePayments"
import Transfer from "/src/Components/transfer"
import BillingInfo from "/src/Components/BillingInfo"
import BalanceForm from "/src/Components/BalanceForm"
import AdCampaign from "/src/Components/AdCampaignCard"
const MainInterface = (props) => {
    return (
        <div class="cardHolder">
            <h1 style={{fontFamily: 'Poppins-Bold', fontSize:40, position:'relative', gridArea:'header', textAlign:'left', width:'100%'}}>New Campaign</h1>
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