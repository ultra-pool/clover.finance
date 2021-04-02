import React from 'react';
import styles from "./EarlyBackers.module.scss";
import {useInView} from "react-intersection-observer";

const EarlyBackers = ({
    className,
}: {
    className?: string;

}) => {
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true,
    });
    return (
        <div className={styles.wrapper}>
            <h3>Early Backers</h3>
            <div className={styles.content}>
                <img className={styles.image} width={103} src="/backers/bk_polychain.png" alt=""/>
                <img className={styles.image} width={113} src="/backers/bk_block.png" alt=""/>
                <img className={styles.image} width={226} src="/backers/bk_alameda.png" alt=""/>
                <img className={styles.image} width={123} src="/backers/bk_divergence.png" alt=""/>
                <img className={styles.image} width={125} src="/backers/bk_cms.png" alt=""/>
                <img className={styles.image} width={168} src="/backers/bk_hypersphere.png" alt=""/>
            </div>

        </div>
    );
};

export default EarlyBackers;