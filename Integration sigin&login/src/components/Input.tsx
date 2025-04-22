import { forwardRef, type InputHTMLAttributes } from "react"
import "../styles/Input.css"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, label, id, error, ...props }, ref) => {
  return (
    <div className="form-group">
      {label && (
        <label htmlFor={id} className="label">
          {label}
        </label>
      )}
      <input id={id} className={`input ${error ? "input-error" : ""} ${className || ""}`} ref={ref} {...props} />
      {error && <p className="error-message">{error}</p>}
    </div>
  )
})

Input.displayName = "Input"

export default Input