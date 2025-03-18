document.addEventListener("visibilitychange", () => {
  let video = document.querySelector("video");
  if (video) {
      document.hidden ? video.pause() : video.play();
  }
});


//Function to find YouTube video player (works for normal videos & Shorts)

// function findYouTubePlayer() {
//   let video = document.querySelector('video.html5-main-video'); // Normal YouTube videos
//   if (!video) {
//     // Check if it's a Shorts video
//     const shortsContainer = document.querySelector('ytd-reel-video-renderer');
//     if (shortsContainer) {
//       video = shortsContainer.querySelector('video'); // YouTube Shorts player
//     }
//   }
//   return video;
// }