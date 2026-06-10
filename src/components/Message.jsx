// Bloc de message générique (erreur, état vide, information).
export default function Message({ type = 'info', children }) {
  return <div className={`message message--${type}`}>{children}</div>
}
