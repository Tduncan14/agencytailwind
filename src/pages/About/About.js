import React,{useEffect} from 'react';
import Layout from '../../components/Layout';
import { useLocation } from 'react-router-dom';
import Intro from './Intro';
import Whatwedo from './Whatwedo';
import WhyChooseUs from './Whychooseus';





function About(){
 

    const {pathname} = useLocation()
    

    useEffect(() =>{


        window.scrollTo(0, 0);
    },[pathname])





return(
    <Layout>
        <div>
    <Intro />
    <Whatwedo/>
    <WhyChooseUs/>
    </div>
    </Layout>
)


}


export default About