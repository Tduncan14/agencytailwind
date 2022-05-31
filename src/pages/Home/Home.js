import React from 'react';
import Layout from '../../components/Layout';
import Intro from './Intro';
import Marketing from './Marketing';
import WhyMarket from './WhyMarket';

function Home(){


return(
    <Layout>
    <div className='px-32'>
    <Intro />
    <Marketing />
    <WhyMarket/>
    </div>
 
    </Layout>
)

}


export default Home