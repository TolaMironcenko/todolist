import React from 'react';
import styles from './NotesLayout.module.css'

const NotesLayout = ({children, ...props}) => {
    return (
        <div className={styles.notes} {...props}>
            {children}
        </div>
    );
};

export default NotesLayout;