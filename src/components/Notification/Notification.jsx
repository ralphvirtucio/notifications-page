import React from 'react';
import mark from '../../images/avatar-mark-webber.webp';

export const Notification = () => {
  return (
    <div>
      <img src={mark} alt='Mark Webber' />
      <div className='content'>
        <h2>Mark Webber</h2>
        <p>reacted to your recent post My first tournament!</p>
        <p>1m ago</p>
      </div>
    </div>
  );
};

//   Mark Webber reacted to your recent post My first tournament today!
//   1m ago
