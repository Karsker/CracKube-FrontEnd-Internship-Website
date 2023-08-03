import React from "react"
import menuIcon from '/src/assets/Icons/Components/menu.png'
const LatestTransaction = (props) => {
    return (
        <div className="transactionContainer">
            <div style={{position: 'relative'}}> 
                <h1 style={{fontFamily: "Poppins-Bold", fontSize: "20px", position: 'relative', left:'20px'}}>Latest Transactions</h1>
                <img src={menuIcon} style = {{position: 'absolute', right:'30px', top:'0px'}}/>
            </div>
            <table>
                <tr>
                    <th><input type="checkbox"/></th>
                    <th>Name ADS</th>
                    <th>Total Spend</th>
                    <th>Status</th>
                    <th></th>
                </tr>
                <tr>
                    <td><input type="checkbox" style={{borderColor:'white'}}></input></td>
                    <td>50% OFF Floor Lamp Get It Now!</td>
                    <td style={{color:'#2BC155', fontFamily:"Poppins-Bold"}}>$539.28</td>
                    <td><button className="paymentBtn">Paid</button></td>
                    
                </tr>
                <tr>
                    <td><input type="checkbox"></input></td>
                    <td>50% OFF Floor Lamp Get It Now!</td>
                    <td style={{color:'#2BC155', fontFamily:"Poppins-Bold"}}>$349.28</td>
                    <td><button className="paymentBtn">Paid</button></td>
                </tr>
                <tr>
                    <td><input type="checkbox"></input></td>
                    <td>Lorem Ipsum sit dolor amet</td>
                    <td style={{color:'#2BC155', fontFamily:"Poppins-Bold"}}>$569.28</td>
                    <td><button className="paymentBtn">Paid</button></td>
                </tr>
                <tr>
                    <td><input type="checkbox"></input></td>
                    <td>50% OFF Floor Lamp Get It Now!</td>
                    <td style={{color:'#2BC155', fontFamily:"Poppins-Bold"}}>$564.28</td>
                    <td><button className="paymentBtn">Paid</button></td>
                </tr>
                <tr>
                    <td><input type="checkbox"></input></td>
                    <td>Lorem Ipsum sit dolor amet</td>
                    <td style={{color:'#2BC155', fontFamily:"Poppins-Bold"}}>$507.28</td>
                    <td><button className="paymentBtn">Paid</button></td>
                </tr>
                <tr>
                    <td><input type="checkbox"></input></td>
                    <td>Lorem Ipsum sit 50% OFF</td>
                    <td style={{color:'#2BC155', fontFamily:"Poppins-Bold"}}>$123.28</td>
                    <td><button className="paymentBtn">Paid</button></td>
                </tr>
            </table>
        </div>
    )
}

export default LatestTransaction