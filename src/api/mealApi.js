// Couche d'accès à l'API REST TheMealDB.
// Documentation : https://www.themealdb.com/api.php
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

// Petit utilitaire qui centralise l'appel fetch + la gestion d'erreur.
async function request(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`)
  if (!response.ok) {
    throw new Error(`Erreur réseau (${response.status})`)
  }
  return response.json()
}

// 1) List all meal categories
// GET /categories.php
export async function getCategories() {
  const data = await request('/categories.php')
  return data.categories ?? []
}

// 2) Filter by Category
// GET /filter.php?c={category}
export async function getMealsByCategory(category) {
  const data = await request(`/filter.php?c=${encodeURIComponent(category)}`)
  return data.meals ?? []
}

// 3) Search meal by name
// GET /search.php?s={query}
export async function searchMealsByName(query) {
  const data = await request(`/search.php?s=${encodeURIComponent(query)}`)
  return data.meals ?? []
}

// Détail d'un repas par identifiant (utilisé par l'écran de détail).
// GET /lookup.php?i={id}
export async function getMealById(id) {
  const data = await request(`/lookup.php?i=${encodeURIComponent(id)}`)
  return data.meals?.[0] ?? null
}
