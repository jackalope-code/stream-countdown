import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import Marquee from 'react-fast-marquee';

function getFrogansFirstStreamBackDate() {
  const date = new Date();
  date.setUTCMonth(10);
  date.setUTCDate(22);
  date.setUTCHours(1, 30, 0);
  console.log(date);
  return date;
}

const FirstStreamBackCountdown = () => {
  const twitchPageMockLink = <span className="mock-link">twitch.tv/frogan</span>
  const twitchPageLink = <a href="https://twitch.tv/frogan" target="_blank">twitch.tv/frogan</a>;

  return (
    <>
      <div id="main-header">
          <h1>Countdown to Frogan's return stream</h1>
      </div>
      <div id="banner-wrapper">
        <div id="banner-container">
          <div id="banner-background"/>
          <Marquee>
            <div id="marquee-scroll-text">Fr0gan returning to Twitch will be returning:30 PM PST / 8:30 PM EST |&nbsp;</div>
            {twitchPageMockLink}
            {twitchPageLink}
          </Marquee>
        </div>
      </div>
      <div className="centered-content">
        <FlipClockCountdown to={getFrogansFirstStreamBackDate()}>
          {/* TODO: Put a message and a stream embed here */}
          <p>Time's up!!! Go watch frogan at !!!</p>
        </FlipClockCountdown>
      </div>
    </>
  )
}

export default FirstStreamBackCountdown;