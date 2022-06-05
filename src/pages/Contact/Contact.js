import React from 'react';
import Layout from '../../components/Layout';
import Address from './Address';
import ContactForm from './ContactForm';

function Contact(){


return(
    <Layout>

           <div className="grid grid-cols-2 px-32 mt-10 mb-10 sm:grid-cols-1 sm:p-5 ">
                     <Address />
                     <ContactForm />
           </div>

    </Layout>
)

}


export default Contact