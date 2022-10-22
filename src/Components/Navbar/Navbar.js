import React from 'react'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className='Navbar'>
        <div>
      <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='netflix logo'></img>
      <div className='d-flex'>
      <h6 className='home'>Home</h6>
      <h6 className='otherTab'>TvShows</h6>
      <h6 className='otherTab'>New & Popular</h6>
      <h6 className='myList'>My List</h6>
      <h6 className='otherTab'>Browse by Languages</h6>
      <FontAwesomeIcon className='bellIcon' style={{color:'white'}} icon={faBell} />
      </div>
      <img className='avatar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt='avatar'></img>
      </div>
    </div>
  )
}

export default Navbar
