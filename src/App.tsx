import './App.css'
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
    <Header/>
    <NavBar/>
    <Outlet/>
    </>
  )

}

export default App
