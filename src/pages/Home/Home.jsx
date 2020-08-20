import React from 'react';
import Nav from '../../components/Nav/Nav';
import MainBack from '../../components/MainBack/MainBack';
import Icons from '../../components/Icons/Icons';
import Card from '../../components/Card/Card';

const home = () => {
    return(
        <div>
            <Nav />
            <MainBack />
            <Icons />
            <Card />
        </div>
    )
};

export default home;