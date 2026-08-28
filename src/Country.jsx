import Medal from './Medal'

export default function Country({ country, onIncrement, onDecrement, onDelete }) {
  const { id, name, gold, silver, bronze } = country
  const countryTotal = gold + silver + bronze

  return (
    <section className="country-card">
      <h2>{name}</h2>
      <p className="country-total">{countryTotal} total medals</p>
      <div className="medals">
        <Medal type="gold" count={gold} countryId={id} onIncrement={onIncrement} onDecrement={onDecrement} />
        <Medal type="silver" count={silver} countryId={id} onIncrement={onIncrement} onDecrement={onDecrement} />
        <Medal type="bronze" count={bronze} countryId={id} onIncrement={onIncrement} onDecrement={onDecrement} />
      </div>
      <button className="delete-button" type="button" onClick={() => onDelete(id)}>
        Delete Country
      </button>
    </section>
  )
}
