import { useState } from 'react'
import Country from './Country'

export default function App() {
  const [countries, setCountries] = useState([
    { id: 1, name: 'United States', gold: 2 },
    { id: 2, name: 'China', gold: 3 },
    { id: 3, name: 'France', gold: 0 },
  ])

  const handleAddGold = (id) => {
    setCountries((currentCountries) =>
      currentCountries.map((country) =>
        country.id === id ? { ...country, gold: country.gold + 1 } : country
      )
    )
  }

  const handleDeleteCountry = (id) => {
    setCountries((currentCountries) =>
      currentCountries.filter((country) => country.id !== id)
    )
  }

  return (
    <main className="app">
      <h1>Olympic Medals</h1>
      {countries.map((country) => (
        <Country
          key={country.id}
          id={country.id}
          name={country.name}
          gold={country.gold}
          onAddGold={handleAddGold}
          onDeleteCountry={handleDeleteCountry}
        />
      ))}
    </main>
  )
}
