import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import Marquee from 'react-fast-marquee';
import MediaQuery from 'react-responsive';
import useWindowDimensions from './useWindowDimensions';

function getFrogansFirstStreamBackDate() {
  const date = new Date();
  date.setUTCMonth(10);
  date.setUTCDate(22);
  date.setUTCHours(1, 30, 0);
  console.log("CALCULATED START DATE/TIME IN LOCAL TIMEZONE: " + date.toDateString() + " " + date.toLocaleTimeString("en-US", {hour12: true}));
  return date;
}

const DebugPrint: React.FC<{text: string}> = ({text}) => {
  console.log(text);
  return <></>
}

const FirstStreamBackCountdown = () => {
  const {width: windowWidth, height: _} = useWindowDimensions();

  const froganPageMockLink = <span className="mock-link">twitch.tv/frogan</span>
  const froganPageLink = <a href="https://twitch.tv/frogan" target="_blank">twitch.tv/frogan</a>;

  return (
    <>
      <div id="main-header">
          <h1>Countdown to Frogan's return stream</h1>
      </div>
      <div id="banner-wrapper">
        <div id="banner-container">
          <div id="banner-background"/>
          <Marquee pauseOnHover={false} autoFill={false} style={{width: windowWidth}}>
            <div id="marquee-scroll-text">Fr0gan returning to Twitch | {froganPageMockLink} | Thursday November 21st 5:30 PM PST / 8:30 PM EST | Go watch frogan then | {froganPageMockLink} | Countdown to frogan's live return | Fr0gan will be returning to Twitch live Thursday November 21st 5:30 PM PST / 8:30 PM EST |&nbsp;</div>
          </Marquee>
        </div>
      </div>
      <div className="centered-content">
        {/* query="(min-device-width: 366; max-device-width: 520px"> */}
        <MediaQuery maxWidth="365px">
          <DebugPrint text={'Rendering small device view (max 365px)'} />
          <FlipClockCountdown to={getFrogansFirstStreamBackDate()} renderMap={[true, false, false, false]} showSeparators={false}>
          </FlipClockCountdown>
          {/* 1/2 scale size width: "23px", height: "40px" */}
          {/* Regular */}
          {/* <FlipClockCountdown className="hms-countdown" to={getFrogansFirstStreamBackDate()} renderMap={[false, true, true, true]}> */}
          <FlipClockCountdown to={getFrogansFirstStreamBackDate()}
            renderMap={[false, true, true, true]}
            digitBlockStyle={{
              fontSize: "1.5rem",
              width: "23px",
              height: "40px"
            }
            }>
            {/* TODO: Put a message and a stream embed here */}
            <p>Time's up!!! Go watch frogan at {froganPageLink}!!!</p>
          </FlipClockCountdown>
        </MediaQuery>
        <MediaQuery minWidth="366px" maxWidth="520px">
          <DebugPrint text={'Rendering medium device view (min 366px, max 520px)'} />
          <FlipClockCountdown to={getFrogansFirstStreamBackDate()} renderMap={[true, false, false, false]} showSeparators={false}>
          </FlipClockCountdown>
          {/* 1/2 scale size width: "23px", height: "40px" */}
          {/* <FlipClockCountdown to={getFrogansFirstStreamBackDate()} renderMap={[false, true, true, true]} digitBlockStyle={{fontSize: "1.5rem", }}> */}
          <FlipClockCountdown className="hms-countdown" to={getFrogansFirstStreamBackDate()} renderMap={[false, true, true, true]}>
            {/* TODO: Put a message and a stream embed here */}
            <p>Time's up!!! Go watch frogan at {froganPageLink}!!!</p>
          </FlipClockCountdown>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 521px">
          <DebugPrint text={'Rendering larger device view (>=521px)'} />
          <FlipClockCountdown to={getFrogansFirstStreamBackDate()}>
            {/* TODO: Put a message and a stream embed here */}
            <p>Time's up!!! Go watch frogan at {froganPageLink}!!!</p>
          </FlipClockCountdown>
        </MediaQuery>
      </div>
    </>
  )
}

export default FirstStreamBackCountdown;