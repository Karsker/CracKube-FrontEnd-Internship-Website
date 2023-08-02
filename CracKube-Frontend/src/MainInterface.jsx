import React from "react"
import CurrentBalance from "./CurrentBalance"
import LatestTransaction from "./LatestTransaction"
import DuePayment from "./DuePayments"
import Transfer from "./transfer"
const MainInterface = (props) => {
    return (
        <div class="cardHolder">
            <CurrentBalance/>
            <LatestTransaction/>
            <DuePayment/>
            <Transfer/>
        </div>
    )
}

export default MainInterface