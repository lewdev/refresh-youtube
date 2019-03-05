javascript: (
  function () {
    var re = window.location.href.match(/v=([^\?&"'>]+)/g);
    if (re && re.length > 0) {
      var videoId = re[0].split('=')[1];
      var currentTime = Math.round(document.getElementById('movie_player').getCurrentTime();
      window.location='https://youtu.be/' + videoId + "?t=" + currentTime); 
    }
  }
)();