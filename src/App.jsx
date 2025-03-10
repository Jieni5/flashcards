import React from 'react'
import './App.css'
import Card from './assets/components/card.jsx'

const App = () => {
  return (
    <div>
      <h1>
        Guess the Movie from the tagline
      </h1>
      <h2>
        Are you a movie fan?
      </h2>
      <h3>
        Test how much you know!
      </h3>
      <h4>
        number of cards:4
      </h4>
      <Card />
    </div>
  )
}

export default App