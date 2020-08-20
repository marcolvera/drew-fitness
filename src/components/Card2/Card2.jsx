import React from 'react';
import styles from './Card2.module.css';
import { Link } from 'react-router-dom';

const Card2 = () => {
    return (
        <div className={styles.row}>
            <div className={styles.column}>
                <div className={styles.column2}>
                    <h4 className={styles.h4}>July 4 2020</h4>
                    <h2 className={styles.h2}>Blog Post One</h2>
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos perspiciatis 
                    ea ullam quidem officiis, assumenda sunt ducimus, laudantiume quaerat deserunt soluta placeat dolorum, quis mollitia 
                    voluptates maiores saepe possimus velit quibusdam. Delectus perspiciatis expedita aliquid.</p>
                    <Link className={styles.btn}>READ MORE</Link>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.column1}>
                    <img className={styles.img} src="card2.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Card2