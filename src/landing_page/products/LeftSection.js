import React from 'react'

const LeftSection = ({imageURL, ProductName, ProductDescription, playStore, AppStore}) => {
  return (
    <div className='container p-5'>
      <div className='row '>
      <div className='col-6 '>
        <img src={imageURL}/>
      </div>
      
      <div className='col p-5 mt-5'style={{lineHeight:"1.8", fontSize:"1.2rem"}}>
        <h2>{ProductName}</h2>
        <p>{ProductDescription}</p>
        <div className='mt-3'>
         <a href='AppStore'>
         <img src={AppStore}/>
         </a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default LeftSection
