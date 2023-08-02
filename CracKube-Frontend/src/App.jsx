import { useState } from 'react'
import './App.css'
import SideNav from './SideNav'
import TopBar from './TopBar'
import MainInterface from './MainInterface'
function App() {
  const [count, setCount] = useState(0)
  return(
    <div className="container">
      <SideNav/>
      <TopBar/>
      <h1 style={{fontFamily: 'Poppins-Bold', fontWeight:600, fontSize:40, marginLeft: '23%'}}>New Campaign</h1>
      <MainInterface/>
    </div>
  )
}

export default App
