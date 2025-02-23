import React from 'react'
import {Link} from 'react-router-dom'
const OpenAccount = () => {
  return (
    <div className='container p-5 mt-5'>

      <div className='row text-center'>
        
        <h1 className='mt-10'>Open Your Online Trading Account</h1>
        <p>Online platform to Invest In trading and HDFC</p>

       <Link to="/SignUp"> <button className='p-2 fs-5 btn btn-primary mb-5' style={{width:"25%", margin:"0 auto", color:"White" }}> Sign In Now </button></Link>
      </div>
    </div>
  )
}

export default OpenAccount
