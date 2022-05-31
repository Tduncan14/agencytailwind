import React from 'react';


function Intro(){


    return(
        <div className="grid grid-cols-2 h-screen items-center">


            <div className="flex flex-col space-y-10">
                <h1 className="text-7xl font-semibold text-priamry">The Best <br /> <b className="text-secondary"> Marketing </b></h1>
                <h1 className="text-5xl font-semibold">Doesn't feel like marketing</h1>

                <button className="px-16 py-5 bg-secondary text-white  max-w-max">Get Started</button>

            </div>


            <div className="p-10">
            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_hwcplx4x.json"
              background="transparent"  speed="1"   
              loop  autoplay></lottie-player>
            </div>

        </div>
    )
}

export default Intro