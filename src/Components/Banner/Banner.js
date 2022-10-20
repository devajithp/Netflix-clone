import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='contents'>
            <div className='tilte'>
                <h1>Money Heist</h1>
            </div>
            <div className='description'>
                <h5>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</h5>
            </div>
            <div className='content-buttons'>
                <button className='play-button'>Play</button>
                <button className='info-button'>More info</button>

            </div>
        </div>
        <div className='fade-bottom'>

        </div>
      
    </div>
  )
}

export default Banner
