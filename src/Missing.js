import React from 'react'
import { Link } from 'react-router-dom'
const Missing = () => {
  return (
    <main className='Missing'>
        <h2>Page not Found</h2>
        <p>
            <Link to='/'>Go to Home Page</Link>
        </p>
    </main>
  )
}

export default Missing