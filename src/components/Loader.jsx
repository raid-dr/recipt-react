// Indicateur de chargement réutilisable.
export default function Loader({ label = 'Chargement…' }) {
  return (
    <div className="loader">
      <div className="loader__spinner" />
      <p>{label}</p>
    </div>
  )
}
