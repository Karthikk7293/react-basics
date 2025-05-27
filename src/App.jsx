import { useEffect, useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import CardSection from './components/CardSection'

function App() {

  const [show, setShow] = useState(false)

  useEffect(() => {



  }, [show]) //  dependency array


  return (
    <main className='h-screen w-100   '>
      <Header />
      {!show && <Banner />}
      <CardSection />
    </main>
  )
}

export default App
