import './App.css'
import Allplaces from './components/Allplaces'
import Home from './components/Home'
import Navbar from './components/Navbar'

import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      {/* <Allplaces/> */}
      <Outlet/>
    </>
  )
}

export default App
