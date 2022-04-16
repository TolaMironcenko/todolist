import React from 'react';
import styles from './TopLayout.module.css'

const TopLayout = ({children, ...props}) => {
    return (
        <header className={styles.header} {...props}>
            {children}
        </header>
    );
};

export default TopLayout;