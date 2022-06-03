import React ,{useEffect} from 'react';
import Layout from '../../components/Layout';
import Intro from './Intro';
import ClientList from './ClientList';
import {useLocation} from 'react-router-dom';
import Numbers from './Number';



function Client(){

    const {pathname} = useLocation()
    

    useEffect(() =>{


        window.scrollTo(0, 0);
    },[pathname])


return(
    <Layout>
        <Intro />
        <ClientList/>
        <Numbers/>
    </Layout>
)

}


export default Client