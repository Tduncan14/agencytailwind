import React from 'react';



function Address(){
   
    




 return(
     <div className="flex justify-center">
         <div className="bg-primary rounded-3xl flex-col space-y-10 p-10 text-white">
            <h1 className="text-3xl font-semibold"> Get In Touch </h1>
            <p >Digital Market agency, we provide marketing and development services</p>


            <div className="flex space-x-5">
                 <div className="h-10 w-10 p-2">
                 <i className="ri-map-pin-line text-3xl text-secondary"></i>
                 </div>

                 <div>
                     <p>000</p>
                     <p>Chicago,IL</p>
                 </div>
            </div>


            
            <div className="flex space-x-5">
                 <div className="h-10 w-10 p-2">
                 <i className="ri-phone-line text-3xl text-secondary"></i>
                 </div>

                 <div>
                   <h1 className="font-semibold text-xl"> call us</h1>
                     <p>312-939-2391</p>
                 </div>
            </div>

             

             
            <div className="flex space-x-5">
                 <div className="h-10 w-10 p-2">
                 <i className="ri-mail-line text-3xl text-secondary"></i>
                 </div>

                 <div>
                   <h1 className="font-semibold text-xl">Mail Us</h1>
                     <p>agenmark@gmail.com</p>
                 </div>
            </div>

             
            
           <div class="flex space-x-4 justify-center mt-4 text-secondary">
            <i className="ri-instagram-line text-2xl cursor-pointer hover:text-primary hover: transform:scale-105  hover:duration-300 hover:bg-secondary" ></i>
            <i className="ri-facebook-line text-2xl cursor-pointer hover:text-primary hover: transform:scale-105  hover:duration-300 hover:bg-secondary"></i>
            <i className="ri-github-line text-2xl cursor-pointer hover:text-primary hover: transform:scale-105  hover:duration-300 hover:bg-secondary"></i>
            <i className="ri-linkedin-line text-2xl cursor-pointer hover:text-primary hover: transform:scale-105  hover:duration-300 hover:bg-secondary"></i>
            </div>


         </div>
      
     </div>
 )


}





export default Address