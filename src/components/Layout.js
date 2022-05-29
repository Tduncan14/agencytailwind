import React from "react";
import {Link} from 'react-router-dom';



function Layout({children}){


    const menuItems = [
        {
        title:'Home',
        path:'/',
        icon:''
        },
        {
          title:'About',
          path:'/about',
          icon:'',
        },
        {
            title:'Clients',
            path:'/client',
            icon:''
        },
        {
            title:'Contact',
            path:'/contact',
            icon:''
        }
    ]



    return(
        <>
        
        <div className="content">
        {children}
        </div>
        
        {/* footer */}
        <div className="fixed bottom-10 left-0 right-0 ">
            
            <div className="flex  w-full justify-center">
                {
                    menuItems.map((item,i) =>(
         <div className={`px-20 bg-primary py-5 ${i === 0 && 'rounded-l'} ${i === menuItems.length-1 && 'rounded-r'}`} key={i}>
                       <Link className="text-secondary" to={item.path}>{item.title}</Link>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}


export default Layout