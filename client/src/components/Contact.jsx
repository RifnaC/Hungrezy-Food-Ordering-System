import React from 'react';
import '../App.css';

const Contact = () => {

  const handlePhoneClick = () => {
    window.location.href = 'tel:+919778245923'; // Replace with your phone number
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:foodhungrezy@gmail.com?subject=Inquiry&body=Hi%20there,'; // Replace with your email address and subject/body
  };

  return (
    <div className="h-auto bg-gradient-to-r from-rose-100 to-teal-100">
      <div
        id="Contact"
        className="bg-cover bg-right bg-no-repeat px-4 py-3 ml-10 text-black-400 font-bold text-3xl"
      >
        <h1>Contact</h1>
      </div>
      <div className="ml-10 mr-10 flex flex-wrap justify-around mt-5 ">
        <div
          className="p-4 w-60 h-60 m-4 bg-blue-200 text-gray-700 rounded-3xl lg:w-1/4 md:w-1/2 sm:w-full"
          style={{ position: 'relative' }}
        >
          <div className="p-4 m-10 ">
            <h3 className="text-center font-bold text-xl mt-2">Call Us</h3>
            <p
              className="text-center mt-5 cursor-pointer"
              onClick={handlePhoneClick}
            >
              +91 9778245923
            </p>
          </div>
        </div>
        <div
          className="p-4 w-60 h-60 m-4 bg-blue-200 text-gray-700 rounded-3xl lg:w-1/4 md:w-1/2 sm:w-full"
          style={{ position: 'relative', cursor: 'pointer' }}
          onClick={handleEmailClick}
          // style={{ }}
        >
          <div className="p-4 m-10 ">
            <h3 className="text-center font-bold text-xl mt-2">Email</h3>
            <p className="text-center mt-5">foodhungrezy@gmail.com</p>
          </div>
        </div>
        {/* <div
          className="p-4 w-60 h-60 m-4 bg-blue-200 text-gray-700 rounded-3xl lg:w-1/4 md:w-1/2 sm:w-full"
          style={{ position: 'relative' }}
          onClick={handleEmailClick}
          style={{ cursor: 'pointer' }}
        >
        </div> */}
        <div
          className="p-4 w-60 h-60 m-4 bg-blue-200 text-gray-700 rounded-3xl lg:w-1/4 md:w-1/2 sm:w-full"
          style={{ position: 'relative' }}
        >
          <div className="p-4 m-10 ">
            <h3 className="text-center font-bold text-xl mt-2">Follow Us</h3>
            <a href="https://www.instagram.com/hungrazyfood/"><p
              className="text-center mt-5 cursor-pointe" >hungrazyfood</p></a>
          </div>
        </div>       
      </div>
    </div>
  );
};

export default Contact;