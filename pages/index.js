import React, { useEffect } from 'react'
import { Header, Banner, CaseStudies } from '../components'

export default function Home() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }, [])

  return (
    <div className='app'>
      <Header />
      <Banner />
      <CaseStudies />
    </div>
  )
}
