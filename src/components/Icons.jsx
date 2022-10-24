import React from 'react'
import './Icons.css';
import slackIcon from '../assets/images/slack.png';
import githubIcon from '../assets/images/github.png'

function Icons() {
  return (
    <div className='icons'>
      <img 
        src={slackIcon}
        alt="slack_icon" 
      />

      <img 
        src={githubIcon}
        alt="github_icon" 
      />
    </div>
  )
}

export default Icons