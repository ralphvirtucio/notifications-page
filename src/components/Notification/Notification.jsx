import React from 'react';
import styles from './Notification.module.css';

export const Notification = () => {
  return (
    <div className={styles.container}>
      <h1>Notifications</h1>
      <span className={styles.notification}>3</span>
    </div>
  );
};
