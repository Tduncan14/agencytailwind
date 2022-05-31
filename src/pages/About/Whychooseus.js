import React from 'react';


function WhyChooseUs(){

    const items = [
        {
          title: "Innovative and Passionate",
          image: "images/innovation.png",
          description:
            "We are a team of creative and passionate designers and developers. We are fully aware of the importance of designing for the digital age and strive to deliver the best result for our clients.",
        },
        {
          title: "Good Return on Investment",
          image: "images/investment.png",
          description:
            "Working with us means providing your business with great savings. All our digital marketing and web development packages are being offered at competitive prices",
        },
        {
          title: "Seamless Customer Support",
          image: "images/customer-support.png",
          description:
            "We are always here to help you with any questions you may have. We are always here to help you with any questions you may have. We are always here to help you with any questions you may have.",
        },
      ];





      return(
          <div className='mx-32'>
              <div className="bg-primary h-72 w-full flex justify-center items-center">
                  <h1 className="text-7xl font-semibold text-white"> Why Choose Us</h1>
              </div>
              
          </div>
      )




}


export default WhyChooseUs;