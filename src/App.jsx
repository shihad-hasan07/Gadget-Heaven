import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { createContext, useContext } from "react"


function App() {

  return (
    <div>
      <Header></Header>

      {/* dynamic Content */}
      <div className="min-h-[644px]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default App
