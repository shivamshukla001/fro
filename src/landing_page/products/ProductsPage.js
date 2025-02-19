import React from 'react'
import Hero from './Hero'
import RightSection from './RightSection'
import LeftSection from './LeftSection'
import Universe from './Universe'

const ProductsPage = () => {
  return (
    <div>
    <Hero/>
    <LeftSection imageURL="media/images/kite.png" ProductName="Kite" ProductDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." playStore="" AppStore="media/images/appstoreBadge.svg"/>
    <RightSection imageURL="media/images/console.png" productName="Console" productDescription="The central dashboard for your NextGen Trade account. Gain insights into your trades and investments with in-depth reports and visualisations." appStore="media/images/appstoreBadge.svg" learnMore="LearnMore"/>
    <LeftSection imageURL="media/images/coin.png" ProductName="Coin" ProductDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." playStore="" AppStore="media/images/appstoreBadge.svg"/>
    <RightSection imageURL="media/images/kiteconnect.png" productName="Kite Connect API" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." appStore="media/images/appstoreBadge.svg" learnMore="LearnMore"/>
    <LeftSection imageURL="media/images/varsity.png" ProductName="Varsity Mobile" ProductDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." playStore="" AppStore="media/images/appstoreBadge.svg"/>

    <h2 className='text-center'>Want to know more about our technology stack? Check out the NextGen Trade.tech blog.</h2>
    
    <Universe/>
    </div>
  )
}

export default ProductsPage
