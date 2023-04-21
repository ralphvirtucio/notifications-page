import React from 'react';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles['notification__heading-badge']}>
        <h1 className={styles.notification__heading}>Notifications</h1>
        <p className={styles.notification__pill}>3</p>
      </div>

      <div>
        <button className={styles['notification__mark-btn']}>
          Mark all as read
        </button>
      </div>
    </header>
  );
};
