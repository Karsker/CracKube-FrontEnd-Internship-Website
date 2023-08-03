import React from "react"

const DuePayment = (props) => {
    return (
        <div className="duePaymentContainer"> 
            <h1 style={{fontFamily: "Poppins-Bold", fontSize: "20px"}}>Payment Due</h1>
            <table>
                <tr>
                    <th><input type="checkbox"/></th>
                    <th>Ads ID</th>
                    <th>Social Network</th>
                    <th>Total Spend</th>
                    <th>Status</th>
                    <th></th>
                </tr>
                <tr>
                    <td><input type="checkbox" style={{borderColor:'white'}}></input></td>
                    <td>#AD-001234</td>
                    <td>Instagram</td>
                    <td style={{color:'#2BC155', fontFamily:"Poppins-Bold"}}>$539.28</td>
                    <td><button className="paymentBtn">Unpaid</button></td>
                    <td></td>
                </tr>
                <tr>
                    <td><input type="checkbox"></input></td>
                    <td>#AD-001234</td>
                    <td>YouTube</td>
                    <td style={{color:'#2BC155', fontFamily:"Poppins-Bold"}}>$539.28</td>
                    <td><button className="paymentBtn">Unpaid</button></td>
                    <td></td>
                </tr>
                <tr>
                    <td><input type="checkbox"></input></td>
                    <td>#AD-001234</td>
                    <td>FaceBook</td>
                    <td style={{color:'#2BC155', fontFamily:"Poppins-Bold"}}>$539.28</td>
                    <td><button className="paymentBtn">Unpaid</button></td>
                    <td></td>
                </tr>
            </table>
        </div>
    )
}

export default DuePayment