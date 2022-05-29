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
        
        <div className="content">
        {children}
        </div>
        
        {/* footer */}
        <div className="fixed bottom-10 left-0 right-0 ">
            
            <div className="flex  w-full justify-center">
                {
                    menuItems.map((item,index) =>(
                        <div className="flex flex-col"> 

                       {location.pathname === item.path && (<div>
                           <h1>Active</h1>
                       </div>)}
         <div className={`px-20 bg-primary py-5 ${index === 0 && 'rounded-l'} ${index === menuItems.length-1 && 'rounded-r'}flex items-center justify-center space-x-5`} key={index}>
                      
                      <i className={`${item.icon} text-secondary text-xl`}></i>
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