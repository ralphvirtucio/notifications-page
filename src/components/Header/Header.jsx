import React from 'react';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.notif__container}>
        <h1 className={styles.main__heading}>Notifications</h1>
        <span className={styles.notif__badge}>3</span>
      </div>
      <p className={styles.mark__all}>Mark all as read</p>
    </header>
  );
};
