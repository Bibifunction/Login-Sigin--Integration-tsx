import { useState } from "react"
import { Input } from "./Input"
import { Button } from "./Button"
import { validateEmail } from "../utils/validation"
import "../styles/ForgotPasswordForm.css"

interface ForgotPasswordModalProps {
  onClose: () => void
}

export const ForgotPasswordModal = ({ onClose }: ForgotPasswordModalProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    
    const emailError = validateEmail(email)
    if (emailError) {
      setError(emailError)
      return
    }

   
    setError("")

    
    setIsLoading(true)

   
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setEmailSent(true)
  }

  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-content">
          <button onClick={onClose} className="close-button">
            ✕
          </button>

          {!emailSent ? (
            <>
              <h2 className="title">Recover your password</h2>

              <div className="alert">
                <p className="alert-text">Enter your email address and we'll send you a link to reset your password.</p>
              </div>

              <form onSubmit={handleSubmit}>
                <Input
                  id="recovery-email"
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={error}
                />

                <div className="actions">
                  <Button type="submit" isLoading={isLoading} className="submit-button">
                    Send
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <div className="confirmation">
              <h2 className="title">Email sent</h2>

              <p className="confirmation-text">
                We've sent you an email to reset your password. See you back at Paw Play soon!
              </p>

              <Button onClick={onClose} className="submit-button">
                Back to login
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordModal