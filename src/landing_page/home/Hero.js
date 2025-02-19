import React from 'react'

const Hero = () => {
  return (
    <header style={{backgroundColor:"#131722"}}>
    <div className='container p-5'>

      <div className='row text-center'>
        <img src='media/images/homeHero.png' className='mb-5' />
        <h1 className='mt-5'>Invest In EveryThing</h1>
        <p>Online platform to Invest In trading and HDFC</p>
        <button className='p-2 fs-5 btn btn-primary mb-5' style={{width:"25%", margin:"0 auto" }}> SignUp </button>
      </div>
    </div>
    </header>
  )
}

export default Hero
