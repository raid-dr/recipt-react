import { useEffect, useState } from 'react'
import { getCategories } from '../api/mealApi.js'
import CategoryCard from '../components/CategoryCard.jsx'
import Loader from '../components/Loader.jsx'
import Message from '../components/Message.jsx'

// Écran d'accueil : liste de toutes les catégories de repas (API 1).
export default function Home() {
  const [categories, setCategories] = useState([])
  const [status, setStatus] = useState('loading') // loading | success | error

  useEffect(() => {
    let active = true

    getCategories()
      .then((data) => {
        if (!active) return
        setCategories(data)
        setStatus('success')
      })
      .catch(() => active && setStatus('error'))

    return () => {
      active = false
    }
  }, [])

  return (
    <section>
      <div className="hero">
        <h1 className="hero__title">Explorez des recettes du monde entier</h1>
        <p className="hero__subtitle">
          Parcourez les catégories, filtrez par type de plat ou recherchez votre
          repas favori par son nom.
        </p>
      </div>

      <h2 className="section-title">Catégories</h2>

      {status === 'loading' && <Loader label="Chargement des catégories…" />}
      {status === 'error' && (
        <Message type="error">
          Impossible de charger les catégories. Vérifiez votre connexion et
          réessayez.
        </Message>
      )}
      {status === 'success' && (
        <div className="grid">
          {categories.map((category) => (
            <CategoryCard key={category.idCategory} category={category} />
          ))}
        </div>
      )}
    </section>
  )
}
