import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
 
 /* let myObj = {
    username: "Ajeet",
    age: 21
  }
  let newArr = [1, 2, 3]*/
  return (
    <>
     <h1 className='bg-yellow-400 text-black p-4 rounded-xl mb-4'>Tailwind </h1>
     <Card user="Khushi" btnText="click me" />
      <Card user="khushi" />
   
    </>
  )
}

export default App
