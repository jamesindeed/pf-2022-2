import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <nav>
      <div className='container'>
        <div className='nav-columns'>
          <div className='nav-column'>
            <div className='nav-label'>Menu</div>
            <ul className='nav-links'>
              <li className='nav-link-wrapper'>
                <Link href='/case-studies'>Case Studies</Link>
              </li>
              <li className='nav-link-wrapper'>
                <Link href='/approach'>Approach</Link>
              </li>
              <li className='nav-link-wrapper'>
                <Link href='/services'>Services</Link>
              </li>
              <li className='nav-link-wrapper'>
                <Link href='/about-us'>About us</Link>
              </li>
            </ul>
          </div>
          <div className='nav-column'>
            <div className='nav-label'>Contact</div>
            <div className='nav-infos'>
              <ul className='nav-info'>
                <li className='nav-info-label'>Email</li>
                <li className='nav-info-link-wrapper'>
                  <Link href='/contact'>Get in touch</Link>
                </li>
                <li className='nav-info-link-wrapper'>
                  <Link href='/audit'>Free brand review</Link>
                </li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Locations</li>
                <li className='nav-info-link-wrapper'>London</li>
                <li className='nav-info-link-wrapper'>Auckland</li>
                <li className='nav-info-link-wrapper'>Brisbane</li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Phone</li>
                <li className='nav-info-link-wrapper'>+4421681992</li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Legal</li>
                <li className='nav-info-link-wrapper'>Privacy & Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
