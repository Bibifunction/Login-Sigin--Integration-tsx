import type React from "react"
import { useState } from "react"
import { Input } from "./Input"
import { Button } from "./Button"
import { validateEmail, validatePassword } from "../utils/validation"
import "../styles/LoginForm.css"

interface LoginFormProps {
  onForgotPasswordClick: () => void
}

export const LoginForm = ({ onForgotPasswordClick }: LoginFormProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

   
    const emailError = validateEmail(email)
    const passwordError = validatePassword(password)

    if (emailError || passwordError) {
      setErrors({
        email: emailError || "",
        password: passwordError || "",
      })
      return
    }

    
    setErrors({ email: "", password: "" })

    
    setIsLoading(true)

   
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
  }

  return (
    <div className="container">
      <h1 className="title">PawPlay</h1>
      <h2 className="subtitle">Become a PawPlayer</h2>

      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="Put your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />

          <div className="password-group">
            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="Put a strong password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
            />
            <button type="button" onClick={onForgotPasswordClick} className="forgot-link">
              Forgot password?
            </button>
          </div>

          <div className="actions">
            <Button type="submit" isLoading={isLoading}>
              Login
            </Button>

            <div className="alternative">
              <span>or</span>
              <a
                href="#"
                className="alternative-link"
                onClick={(e) => {
                  e.preventDefault()
                  window.navigateTo("signin")
                }}
              >
                Sign in
              </a>
            </div>
          </div>
        </form>
      </div>

      <div className="footer">
        <p className="policy">
          by becoming a paw player you agree to our{" "}
          <a href="#" className="policy-link">
            Terms of Services
          </a>{" "}
          and{" "}
          <a href="#" className="policy-link">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
