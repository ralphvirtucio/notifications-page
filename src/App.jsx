import React from 'react';
import { Header } from './components/Header/Header';
import { Notification } from './components/Notification/Notification';
import mark from './images/avatar-mark-webber.webp';
import angela from './images/avatar-angela-gray.webp';
import jacob from './images/avatar-jacob-thompson.webp';
import rizky from './images/avatar-rizky-hasanuddin.webp';
import kimberly from './images/avatar-kimberly-smith.webp';
import nathan from './images/avatar-nathan-peterson.webp';
import anna from './images/avatar-anna-kim.webp';

function App() {
  return (
    <React.Fragment>
      <div>
        <Header />

        <Notification
          img={mark}
          name='Mark Webber'
          status='reacted to your recent post'
          content='My first tournament today!'
          time='1m'
        />
        <Notification
          img={angela}
          name='Angela Gray'
          status='followed you'
          content=''
          time='5m'
        />
        <Notification
          img={jacob}
          name='Jacob Thompson'
          status='has joined your group'
          content='Chess Club'
          time='1 day'
        />
        <Notification
          img={rizky}
          name='Rizky Hasanuddin'
          status='sent you a private message'
          content=''
          time='5 days'
        />
        <Notification
          img={kimberly}
          name='Kimberly Smith'
          status='commented on your picture'
          content=''
          time='1 week'
        />
        <Notification
          img={nathan}
          name='Nathan Peterson'
          status='reacted to your recent post'
          content='5 end-game strategies to increase your win rate'
          time='2 weeks'
        />
        <Notification
          img={anna}
          name='Anna Kim'
          status='left the group'
          content='Chess Club'
          time='2 weeks'
        />
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
