import React from 'react';
import styles from './Header.module.css';
import { Notification } from '../Notification/Notification';

export const Header = () => {
  return (
    <header className={styles.container}>
      <Notification />
      <p className={styles.mark__all}>Mark all as read</p>
    </header>
  );
};
