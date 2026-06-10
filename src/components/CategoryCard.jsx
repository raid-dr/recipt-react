import { Link } from 'react-router-dom'

// Carte affichant une catégorie de repas (écran d'accueil).
export default function CategoryCard({ category }) {
  return (
    <Link to={`/category/${category.strCategory}`} className="card category-card">
      <div className="card__media">
        <img src={category.strCategoryThumb} alt={category.strCategory} loading="lazy" />
      </div>
      <div className="card__body">
        <h3 className="card__title">{category.strCategory}</h3>
        <p className="card__text">
          {category.strCategoryDescription.slice(0, 90)}…
        </p>
      </div>
    </Link>
  )
}
