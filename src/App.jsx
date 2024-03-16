import './App.css'
import Navbar from './components/Navbar'

import { Outlet } from 'react-router-dom'
import SearchAllPlacesContextProvider from './store/SearchAllPlacesContextProvider'

function App() {

  return (
    <SearchAllPlacesContextProvider>
      <Navbar/>
      <Outlet/>
    </SearchAllPlacesContextProvider>
  )
}

export default App
