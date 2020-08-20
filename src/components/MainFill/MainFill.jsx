import React from 'react';
import styles from './MainFill.module.css'
import {Link} from 'react-router-dom';

const MainFill = () => {
    return (
        <div className={styles.box}>
           <div className={styles.txtBox}>
               <h1 className={styles.h1}>AN<span>DREW</span></h1>
               <h1 className={styles.h1}>PERSONAL</h1>
               <h1 className={styles.h1}>FITNESS</h1>
               <h1 className={styles.h1}>TRAINER</h1>
               <Link className={styles.btn}>BOOK NOW</Link>
           </div>
       
        </div>
    )
}

export default MainFill;
