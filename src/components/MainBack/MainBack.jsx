import React from 'react';
import styles from './MainBack.module.css';
import Nav from '../../components/Nav/Nav'
import MainFill from '../../components/MainFill/MainFill';

const MainInfo = () => {
    return(
        <div className={styles.box}>
            <Nav />
            <MainFill />
           
        </div>
    )
}

export default MainInfo;