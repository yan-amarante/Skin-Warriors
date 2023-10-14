import './App.css'
import Header from './Components/Header/Header'
import { Outlet } from "react-router-dom"

function App() {
  return (
    <section className='container'>
      <Header />
      <Outlet />
    </section>
  )

}

export default App
