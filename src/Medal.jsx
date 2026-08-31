export default function Medal({ medal, count, countryId, onIncrement, onDecrement }) {
  const label = medal.name.charAt(0).toUpperCase() + medal.name.slice(1)

  return (
    <div className={`medal medal-${medal.name}`}>
      <span className="medal-label">{label}</span>
      <strong>{count}</strong>
      <div className="medal-controls">
        <button
          type="button"
          aria-label={`Decrease ${label} medals`}
          onClick={() => onDecrement(countryId, medal.name)}
          disabled={count === 0}
        >
          -
        </button>
        <button
          type="button"
          aria-label={`Increase ${label} medals`}
          onClick={() => onIncrement(countryId, medal.name)}
        >
          +
        </button>
      </div>
    </div>
  )
}
