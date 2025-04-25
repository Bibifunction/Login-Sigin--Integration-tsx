import { useState, useEffect } from "react"
import SignIn from "./components/auth/SignIn"
import Login from "./components/auth/Login"
import ForgotPassword from "./components/auth/ForgotPassword"
import "./App.css"
import "./index.css"
import "./components/ui/Input.css"
import "./components/ui/Button.css"

function App() {

  const [currentPage, setCurrentPage] = useState("signin")

  
  const customNavigation = {
    navigate: (path: string) => {
      setCurrentPage(path)
    },
  }

  
  useEffect(() => {
    const root = document.documentElement

    if (currentPage === "login") {
    
      root.style.setProperty("--color-background", "var(--color-background-login)")
    } else if (currentPage === "signin") {
     
      root.style.setProperty("--color-background", "var(--color-background-signin)")
    }
  }, [currentPage])

 
  const renderPage = () => {
    
    const basePage =
      currentPage === "signin" || currentPage === "default" ? (
        <SignIn customNavigation={customNavigation} />
      ) : (
        <Login customNavigation={customNavigation} />
      )

    return (
      <>
        {currentPage !== "forgot-password" ? basePage : <Login customNavigation={customNavigation} />}
        {currentPage === "forgot-password" && <ForgotPassword customNavigation={customNavigation} />}
      </>
    )
  }

  return (
    <div className="app">
      <div className="content">{renderPage()}</div>
    </div>
  )
}

export default App



















