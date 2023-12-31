import React from "react"
import showIcon from '/src/assets/Icons/Components/Show.png'
import menuIcon from '/src/assets/Icons/Components/menu.png'

const BillingInfo = (props) => {
    return (
        <div class="billingContainer">
            <div style={{position: 'relative'}}> 
                <h1 style={{fontFamily: "Poppins-Bold", fontSize: "20px", position: 'relative', left:'20px'}}>Billing Info</h1>
                <img src={menuIcon} style = {{position: 'absolute', right:'30px', top:'0px'}}/>
            </div>
            <table>
                <tr>
                    <th>Company</th>
                    <th>Address</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th></th>
                </tr>
                <tr>
                    <td style={{textAlign:'left', marginLeft: '100px'}}><div><div className="companyIcon">A</div>Peterdraw.co</div></td>
                    <td>New York Steel 16th</td>
                    <td style={{color:'white', fontFamily:"Poppins-Bold"}}>$122,42.93</td>
                    <td><button className="billingBtn paid">Paid</button></td>
                    <th><img src={showIcon}/></th>
                </tr>
                <tr>
                    <td style={{textAlign:'left'}}><div><div className="companyIcon" style={{backgroundColor:'#FD6162'}}>A</div>Bridgestone.co</div></td>
                    <td>New York Steel 16th</td>
                    <td style={{color:'white', fontFamily:"Poppins-Bold"}}>$122,42.93</td>
                    <td><button className="billingBtn pending">Pending</button></td>
                    <th><img src={showIcon}/></th>
                </tr>
                <tr>
                    <td style={{textAlign:'left'}}><div><div className="companyIcon" style={{backgroundColor:'#369DC9'}}>A</div>Sevenma.id</div></td>
                    <td>New York Steel 16th</td>
                    <td style={{color:'white', fontFamily:"Poppins-Bold"}}>$122,42.93</td>
                    <td><button className="billingBtn paid">Paid</button></td>
                    <th><img src={showIcon}/></th>
                </tr>
                <tr>
                    <td style={{textAlign:'left'}}><div><div className="companyIcon" style={{backgroundColor:'#D45BFF'}}>A</div>Wowcracky.co</div></td>
                    <td>New York Steel 16th</td>
                    <td style={{color:'white', fontFamily:"Poppins-Bold"}}>$122,42.93</td>
                    <td><button className="billingBtn unpaid">Unpaid</button></td>
                    <th><img src={showIcon}/></th>
                </tr>
            </table>
        </div>
    )
}

export default BillingInfo