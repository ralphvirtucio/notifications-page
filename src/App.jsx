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

        {/* <main>
          <section className='notification'>
            <img src={mark} alt='Mark Webber' className='notification__img' />
            <div className='notification__container'>
              <p className='notification__content'>
                <strong className='notification__username'>Mark Webber</strong>{' '}
                reacted to your recent post
                <span className='notification__text'>
                  My first tournament today!
                  <span className='notification__status'></span>
                </span>
              </p>
              <p className='notification__online-status'>1m ago</p>
            </div>
          </section>

          <section className='notification'>
            <img src={angela} alt='Angela' className='notification__img' />
            <div className='notification__container'>
              <p className='notification__content'>
                <strong className='notification__username'>Angela Gray</strong>
                followed you
                <span className='notification__status'></span>
              </p>
              <p className='notification__online-status'>5m ago</p>
            </div>
          </section>

          <section className='notification'>
            <img src={jacob} alt='Jacob' className='notification__img' />
            <div className='notification__container'>
              <p className='notification__content'>
                <strong className='notification__username'>
                  Jacob Thompson
                </strong>
                has joined your group
                <span className='notification__text'>
                  Chess Club
                  <span className='notification__status'></span>
                </span>
              </p>
              <p className='notification__online-status'>1 day ago</p>
            </div>
          </section>

          <section className='notification'>
            <img
              src={rizky}
              alt='Rizky Hasanuddin'
              className='notification__img'
            />
            <div className='notification__container'>
              <p className='notification__content'>
                <strong className='notification__username'>
                  Rizky Hasanuddin
                </strong>
                sent you a private message
              </p>
              <p className='notification__online-status'>5 days ago</p>
              <div className='notification__pm-message'>
                <p>
                  Hello, thanks fro setting up the Chess Club. I've been a
                  member for a few weeks now and I'm already having lots of fun
                  and improving my game.
                </p>
              </div>
            </div>
          </section>

          <section className='notification'>
            <img src={kimberly} alt='Kimberly' className='notification__img' />
            <div className='notification__container'>
              <div className='div'>
                <p className='notification__content'>
                  <strong className='notification__username'>
                    Kimberly Smith
                  </strong>
                  commented on your picture
                </p>
                <img
                  src={kimberly_chess}
                  alt='Kimberly Playing Chess'
                  className='notification__content-img'
                />
              </div>

              <p className='notification__online-status'>1 week ago</p>
            </div>
          </section>

          <section className='notification'>
            <img
              src={nathan}
              alt='Nathan Peterson'
              className='notification__img'
            />
            <div className='notification__container'>
              <p className='notification__content'>
                <strong className='notification__username'>
                  Nathan Peterson
                </strong>{' '}
                reacted to your recent post{' '}
                <span className='notification__text'>
                  5 end-game strategies to increase your win rate
                </span>
              </p>
              <p className='notification__online-status'>2 weeks ago</p>
            </div>
          </section>

          <section className='notification'>
            <img src={anna} alt='Anna Kim' className='notification__img' />
            <div className='notification__container'>
              <p className='notification__content'>
                <strong className='notification__username'>Anna Kim</strong>
                left the group
                <span className='notification__text'>Chess Club</span>
              </p>
              <p className='notification__online-status'>2 weeks ago</p>
            </div>
          </section>
        </main> */}
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
