import Medal from './Medal'

export default function Country({ country, medals, onIncrement, onDecrement, onDelete }) {
  const { id, name, gold, silver, bronze } = country
  const countryTotal = gold + silver + bronze

  return (
    <section className="country-card">
      <h2>{name}</h2>
      <p className="country-total">{countryTotal} total medals</p>
      <div className="medals">
        {medals.map((medal) => (
          <Medal
            key={medal.id}
            medal={medal}
            count={country[medal.name]}
            countryId={id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
      <button className="delete-button" type="button" onClick={() => onDelete(id)}>
        Delete Country
      </button>
    </section>
  )
}
