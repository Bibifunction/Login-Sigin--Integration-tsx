import Header from "../components/Header"
import SigninForm from "../components/SigninForm"
import "../styles/auth-page.css"

const SigninPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="card">
          <div className="image-container">
            <img
              src="/src/assets/public/imagen1.png"
              alt="Dog with glasses using a laptop"
              className="image"
            />
          </div>
          <div className="form-container">
            <SigninForm />
          </div>
        </div>
      </main>
    </>
  )
}

export default SigninPage