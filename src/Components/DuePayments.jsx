import React from "react"
import menuIcon from '/src/assets/Icons/Components/menu.png'

const DuePayment = (props) => {
    return (
        <div className="duePaymentContainer"> 
            <div style={{position: 'relative'}}> 
                <h1 style={{fontFamily: "Poppins-Bold", fontSize: "20px", position: 'relative', left:'20px'}}>Latest Transactions</h1>
                <img src={menuIcon} style = {{position: 'absolute', right:'30px', top:'0px'}}/>
            </div>
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
                    <td><button className="paymentBtn paymentUnpaid">Unpaid</button></td>
                    <td><img src={menuIcon}/></td>
                </tr>
                <tr>
                    <td><input type="checkbox"></input></td>
                    <td>#AD-001234</td>
                    <td>YouTube</td>
                    <td style={{color:'#2BC155', fontFamily:"Poppins-Bold"}}>$539.28</td>
                    <td><button className="paymentBtn paymentUnpaid">Unpaid</button></td>
                    <td><img src={menuIcon}/></td>
                </tr>
                <tr>
                    <td><input type="checkbox"></input></td>
                    <td>#AD-001234</td>
                    <td>FaceBook</td>
                    <td style={{color:'#2BC155', fontFamily:"Poppins-Bold"}}>$539.28</td>
                    <td><button className="paymentBtn paymentUnpaid">Unpaid</button></td>
                    <td><img src={menuIcon}/></td>
                </tr>
            </table>
        </div>
    )
}

export default DuePayment