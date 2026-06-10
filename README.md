# 🍽️ MealFinder

Mini application **React** qui consomme l'API REST publique
[TheMealDB](https://www.themealdb.com/api.php). Elle permet de parcourir les
catégories de repas, de filtrer les recettes par catégorie et de rechercher un
repas par son nom.

Projet réalisé dans le cadre d'un projet d'études (React, navigation,
consommation d'API REST, gestion d'état et interface moderne).

## ✨ Fonctionnalités

- **Plusieurs écrans avec navigation** (React Router) :
  - Accueil — liste de toutes les catégories
  - Catégorie — repas filtrés par catégorie
  - Recherche — recherche d'un repas par son nom
  - Détail — fiche complète d'une recette (ingrédients, préparation, vidéo)
- **Consommation d'API REST** avec `fetch`
- **Gestion d'état** avec les hooks `useState` / `useEffect`
- **Interface propre et moderne** : design responsive, thème sombre, animations

## 🔌 APIs consommées (TheMealDB)

| Fonctionnalité            | Endpoint                                  |
| ------------------------- | ----------------------------------------- |
| 1. Lister les catégories  | `/categories.php`                         |
| 2. Filtrer par catégorie  | `/filter.php?c={categorie}`               |
| 3. Rechercher par nom     | `/search.php?s={nom}`                      |
| (Détail d'une recette)    | `/lookup.php?i={id}`                       |

Base : `https://www.themealdb.com/api/json/v1/1`

## 🚀 Démarrage

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build
```

L'application est ensuite disponible sur l'adresse indiquée dans le terminal
(par défaut `http://localhost:5173`).

## 🗂️ Structure du projet

```
src/
├── api/
│   └── mealApi.js          # Appels à l'API TheMealDB
├── components/
│   ├── Navbar.jsx          # Barre de navigation
│   ├── CategoryCard.jsx    # Carte de catégorie
│   ├── MealCard.jsx        # Carte de repas
│   ├── Loader.jsx          # Indicateur de chargement
│   └── Message.jsx         # Messages (erreur / vide)
├── pages/
│   ├── Home.jsx            # Écran d'accueil (catégories)
│   ├── CategoryMeals.jsx   # Filtrer par catégorie
│   ├── Search.jsx          # Recherche par nom
│   ├── MealDetail.jsx      # Détail d'une recette
│   └── NotFound.jsx        # Page 404
├── App.jsx                 # Routes de l'application
├── main.jsx                # Point d'entrée
└── index.css               # Styles globaux
```

## 🛠️ Technologies

- React 18
- React Router DOM 6
- Vite
- CSS pur (sans framework UI)
