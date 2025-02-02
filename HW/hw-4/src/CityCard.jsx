import React from 'react'

const CityCard = ({ city }) => {
  if (!city) return <p>Пожалуйста выберите город</p>

  return (
    <div>
      <h2>{city.name}</h2>
      <img src={city.imageUrl} alt={city.name} style={{ width: '300px' }} />
      <p>{city.description}</p>
      <h3>Интересные факты:</h3>
      <ul>
        {city.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  )
}

export default CityCard
