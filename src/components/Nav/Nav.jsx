import React from 'react';
import {Link} from "react-router-dom";
import styles from './Nav.module.css';

const Nav = () => {
    return(
        <div className={styles.box}>
            <div>
                <Link className={styles.logo}><span>DREW</span> FITNESS</Link>
            </div>
            <div>
                <Link className={styles.link}>HOME</Link>
                <Link className={styles.link}>ABOUT</Link>
                <Link className={styles.link}>SERVICES</Link>
                <Link className={styles.link}>CONTACT</Link>
                <Link className={styles.link}>BOOK ONLINE</Link>
            </div>
        </div>
    )
}

export default Nav;
            