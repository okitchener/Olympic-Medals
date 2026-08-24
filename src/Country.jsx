export default function Country({ id, name, gold, onAddGold, onDeleteCountry }) {
  const handleAddGold = () => {
    onAddGold(id)
  }

  const handleDelete = () => {
    onDeleteCountry(id)
  }

  return (
    <section className="country-card">
      <h2>{name}</h2>
      <p>Gold medals: {gold}</p>
      <button type="button" onClick={handleAddGold}>
        Add Gold Medal
      </button>
      <button type="button" onClick={handleDelete}>
        Delete Country
      </button>
    </section>
  )
}
