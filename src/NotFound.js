import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container p-5'>

      <div className='row text-center'>
        
        <h1 className='mt-10'>404 Not Found</h1>
        <p>The Page You Are try to find is Unavavilable</p>
        <Link className='p-2 fs-5 btn btn-primary mb-5' to='/' style={{width:"25%", margin:"0 auto" }}> Go Home </Link>


      </div>
    </div>
  )
}

export default NotFound
