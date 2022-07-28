import React from 'react'

const Banner = () => {
  return (
    <section className='banner'>
      <div className='container'>
        <div className='banner-row row'>
          <h2 className='banner-heading'>
            <div className='banner-line'>
              <span className='banner-text'>User content</span>
            </div>
            <div className='banner-line'>
              <span className='banner-text'>that performs.</span>
            </div>
          </h2>
          {/* <div className='banner-btn-row'>
            <a className='banner-btn-link' href='/'>
              Contact Me
              <span className='banner-btn'>
                <span className='banner-btn-inner'></span>
              </span>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Banner
