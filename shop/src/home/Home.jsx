import React from 'react'
import Collection from './Collection'
import HomeCategory from './HomeCategory'
import LatestCollection from './LatestCollection'
import Discount from './Discount'
import BestSelling from './BestSelling'
import Quotes from './Quotes'
import FlashSales from './FlashSales'
import CasualCollection from './CasualCollection'
import QuoteOfTheDay from './QuoteOfTheDay'



const Home = () => {
  return (
    <div>
      <Collection/>
      <HomeCategory/>
      <LatestCollection/>
      <Discount/>
      <BestSelling/>
      <Quotes/>
      <FlashSales/>
      <CasualCollection/>
      <QuoteOfTheDay/>
      
    
    </div>
  )
}

export default Home