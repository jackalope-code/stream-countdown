
// const TwitchStreamEmbed = () => {
//   const width = 800;
//   const height = 600;
//   const channelID = ""
//   return (
//     <>
//       <script src= "https://player.twitch.tv/js/embed/v1.js"></script>
//       <div id="<player div ID>"></div>
//       <script type="text/javascript">
//         var options = {
//           width: <width>,
//           height: <height>,
//           channel: "<channel ID>",
//           video: "<video ID>",
//           collection: "<collection ID>",
//           // only needed if your site is also embedded on embed.example.com and othersite.example.com
//           parent: ["embed.example.com", "othersite.example.com"]
//         };
//         var player = new Twitch.Player("<player div ID>", options);
//         player.setVolume(0.5);
//       </script>
//     </>
//   )
// };