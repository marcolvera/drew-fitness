import React from 'react';
import Nav from '../../components/Nav/Nav';
import MainBack from '../../components/MainBack/MainBack';
import Icons from '../../components/Icons/Icons';
import Card from '../../components/Card/Card';
import Card2 from '../../components/Card2/Card2';

const home = () => {
    return(
        <div>
            <Nav />
            <MainBack />
            <Icons />
            <Card />
            <Card2 />
        </div>
    )
};

export default home;