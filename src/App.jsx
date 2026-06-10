import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import CategoryMeals from './pages/CategoryMeals.jsx'
import Search from './pages/Search.jsx'
import MealDetail from './pages/MealDetail.jsx'
import NotFound from './pages/NotFound.jsx'

// Point d'entrée de l'application : navbar + définition des routes.
export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:name" element={<CategoryMeals />} />
          <Route path="/search" element={<Search />} />
          <Route path="/meal/:id" element={<MealDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>
          Données fournies par{' '}
          <a href="https://www.themealdb.com" target="_blank" rel="noreferrer">
            TheMealDB
          </a>{' '}
          · Projet React
        </p>
      </footer>
    </>
  )
}
