import React from 'react';
import { Header } from './components/Header/Header';

function App() {
  return (
    <React.Fragment>
      <div>
        <Header />

        <main>Notification Page</main>
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
