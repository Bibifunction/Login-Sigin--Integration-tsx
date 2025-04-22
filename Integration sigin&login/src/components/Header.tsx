import "../styles/Header.css"

export const Header = () => {
  return (
    <header className="header">
      <a href="#" onClick={(e) => { e.preventDefault(); window.navigateTo("login"); }}>
        <img src="/src/assets/public/logo.svg" alt="PawPlay Logo" className="logo" />
      </a>
    </header>
  )
}

export default Header
