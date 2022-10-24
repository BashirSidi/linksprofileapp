import React from 'react'
import './Footer.css';
import zuriIcon from '../assets/images/zuri.png'
import ingIcon from '../assets/images/ing.png'

function Footer() {
  return (
    <div className='footer'>
      <div>
        <img src={zuriIcon} alt="zuri_logo" />
      </div>

      <div className='txt_footer'>
        HNG Internship 9 Frontend Task
      </div>

      <div>
        <img src={ingIcon} alt="I4G_logo" />
      </div>
    </div>
  )
}

export default Footer