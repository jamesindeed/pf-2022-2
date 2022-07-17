import React from 'react'
import Image from 'next/image'

const caseStudies = [
  {
    id: 1,
    subtitle: 'Food',
    title: 'For the perfect shot that makes your mouth water',
    img: 'case1',
  },
  {
    id: 2,
    subtitle: 'Space',
    title: 'Show off your space with all of its features',
    img: 'case2',
  },
  {
    id: 3,
    subtitle: 'People',
    title: 'For your best look yet',
    img: 'case3',
  },
]

const CaseStudies = () => {
  return (
    <section className='cases'>
      <div className='container-fluid'>
        {/* <div className='cases-navigation'>
          <div className='cases-arrow prev disabled'>
            <svg
              className='cases-svg'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <line x1='19' y1='12' x2='5' y2='12'></line>
              <polyline points='12 19 5 12 12 5'></polyline>
            </svg>
          </div>
          <div className='cases-arrow next'>
            <svg
              className='cases-svg'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <line x1='5' y1='12' x2='19' y2='12'></line>
              <polyline points='12 5 19 12 12 19'></polyline>
            </svg>
          </div>
        </div> */}
        <div className='cases-row row'>
          {caseStudies.map((caseItem) => (
            <div className='case' key={caseItem.id}>
              <div className='case-details'>
                <span className='case-subtitle'>{caseItem.subtitle}</span>
                <h2 className='case-title'>{caseItem.title}</h2>
              </div>
              <div className='case-image-wrapper'>
                <Image
                  className='case-image'
                  src={require(`../assets/CaseStudies/${caseItem.img}.jpg`)}
                  alt={caseItem.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
