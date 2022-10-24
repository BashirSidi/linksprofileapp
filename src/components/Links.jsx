import React from 'react'
import Link from './Link'

function Links() {
  return (
    <div className='links'>
      <Link 
        name='Twitter Link'
        url='https://twitter.com/' 
        id='btn__twitter' 
      />

      <Link 
        name='Zuri Team'
        url='https://training.zuri.team/' 
        id='btn__zuri' 
      />

      <Link 
        name='Zuri Books'
        url='http://books.zuri.team/' 
        id='books' 
      />

      <Link 
        name='Python Books'
        url='https://books.zuri.team/python-for-beginners?ref_id=rashab' 
        id='book__python' 
      />
      
      <Link 
        name='Background Check for Coders'
        url='https://background.zuri.team/' 
        id='pitch' 
      />

      <Link 
        name='Design Books'
        url='https://books.zuri.team/design-rules' 
        id='book__design' 
      />
    </div>
  )
}

export default Links