import React from 'react'
import Layout from '../../components/Layout'
import Address from './Address'


function ContactForm(){





    return(
     <div>
         <form className='flex flex-col spacey-y-10'>
             <h1 className="text-4xl font-semibold text-secondary mb-5">Send a Message</h1>


             <div className="flex space-x-10 mb-5">
                 <input type="text" placeholder='First Name' 
                 className="border py-3 px-5 bg-blue-50 focus:out rounded-lg outline-none text-gray-500 w-full" />


                 <input type ="text" placeholder="Last Name"
                  className="border py-3 px-5 bg-blue-50 focus:out rounded-lg outline-none text-gray-500 w-full"/>
             </div>

             <div className="flex space-x-10 mb-5">
                 <input type="text" placeholder='Email' 
                 className="border py-3 px-5 bg-blue-50 focus:out rounded-lg outline-none text-gray-500 w-full" />


                 <input type ="text" placeholder="Phone Number"
                  className="border py-3 px-5 bg-blue-50 focus:out rounded-lg outline-none text-gray-500 w-full"/>
             </div>


             <div className="flex space-x-10">
                 <textarea type="text" 
                 placeholder='type here' 
                 rows={10}
                 className="border py-3 px-5 bg-blue-50 focus:out rounded-lg outline-none text-gray-500 w-full" />


             
             </div>

             <button className="text-white bg-secondary px-5 py-2 rounded-xl mt-5 max-w-max flex justify-end">Send a message</button>
         </form>
         

     </div>
    )

}


export default ContactForm