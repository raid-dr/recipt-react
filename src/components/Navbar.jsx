import { NavLink, Link } from 'react-router-dom'

// Barre de navigation présente sur tous les écrans.
export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          <span className="navbar__logo">🍽️</span>
          <span>MealFinder</span>
        </Link>

        <nav className="navbar__links">
          <NavLink to="/" end>
            Catégories
          </NavLink>
          <NavLink to="/search">Recherche</NavLink>
        </nav>
      </div>
    </header>
  )
}
