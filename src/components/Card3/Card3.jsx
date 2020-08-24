import React from 'react';
import styles from './Card3.module.css';



const Card3 = () => {
    return(
        <div className={styles.container}>
            <div className={styles.box}>
                <h4 className={styles.h4}>Choose what is right for you</h4>
                <h2 className={styles.h2}>Types Of Programs</h2>
                <p className={styles.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facere 
                similique praesentium</p>
            </div>
            <div className>
                <div className={styles.row}>
                    <img className={styles.img} src="pic1.jpg" alt=""/>
                    <img className={styles.img} src="pic2.jpg" alt=""/>
                    <img className={styles.img} src="pic3.jpg" alt=""/>
                </div>
                <div className={styles.row}>
                    <img className={styles.img} src="https://i.imgur.com/NdzRZB6.jpg" alt=""/>
                    <img className={styles.img} src="https://i.imgur.com/I7x4Ezx.jpg" alt=""/>
                    <img className={styles.img} src="https://i.imgur.com/2XiK6CN.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Card3;
                     