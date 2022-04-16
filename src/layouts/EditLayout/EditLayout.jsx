import React from 'react';
import styles from './EditLayout.module.css'

const EditLayout = ({children, ...props}) => {
    return (
        <div className={styles.edit} {...props}>
            {children}
        </div>
    );
};

export default EditLayout;