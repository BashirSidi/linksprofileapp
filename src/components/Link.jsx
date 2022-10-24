import React from 'react'
import './Link.css';

function Link({name, url, id}) {
  return (
    <div className='main'>
      <a 
        className='link'
        id={id}
        href={url} 
      >
        {name}
      </a>
    </div>
  )
}

export default Link