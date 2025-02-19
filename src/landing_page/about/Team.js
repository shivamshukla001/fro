import React from 'react'

const Team = () => {
  return (
    <div className='container '>

    <div className='row p-5 mt-5 mb-5 border-top '>
      <h1 className='text-center '>People</h1>
    </div>

    <div className='row mt-5 p-5 '  >
      
      <div className='col text-center ' >
        <img src='https://res.cloudinary.com/dc9ae9bsh/image/upload/v1739715403/1739715388485_swvrq0.jpg' style={{borderRadius: "25%", width:"60%"}} className='mt-3 '/>
        <h4 className='mt-3'>Shivam Shukla</h4>
        <p>Founder, CEO</p>
      </div>

      <div className='col p-5' style={{lineHeight:"1.8", fontSize:"1.2rem"}} >
     <p> Nithin bootstrapped and founded NextGen Trade in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, NextGen Trade has changed the landscape of the Indian broking industry.</p>

<p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

<p>Playing basketball is his zen.</p>
<p>Connect on <a style={{textDecoration:"none"}} href=''>Homepage</a> /<a href=''style={{textDecoration:"none"}}>TradingQnA</a>  / <a href=''style={{textDecoration:"none"}}>Twitter</a></p>
      </div>
   


    </div>
  </div>
  )
}

export default Team
