import { useState } from "react"
import { Input } from "./Input"
import { Button } from "./Button"
import { validateEmail, validatePassword, validateName } from "../utils/validation"
import "../styles/SigninForm.css"

export const SigninForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    dogName: "",
    email: "",
    password: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    dogName: "",
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    const nameError = validateName(formData.name)
    const dogNameError = validateName(formData.dogName)
    const emailError = validateEmail(formData.email)
    const passwordError = validatePassword(formData.password)

    if (nameError || dogNameError || emailError || passwordError) {
      setErrors({
        name: nameError || "",
        dogName: dogNameError || "",
        email: emailError || "",
        password: passwordError || "",
      })
      return
    }

    // Clear errors
    setErrors({ name: "", dogName: "", email: "", password: "" })

    // Show loading state
    setIsLoading(true)

    // Simulate API call
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
            id="name"
            label="Your name"
            type="text"
            placeholder="Put your name"
            required
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />

          <Input
            id="dogName"
            label="Your dog's name"
            type="text"
            placeholder="Put the name of your dog"
            required
            value={formData.dogName}
            onChange={handleChange}
            error={errors.dogName}
          />

          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="Put your email"
            required
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="Put a strong password"
            required
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />

          <div className="actions">
            <Button type="submit" isLoading={isLoading}>
              Sign in
            </Button>

            <div className="alternative">
              <span>or</span>
              <a 
                href="#" 
                className="alternative-link"
                onClick={(e) => { 
                  e.preventDefault(); 
                  window.navigateTo("login"); 
                }}
              >
                Log In
              </a>
            </div>
          </div>
        </form>
      </div>

      <div className="footer">
        <p className="policy">
          By becoming a paw player you agree to our{" "}
          <a href="#" className="policy-link">
            Terms of Service
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

export default SigninForm