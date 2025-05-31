import { useEffect, useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import CardSection from './components/CardSection'

function App() {


  return (
    <main className='h-screen w-100   '>
      <Header />
      <Banner />
      <CardSection />
    </main>
  )
}

export default App
