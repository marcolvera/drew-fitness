import React from 'react';
import styles from './Footer.module.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.box}>
                <InstagramIcon style ={{ fontSize: 40 }}/>
                <TwitterIcon style ={{ fontSize: 40 }}/>
                <FacebookIcon style ={{ fontSize: 40 }}/>
            </div>
            <p className={styles.p}>Copyright&copy;2020 DrewFitness</p>
        </div>
    );
}

export default Footer 