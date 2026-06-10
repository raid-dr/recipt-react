import { useState } from 'react'
import { searchMealsByName } from '../api/mealApi.js'
import MealCard from '../components/MealCard.jsx'
import Loader from '../components/Loader.jsx'
import Message from '../components/Message.jsx'

// Écran de recherche : recherche d'un repas par son nom (API 3).
export default function Search() {
  const [query, setQuery] = useState('')
  const [meals, setMeals] = useState([])
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  async function handleSubmit(event) {
    event.preventDefault()
    const trimmed = query.trim()
    if (!trimmed) return

    setStatus('loading')
    try {
      const data = await searchMealsByName(trimmed)
      setMeals(data)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section>
      <h2 className="section-title">Rechercher un repas</h2>

      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-bar__input"
          placeholder="Ex. : Arrabiata, Chicken, Pasta…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit" className="btn">
          Rechercher
        </button>
      </form>

      {status === 'loading' && <Loader label="Recherche en cours…" />}
      {status === 'error' && (
        <Message type="error">Une erreur est survenue. Réessayez.</Message>
      )}
      {status === 'success' && meals.length === 0 && (
        <Message type="info">
          Aucun résultat pour « {query} ». Essayez un autre mot-clé.
        </Message>
      )}
      {status === 'success' && meals.length > 0 && (
        <>
          <p className="result-count">{meals.length} résultat(s)</p>
          <div className="grid">
            {meals.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
