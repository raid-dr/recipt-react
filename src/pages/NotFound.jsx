import { Link } from 'react-router-dom'

// Écran affiché pour une route inconnue.
export default function NotFound() {
  return (
    <section className="notfound">
      <h1>404</h1>
      <p>Cette page n'existe pas.</p>
      <Link to="/" className="btn">
        Retour à l'accueil
      </Link>
    </section>
  )
}
