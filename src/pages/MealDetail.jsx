import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getMealById } from '../api/mealApi.js'
import Loader from '../components/Loader.jsx'
import Message from '../components/Message.jsx'

// Transforme les champs strIngredient1..20 / strMeasure1..20 en une liste propre.
function extractIngredients(meal) {
  const ingredients = []
  for (let i = 1; i <= 20; i += 1) {
    const name = meal[`strIngredient${i}`]
    const measure = meal[`strMeasure${i}`]
    if (name && name.trim()) {
      ingredients.push({ name: name.trim(), measure: (measure ?? '').trim() })
    }
  }
  return ingredients
}

// Écran de détail d'un repas (image, catégorie, origine, ingrédients, instructions).
export default function MealDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [meal, setMeal] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let active = true
    setStatus('loading')

    getMealById(id)
      .then((data) => {
        if (!active) return
        setMeal(data)
        setStatus(data ? 'success' : 'empty')
      })
      .catch(() => active && setStatus('error'))

    return () => {
      active = false
    }
  }, [id])

  if (status === 'loading') return <Loader label="Chargement de la recette…" />
  if (status === 'error')
    return <Message type="error">Impossible de charger cette recette.</Message>
  if (status === 'empty')
    return <Message type="info">Recette introuvable.</Message>

  const ingredients = extractIngredients(meal)

  return (
    <section>
      <button className="back-link" onClick={() => navigate(-1)}>
        ← Retour
      </button>

      <article className="meal-detail">
        <div className="meal-detail__media">
          <img src={meal.strMealThumb} alt={meal.strMeal} />
        </div>

        <div className="meal-detail__info">
          <h1 className="meal-detail__title">{meal.strMeal}</h1>
          <div className="badges">
            {meal.strCategory && <span className="badge">{meal.strCategory}</span>}
            {meal.strArea && <span className="badge badge--alt">{meal.strArea}</span>}
          </div>

          <h3 className="subheading">Ingrédients</h3>
          <ul className="ingredients">
            {ingredients.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                <span className="ingredients__measure">{item.measure}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <div className="meal-detail__instructions">
        <h3 className="subheading">Préparation</h3>
        {meal.strInstructions
          .split('\n')
          .filter((line) => line.trim())
          .map((line, index) => (
            <p key={index}>{line}</p>
          ))}
      </div>

      {meal.strYoutube && (
        <a
          className="btn btn--yt"
          href={meal.strYoutube}
          target="_blank"
          rel="noreferrer"
        >
          ▶ Voir la vidéo sur YouTube
        </a>
      )}
    </section>
  )
}
