import React, { useEffect } from 'react'
import { Header, Banner, CaseStudies, IntroOverlay, Nav } from '../components'
import gsap from 'gsap'

export default function Home() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    // Set visible on DOM load
    gsap.to('body', { duration: 0, css: { visibility: 'visible' } })

    const tl = gsap.timeline()

    tl.fromTo(
      '.banner-text',
      { opacity: 0, y: 100, skewY: 6 },
      {
        opacity: 1,
        duration: 1.8,
        y: 0,
        ease: 'power4.out',
        delay: 0.4,
        skewY: 0,
        stagger: {
          amount: 0.3,
        },
      }
    )
      .to('.overlay-top', {
        duration: 2,
        width: 0,
        ease: 'power3.inOut',
        stagger: 0.4,
      })
      .to('.overlay-top-second', {
        duration: 2,
        width: 0,
        ease: 'power3.inOut',
        delay: -2.5,
        stagger: 0.4,
      })
      .to('.intro-overlay', {
        duration: 0,
        css: { display: 'none' },
      })
      .to('.case-image-wrapper .case-image', {
        duration: 1.6,
        scale: 1.1,
        ease: 'expo.inOut',
        delay: -2,
        stagger: {
          amount: 0.4,
        },
      })
  }, [])

  return (
    <>
      <Nav />
      <Header />
      <div className='app'>
        <IntroOverlay />
        <Banner />
        <CaseStudies />
      </div>
    </>
  )
}
