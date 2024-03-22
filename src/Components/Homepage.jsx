import React from 'react'
import Search from './Search'
import Main from './Main'
import Bestcakes from './Bestcakes'
import Trendingcake from './Trendingcake'
import Review from './Review'
import Joinus from './Joinus'
const Homepage = () => {
  return (
    <>
   <section>
     <Search/>
   </section>
     
   <section>
     <Main/>
   </section>

   <section>
     <Bestcakes/>
   </section>

   <section>
     <Trendingcake/>
   </section>

   <section>
     <Review/>
   </section>

   <section>
     <Joinus/>
   </section>
   
    </>
  )
}

export default Homepage