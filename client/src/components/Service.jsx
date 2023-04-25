import React from 'react'
import "../App.css"
import deliveryImg from '../asssets/image/delivery.png';
// import trackImg from "../asssets/image/t"

const Service = () => {
  return (
    <div className="h-auto bg-gradient-to-r from-rose-100 to-teal-100" >
    <div id="Contact" className="bg-cover bg-right bg-no-repeat px-4 py-3 ml-10 text-black-400 font-bold text-3xl"><h1>Service</h1></div>
    <div className="ml-10 mr-10 flex flex-wrap">
      <div className="p-4 w-60 h-60 m-6 bg-blue-200 text-gray-700 rounded-3xl lg:w-1/4 md:w-1/2 sm:w-full bo"            
      style={{position: "relative"}}>
       <h2 className="text-center font-bold text-xl mt-2"> Fast Delivery</h2>
       <img src={deliveryImg} alt="delivery" className='w-20 h-20  ml-20 mt-10 mb-5'/>
      </div>
      <div className="p-4 w-60 h-60 m-6 bg-blue-200 text-gray-700 rounded-3xl lg:w-1/4 md:w-1/2 sm:w-full bo"            
      style={{position: "relative"}}>
       <h2 className="text-center font-bold text-xl mt-2"> Order Tracking</h2>
       <img src={deliveryImg} alt="delivery" className='w-20 h-20  ml-20 mt-10 mb-5'/>
      </div>

      



      

    </div></div>
    
  )
}

export default Service