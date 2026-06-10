import { Link } from 'react-router-dom'

// Carte affichant un repas (résultats de filtre ou de recherche).
export default function MealCard({ meal }) {
  return (
    <Link to={`/meal/${meal.idMeal}`} className="card meal-card">
      <div className="card__media">
        <img src={meal.strMealThumb} alt={meal.strMeal} loading="lazy" />
      </div>
      <div className="card__body">
        <h3 className="card__title">{meal.strMeal}</h3>
      </div>
    </Link>
  )
}
