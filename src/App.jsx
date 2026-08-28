import { useState } from 'react'
import Country from './Country'

export default function App() {
  const [countries, setCountries] = useState([
  { id: 1, name: "United States", gold: 2, silver: 2, bronze: 3 },
  { id: 2, name: "China", gold: 3, silver: 1, bronze: 0 },
  { id: 3, name: "France", gold: 0, silver: 2, bronze: 2 },
]);

  const handleIncrement = (id, medalType) => {
    setCountries((currentCountries) =>
      currentCountries.map((country) =>
        country.id === id ? { ...country, [medalType]: country[medalType] + 1 } : country
      )
    )
  }

  const handleDecrement = (id, medalType) => {
    setCountries((currentCountries) =>
      currentCountries.map((country) =>
        country.id === id && country[medalType] > 0
          ? { ...country, [medalType]: country[medalType] - 1 }
          : country
      )
    )
  }

  const handleDeleteCountry = (id) => {
    setCountries((currentCountries) =>
      currentCountries.filter((country) => country.id !== id)
    )
  }

  const totalMedals = countries.reduce(
    (totals, country) => ({
      gold: totals.gold + country.gold,
      silver: totals.silver + country.silver,
      bronze: totals.bronze + country.bronze,
    }),
    { gold: 0, silver: 0, bronze: 0 },
  )

  return (
    <main className="app">
      <h1>Olympic Medals</h1>
      <div className="total-board" aria-label="Total medals awarded">
        <div><strong>{totalMedals.gold}</strong><span>Gold</span></div>
        <div><strong>{totalMedals.silver}</strong><span>Silver</span></div>
        <div><strong>{totalMedals.bronze}</strong><span>Bronze</span></div>
      </div>
      {countries.map((country) => (
        <Country
          key={country.id}
          country={country}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDeleteCountry}
        />
      ))}
    </main>
  )
}
