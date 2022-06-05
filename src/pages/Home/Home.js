import React,{useEffect} from 'react';
import Layout from '../../components/Layout';
import Intro from './Intro';
import Marketing from './Marketing';
import WhyMarket from './WhyMarket';
import {useLocation} from 'react-router-dom'


function Home(){

    const {pathname} = useLocation()
    

    useEffect(() =>{


        window.scrollTo(0, 0);
    },[pathname])





return(
    <Layout>
    <div className='px-32 sm:px-2'>
    <Intro />
    <Marketing />
    <WhyMarket/>
    </div>
 
    </Layout>
)

}


export default Home