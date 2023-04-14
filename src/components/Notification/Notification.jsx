import React from 'react';
import styles from './Notification.module.css';
import mark from '../../images/avatar-mark-webber.webp';

export const Notification = () => {
  return (
    <div className={styles.notification}>
      <img src={mark} alt='Mark Webber' />
      <div className={styles.content}>
        <p className={styles.notification__message}>
          <strong>Mark Webber</strong> reacted to your recent post
          <span> My first tournament today!</span>
        </p>
        <p className={styles.time__active}>1m ago</p>
      </div>
    </div>
  );
};

//   Mark Webber reacted to your recent post My first tournament today!
//   1m ago
