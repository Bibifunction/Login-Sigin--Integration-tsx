import { forwardRef, type ButtonHTMLAttributes } from 'react';
import '../styles/Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, isLoading = false, ...props }, ref) => {
    return (
      <button
        className={`button ${className || ''}`}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? <div className="spinner"></div> : children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
