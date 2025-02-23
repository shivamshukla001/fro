import React from 'react'

const Stats = () => {
  return (
    <div className='container p-3'>
      <div className='row p-5'>
        <div className='col-6 p-5'>
           <div className='mb-5'>
            <h2>Trust With Confidence</h2>
           </div>
           <div>
            <h3>Customer First Always</h3>
            <p className='text-white'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
            <h3>No spam or gimmicks</h3>
            <p className='text-white'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
            <h3>The NextGen universes</h3>
            <p className='text-white'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
            <h3>Do better with money</h3>
            <p className='text-white'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
           </div>
        </div>
        <div className='col-6'>
         <img src='media/images/ecosystem.png' style={{width:"80%"}} />
         <div className='text-center   mt-3'>
              <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our Products  </a>
              <a href='' style={{textDecoration:"none"}}>Try Kite </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
