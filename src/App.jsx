import { useState } from 'react'
import './App.css'
import SideNav from './Components/SideNav'
import TopBar from './Components/TopBar'
import MainInterface from './Components/MainInterface'
function App() {
  const [count, setCount] = useState(0)
  return(
    <div className="container">
      <SideNav/>
      <TopBar/>
      <MainInterface/>
    </div>
  )
}

export default App
