import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navigation from './assets/components/navigation'
import Video from './assets/components/hero'
import Sponsor from './assets/components/sponsors'
// import Eventstimeline from './assets/components/events'
import Timeline from './assets/components/events'
import Merch from './assets/components/ourmerch'
// import 'react-vertical-timeline-component/style.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navigation/>
        <Video/>
        <Timeline/>
        <Sponsor/>
        <Merch/>
        
    </>
  )
}

export default App;
