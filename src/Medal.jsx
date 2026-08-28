const medalNames = {
  gold: 'Gold',
  silver: 'Silver',
  bronze: 'Bronze',
}

export default function Medal({ type, count, countryId, onIncrement, onDecrement }) {
  const label = medalNames[type]

  return (
    <div className={`medal medal-${type}`}>
      <span className="medal-label">{label}</span>
      <strong>{count}</strong>
      <div className="medal-controls">
        <button type="button" aria-label={`Decrease ${label} medals`} onClick={() => onDecrement(countryId, type)} disabled={count === 0}>-</button>
        <button type="button" aria-label={`Increase ${label} medals`} onClick={() => onIncrement(countryId, type)}>+</button>
      </div>
    </div>
  )
}
