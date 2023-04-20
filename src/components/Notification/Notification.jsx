import React from 'react';
import styles from './Notification.module.css';

export const Notification = ({ img, name, status, content, time }) => {
  return (
    <div className={styles.notification}>
      <img src={img} alt='Mark Webber' className={styles.profile__img} />
      <div className={styles.content}>
        <p className={styles.notification__message}>
          <strong>{name}</strong> {status}
          <span> {content}</span>
        </p>
      </div>
      <p className={styles.time__active}>{time} ago</p>
    </div>
  );
};
