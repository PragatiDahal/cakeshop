import React from 'react'

const Search = () => {
  return (
    <>
   <section className="flex flex-col md:flex-row flex-wrap pt-5 gap-8 justify-center items-center">
  
  <input type="text" className="flex items-center w-200px md:w-[450px] h-[45px] md:top-[45px] md:left-[205px] bg-white border-2 border-red-200 rounded-xl mx-5 px-4" placeholder="Search for Cakes?">
   
  </input>

  <div className="w-200px md:w-[250px] h-[45px] px-4 py-4 md:pt-2 md:px-12 bg-[#F4BBC9] rounded-[30px] my-2 md:my-0">
    <span className="text-base px-2 justify-center">Delivery Location</span>
  </div>

  <div className="w-200px md:w-[250px] h-[45px] px-4 py-4 md:pt-2 md:px-12 bg-[#F4BBC9] rounded-[30px] my-2 md:my-0">
    <span className="text-bold px-2 justify-center">Call Us:</span>
    <span className="text-base justify-center">01011456</span>
  </div> 

</section>

    </>
  )
}

export default Search