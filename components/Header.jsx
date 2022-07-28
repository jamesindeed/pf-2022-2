import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ImageLogo from '../assets/pp-logo.png'
import { openMenu, closeMenu } from '../animations/navAnim.jsx'

const Header = () => {
  const [menuState, setMenuState] = useState({ menuOpened: false })
  useEffect(() => {
    if (menuState.menuOpened === true) {
      openMenu(window.innerWidth)
    } else if (menuState.menuOpened === false) {
      closeMenu()
    }
  })

  return (
    <div className='header'>
      <div className='container'>
        <div className='row v-center space-between'>
          <div className='logo'>
            <Link href='/'>POLKA.</Link>
            {/* <Link href='/'>
              <Image src={ImageLogo} alt='Logo' width={192} height={40} />
            </Link> */}
          </div>
          <div className='nav-toggle'>
            <div
              onClick={() => setMenuState({ menuOpened: true })}
              className='hamburger-menu'
            >
              <span className='hamburger-menu-line'></span>
              <span className='hamburger-menu-line'></span>
            </div>
            <div
              className='hamburger-menu-close'
              onClick={() => setMenuState({ menuOpened: false })}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='64'
                height='64'
                viewBox='0 0 64 64'
                className='header-svg'
              >
                <g
                  id='Group_1'
                  data-name='Group 1'
                  transform='translate(-152 -439)'
                >
                  <line
                    id='Line_1'
                    data-name='Line 1'
                    y1='14.91'
                    transform='translate(184 463.788)'
                    fill='none'
                    stroke='#000'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2.5'
                  />
                  <path
                    id='Path_1'
                    data-name='Path 1'
                    d='M6,9.155,10.949,5'
                    transform='translate(173.051 458.302)'
                    fill='none'
                    stroke='#000'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2.5'
                  />
                  <path
                    id='Path_2'
                    data-name='Path 2'
                    d='M10.949,5,15.9,9.155'
                    transform='translate(173.051 458.302)'
                    fill='none'
                    stroke='#000'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2.5'
                  />
                  <g
                    id='Ellipse_1'
                    data-name='Ellipse 1'
                    transform='translate(152 439)'
                    fill='none'
                    stroke='rgba(0,0,0,0.2)'
                    stroke-width='2.5'
                  >
                    <circle cx='32' cy='32' r='32' stroke='none' />
                    <circle id='circle' cx='32' cy='32' r='30.75' fill='none' />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
