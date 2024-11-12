import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

function getFrogansFirstStreamBackDate() {
  const date = new Date();
  date.setUTCMonth(10);
  date.setUTCDate(22);
  date.setUTCHours(1, 30, 0);
  console.log(date);
  return date;
}

const FirstStreamBackCountdown = () => {
  return (
    <>
      <div id="main-header">
        <h1>Countdown to Frogan's return stream</h1>
      </div>
      <div className="centered-content">
        <h2>November 21st | 5:30 PM PST / 8:30 PM EST | twitch.tv/frogan</h2>
        <FlipClockCountdown to={getFrogansFirstStreamBackDate()}>
          {/* TODO: Put a message and a stream embed here */}
          <p>Time's up!!! Go watch frogan!!!</p>
        </FlipClockCountdown>
      </div>
    </>
  )
}

export default FirstStreamBackCountdown;