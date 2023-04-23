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

// IMPLEMENT REUSABLE COMPONENT
// THINK ON HOW TO APPROACH RIZKY AND KIMBERLY COMPONENT

function App() {
  return (
    <React.Fragment>
      <div>
        <Header />

        <a className='notification'>
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
        </a>

        <a className='notification'>
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
        </a>

        <a className='notification'>
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
        </a>

        <a className='notification read'>
          <img src={rizky} alt='Rizky Hasanuddin' className='user__photo' />
          <div className='notification__content'>
            <p className='notification__text'>
              <span className='user__name'>Rizky Hasanuddin</span> sent you a
              private message
              {/* This component has a different content */}
            </p>
            <p className='online__status'>5 days ago</p>
          </div>
        </a>

        <a className='notification read'>
          <img src={kimberly} alt='Kimberly Smith' className='user__photo' />
          <div className='notification__content'>
            <p className='notification__text'>
              <span className='user__name'>Kimberly Smith</span> commented on
              your picture
              {/* This component has a picture after the text */}
            </p>
            <p className='online__status'>1 week ago</p>
          </div>
        </a>

        <a className='notification read'>
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
        </a>

        <a className='notification read'>
          <img src={anna} alt='Anna Kim' className='user__photo' />
          <div className='notification__content'>
            <p className='notification__text'>
              <span className='user__name'>Anna Kim</span> left the group{' '}
              <span className='notification__message'>Chess Club</span>
              {/* This component has a picture after the text */}
            </p>
            <p className='online__status'>2 weeks ago</p>
          </div>
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
