import React, { useState } from 'react'
import CityCard from './CityCard'
import CitySelector from './CitySelector'

const citiesData = [
  {
    name: 'Токио',
    description:
      'Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.',
    imageUrl:
      'https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg',
    facts: [
      'Токио - самый населенный мегаполис в мире.',
      'Здесь расположена самая высокая башня в Японии - Токийская башня.',
      'В Токио проходят множество культурных событий и фестивалей.',
    ],
  },
  {
    name: 'Киото',
    description:
      'Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами.',
    imageUrl:
      'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663423488_24-mykaleidoscope-ru-p-kioto-stolitsa-yaponii-instagram-25.jpg',
    facts: [
      'В Киото насчитывается более 1600 буддийских храмов.',
      'Этот город был столицей Японии более тысячи лет.',
    ],
  },
  // Добавьте остальные города
]

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null)

  const handleCitySelect = cityName => {
    const city = citiesData.find(c => c.name === cityName)
    setSelectedCity(city)
  }

  return (
    <div>
      <CitySelector cities={citiesData} onCitySelect={handleCitySelect} />
      <CityCard city={selectedCity} />
    </div>
  )
}

export default App
