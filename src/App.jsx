import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './assets/components/navigation'
import Video from './assets/components/hero'
import Sponsor from './assets/components/sponsors'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navigation/>
        <Video/>
        <Sponsor/>
    </>
  )
}

export default App;
