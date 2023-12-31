import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Protected from './components/Protected'
import Public from './components/Public'
import useAuth from './hooks/useAuth'


function App() {
  const isLogin = useAuth();

  return (
    <>
      {isLogin? <Protected/>: <Public/>}
    </>
  )
}

export default App
