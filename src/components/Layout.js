import React from "react";
import {Link, useLocation} from 'react-router-dom';



function Layout({children}){

    const location = useLocation()


    const menuItems = [
        {
        title:'Home',
        path:'/',
        icon:'ri-home-smile-line'
        },
        {
          title:'About',
          path:'/about',
          icon:'ri-information-line',
        },
        {
            title:'Clients',
            path:'/client',
            icon:'ri-user-location-fill'
        },
        {
            title:'Contact',
            path:'/contact',
            icon:'ri-contacts-fill'
        }
    ]



    return(
        <>
        
        <div className=" pb-44 overflow-x-hidden">
        {children}
        </div>
        
        {/* footer */}
        <div className="fixed bottom-10 left-0 right-0 ">
            
            <div className="flex  w-full justify-center">
                {
                    menuItems.map((item,index) =>(
                        <div className="flex flex-col justify-end items-center"> 

                       {location.pathname === item.path && (<div className="flex flex-col items-center">
                         <div className="h-5 w-10 bg-primary rounded-t-full "> </div>
                         <div className="h-5 w-20 bg-primary rounded-t-full text-center" >
                               <i className={`${item.icon} text-xl text-white `}></i>
                              </div>
                       </div>)}
         <div className={`px-20 bg-primary py-5 ${index === 0 && 'rounded-l'} ${index === menuItems.length-1 && 'rounded-r'}flex items-center justify-center space-x-5`} key={index}>
                      
                      {/* <i className={`${item.icon} text-secondary text-xl`}></i> */}
                    
                         {location.pathname !== item.path && <i className={`${item.icon} text-secondary text-xl`}></i> }
                       <Link className="text-secondary text-xl" to={item.path}>{item.title}</Link>
                        </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}


export default Layout