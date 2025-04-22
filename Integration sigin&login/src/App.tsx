import { useState } from "react"
import LoginPage from "./pages/LoginPage"
import SigninPage from "./pages/SigninPage"
import "./App.css"

declare global {
  interface Window {
    navigateTo: (page: string) => void
  }
}

function App() {
  
  const [currentPage, setCurrentPage] = useState<string>("login")

  
  window.navigateTo = (page: string) => {
    setCurrentPage(page)
  }

  return (
    <div className={`app-container ${currentPage === "login" ? "login-bg" : "signin-bg"}`}>
      {currentPage === "login" && <LoginPage />}
      {currentPage === "signin" && <SigninPage />}
    </div>
  )
}

export default App





