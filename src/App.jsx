import { useState } from 'react'
import HomePage from './pages/Home'
import HeaderComponent from './components/Header'
import Footer,{ FooterButton }  from './components/Footer'

function App() {

  return (
    <main className='h-screen w-100   '>
      <FooterButton>
        sign in
      </FooterButton>
      <HeaderComponent />
      <HomePage />
      <Footer />
    </main>
  )
}

export default App
