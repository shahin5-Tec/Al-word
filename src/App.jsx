import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import Button from './components/Button/button'
import Card from './components/Card/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Card></Card>
    

        
    </>
  )
}

export default App
