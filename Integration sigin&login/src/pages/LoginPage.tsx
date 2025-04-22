import { useState } from "react"
import LoginForm from "../components/LoginForm"
import ForgotPasswordModal from "../components/ForgotPasswordModal"
import Header from "../components/Header"
import "../styles/auth-page.css"

const LoginPage = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false)

  return (
    <>
      <Header />
      <main className="main">
        <div className="card">
          <div className="image-container">
            <img
              src="/src/assets/public/Imagen.png"
              alt="Dog with glasses using a laptop"
              className="image"
            />
          </div>
          <div className="form-container">
            <LoginForm onForgotPasswordClick={() => setShowForgotPassword(true)} />
          </div>
        </div>
      </main>

      {showForgotPassword && <ForgotPasswordModal onClose={() => setShowForgotPassword(false)} />}
    </>
  )
}

export default LoginPage