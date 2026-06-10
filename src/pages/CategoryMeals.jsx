import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getMealsByCategory } from '../api/mealApi.js'
import MealCard from '../components/MealCard.jsx'
import Loader from '../components/Loader.jsx'
import Message from '../components/Message.jsx'

// Écran de filtre : repas appartenant à une catégorie donnée (API 2).
export default function CategoryMeals() {
  const { name } = useParams()
  const [meals, setMeals] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let active = true
    setStatus('loading')

    getMealsByCategory(name)
      .then((data) => {
        if (!active) return
        setMeals(data)
        setStatus('success')
      })
      .catch(() => active && setStatus('error'))

    return () => {
      active = false
    }
  }, [name])

  return (
    <section>
      <Link to="/" className="back-link">
        ← Retour aux catégories
      </Link>
      <h2 className="section-title">
        Catégorie : <span className="accent">{name}</span>
      </h2>

      {status === 'loading' && <Loader label={`Chargement des repas « ${name} »…`} />}
      {status === 'error' && (
        <Message type="error">Une erreur est survenue lors du chargement.</Message>
      )}
      {status === 'success' && meals.length === 0 && (
        <Message type="info">Aucun repas trouvé pour cette catégorie.</Message>
      )}
      {status === 'success' && meals.length > 0 && (
        <>
          <p className="result-count">{meals.length} repas trouvés</p>
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
