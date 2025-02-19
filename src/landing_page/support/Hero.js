import React from 'react'

const Hero = () => {
  return (
    <header  className='p-5'>
    <div className='container' >
      <div className='row' >
        <div className='col-6'>
          <h4 className='mt-3' style={{}}>Support Portal</h4>
          <h4 className='mt-5' >Search for an answer or browse help topics to create a ticket</h4>
          <input placeholder='E.g Search Here' className='mt-3 p-3' style={{padding:"20px 50px", width:"90%", borderRadius:"10px", border:"none", fontSize:"16px"}} /><br/>
          <div  className='fs-5 mt-3' >
          <a href=''  className='fs-5'  style={{textDecorationColor:"white", marginLeft:"5px", }}> Track account opening </a>
          <a href=''  className='fs-5'  style={{textDecorationColor:"white", }}>Track segment activation </a>
          <a href='' className='fs-5'  style={{textDecorationColor:"white",}}>Intraday margins</a><br/>
          <a href='' className='mt-5 fs-5' style={{textDecorationColor:"white",}}> Kite user manual</a>
          </div>
        </div>
        <div className='col-6 '>
          <a href=''  style={{textAlign:"end", textDecorationColor:"white", }}> <h5  className='mt-3 mb-5' >Track Tickets</h5></a>

          <h4 className='mt-5' >Features</h4>
          <ol>
            
            <li className='fs-5' style={{textDecoration:"underline", }}>MCX Crude option contract expiry - February 2025</li>
            <li className='fs-5'  style={{textDecoration:"underline", }}>Latest Intraday leverages and Square-off timings</li>
          </ol>
        </div>
      </div>
    </div>
    </header>
  )
}

export default Hero
