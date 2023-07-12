import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const numbers =5555;
const singer = {name: 'dr. Mahafuz', job:'singer'}
const singer2 = {name:'Eva Rahman', job:'Singer'}

const singerStyle ={
  color: 'purple',
  backgroundColor: 'white'
}
function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h5>New Component</h5>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  )
}

function Person(){
  return (
    <div className='person'>
      <h1>Shakib Al Hasan</h1>
      <p>profession: Cricketer</p>
    </div>
  )
}

function Friend(){
  return(
    <div className='container'>
      <h3>name: Ajay Devgan</h3>
      <p>job: maramari</p>
    </div>
  )
}

export default App
