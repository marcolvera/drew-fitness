import React from 'react';
import styles from './MainInfo.module.css';

const MainInfo = () => {
    return(
        <div className={styles.box}>
            <div className={styles.txtBox}>
                <h1 className={styles.h1}>DREW</h1>
                <h1 className={styles.h1}>PERSONAL</h1>
                <h1 className={styles.h1}>FITNESS</h1>
                <h1 className={styles.h1}>TRAINER</h1>
            </div>
           <img className={styles.img} src="home.jpg" alt=""/>
        </div>
    )
}

export default MainInfo;