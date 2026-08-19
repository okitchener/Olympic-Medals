import { useState } from 'react'

export default function Country() {
  const [name] = useState('United States')
  const [gold, setGold] = useState(0)

  const handleClick = () => {
    setGold((currentGold) => currentGold + 1)
  }

  return (
    <section className="country-card">
      <h2>{name}</h2>
      <p>Gold medals: {gold}</p>
      <button type="button" onClick={handleClick}>
        Add Gold Medal
      </button>
    </section>
  )
}
