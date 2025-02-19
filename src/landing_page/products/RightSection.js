import React from 'react'

const RightSection = ({imageURL, productName, productDescription, appStore,learnMore}) => {
  return (
    <div className='container p-5'>
     <div className='row'>
      <div className='col-6 p-5 mt-5' style={{lineHeight:"1.8", fontSize:"1.2rem"}}>
        <h2>{productName}</h2>
        <p>{productDescription}</p>
        <div className='mt-3'>
        <a href='' style={{textDecoration:"none"}}>{learnMore}</a>
        </div>
        <a href='appStore' >
          <img src={appStore} className='mt-3'/>
        </a>
      </div>
      <div className='col-6 '>
        <img src={imageURL} alt='console image' / >
      </div>
     </div>
    </div>
  )
}

export default RightSection
