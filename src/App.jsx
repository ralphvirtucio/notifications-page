import React from 'react';
import { Header } from './components/Header/Header';
import './App.css';
import { Notification } from './components/Notification/Notification';
import mark from './images/avatar-mark-webber.webp';
import angela from './images/avatar-angela-gray.webp';
import jacob from './images/avatar-jacob-thompson.webp';
import rizky from './images/avatar-rizky-hasanuddin.webp';
import kimberly from './images/avatar-kimberly-smith.webp';
import kimberly_chess from './images/image-chess.webp';
import nathan from './images/avatar-nathan-peterson.webp';
import anna from './images/avatar-anna-kim.webp';

// TODO:

// FIX NOTIFICATION LAYOUT
// MAKE IT A REUSABLE CONTENT

function App() {
  return (
    <React.Fragment>
      <div>
        <Header />

        <div className='notification'>
          <img src={mark} alt='Mark Webber' className='user__photo' />
          <div className='notification__content'>
            <p className='notification__text'>
              <span className='user__name'>Mark Webber</span> reacted to your
              recent post{' '}
              <span className='notification__message'>
                My first tournament today!
              </span>
              <span className='unread-status'></span>
            </p>
            <p className='online__status'>1m ago</p>
          </div>
        </div>
        <div className='notification'>
          <img src={angela} alt='Angela Gray' className='user__photo' />
          <div className='notification__content'>
            <p className='notification__text'>
              <span className='user__name'>Angela Gray</span> followed you
              {/* <span className='notification__message'>
                My first tournament today!
              </span> */}
              <span className='unread-status'></span>
            </p>
            <p className='online__status'>5m ago</p>
          </div>
        </div>
        <div className='notification'>
          <img src={jacob} alt='Jacob Smith' className='user__photo' />
          <div className='notification__content'>
            <p className='notification__text'>
              <span className='user__name'>Jacob Smith</span> has joined your
              group
              <span className='notification__message'>Chess Club</span>
              <span className='unread-status'></span>
            </p>
            <p className='online__status'>1 day ago</p>
          </div>
        </div>
        <div className='notification read'>
          <img src={rizky} alt='Rizky Hasanuddin' className='user__photo' />
          <div className='notification__content'>
            <p className='notification__text'>
              <span className='user__name'>Rizky Hasanuddin</span> sent you a
              private message
              {/* This component has a different content */}
            </p>
            <p className='online__status'>5 days ago</p>
          </div>
        </div>

        <div className='notification read'>
          <img src={kimberly} alt='Kimberly Smith' className='user__photo' />
          <div className='notification__content'>
            <p className='notification__text'>
              <span className='user__name'>Kimberly Smith</span> commented on
              your picture
              {/* This component has a picture after the text */}
            </p>
            <p className='online__status'>1 week ago</p>
          </div>
        </div>

        <div className='notification read'>
          <img src={nathan} alt='Nathan Peterson' className='user__photo' />
          <div className='notification__content'>
            <p className='notification__text'>
              <span className='user__name'>Nathan Peterson</span> reacted to
              your recent post{' '}
              <span className='notification__message'>
                5 end-game strategies to increase your win rate
              </span>
              {/* This component has a picture after the text */}
            </p>
            <p className='online__status'>2 weeks ago</p>
          </div>
        </div>

        <div className='notification read'>
          <img src={anna} alt='Anna Kim' className='user__photo' />
          <div className='notification__content'>
            <p className='notification__text'>
              <span className='user__name'>Anna Kim</span> left the group{' '}
              <span className='notification__message'>Chess Club</span>
              {/* This component has a picture after the text */}
            </p>
            <p className='online__status'>2 weeks ago</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

// TODO:
// - Distinguish between "unread" and "read" notifications
// - Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
// - View the optimal layout for the interface depending on their device's screen size
// - See hover and focus states for all interactive elements on the page

// Notifications 3

//   Mark all as read

//   Mark Webber reacted to your recent post My first tournament today!
//   1m ago

//   Angela Gray followed you
//   5m ago

//   Jacob Thompson has joined your group Chess Club
//   1 day ago

//   Rizky Hasanuddin sent you a private message
//   5 days ago
//   Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and
//   I'm already having lots of fun and improving my game.

//   Kimberly Smith commented on your picture
//   1 week ago

//   Nathan Peterson reacted to your recent post 5 end-game strategies to increase your win rate
//   2 weeks ago

//   Anna Kim left the group Chess Club
//   2 weeks ago
