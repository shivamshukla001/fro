import React from 'react'

const Hero = () => {
  return (
    <div className='container text-center mt-4 mb-5'>
      <div>
    <h1>Charges</h1>
    <h5 className='mt-2 '>List of all charges and taxes</h5>

      </div>
    <div className='row p-5 mt-5 text-center'>
        <div className='col-4  p-5'>
          <img src='media/images/pricing0.svg'style={{width:"70%"}} />
          <h2>Free equity delivery</h2>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className='col-4 p-5 '>
        <img src='media/images/intradayTrades.svg'style={{width:"70%"}} />
          <h2>Intraday and F&O trades</h2>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className='col-4 p-5 '>
        <img src='media/images/pricing0.svg'style={{width:"70%"}} />
          <h2>Free direct MF</h2>
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>              
      </div>
    </div>

    
  )
}

export default Hero
