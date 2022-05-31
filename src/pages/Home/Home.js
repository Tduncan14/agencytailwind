import React from 'react';
import Layout from '../../components/Layout';
import Intro from './Intro';
import Marketing from './Marketing';

function Home(){


return(
    <Layout>
    <div className='px-32'>
    <Intro />
    <Marketing />
    </div>
 
    </Layout>
)

}


export default Home