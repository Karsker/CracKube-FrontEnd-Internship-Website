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
      <MainInterface/>
    </div>
  )
}

export default App
