import React from 'react';
import Nav from '../../components/Nav/Nav';
import MainBack from '../../components/MainBack/MainBack';
import Icons from '../../components/Icons/Icons';
import Card from '../../components/Card/Card';
import Card2 from '../../components/Card2/Card2';
import Card3 from '../../components/Card3/Card3';
import Footer from '../../components/Footer/Footer';

const home = () => {
    return(
        <div>
            <Nav />
            <MainBack />
            <Icons />
            <Card />
            <Card3 />
            <Card2 />
            <Footer />
        </div>
    )
};

export default home;