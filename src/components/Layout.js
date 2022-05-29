import React from "react";



function Layout({children}){




    return(
        <>
        
        <div className="content">
        {children}
        </div>
        
        <div className="footer">
            <h1>footer</h1>
        </div>
        </>
    )
}


export default Layout