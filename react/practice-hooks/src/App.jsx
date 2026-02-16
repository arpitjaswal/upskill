import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'

function App() {
  const [title, setTitle] = useState("testing")

  return (
   <>
   <Header title={title}/>
   <Header title={title}/>
   </>
  )
}

export default App
