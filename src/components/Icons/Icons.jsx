import React from 'react';
import styles from './Icons.module.css';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';

const Icons = () => {
    return (
        <div className={styles.box}>
            <div className={styles.subBox}>
                <FitnessCenterIcon style={{ fontSize: 70 }} />
                <h3 className={styles.h3}><span>Personal</span> Training</h3>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, sapiente!</p>
            </div>
            <div className={styles.subBox}>
                <FastfoodIcon style={{ fontSize: 70}} />
                <h3 className={styles.h3}><span>Nutrition</span> Planning</h3>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, sapiente!</p>
            </div>
            <div className={styles.subBox}>
                <MobileFriendlyIcon style={{ fontSize: 70}} />
                <h3 className={styles.h3}><span>Online</span> Training</h3>
                <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, sapiente!</p>
            </div>
        </div>
    )
}

export default Icons;
