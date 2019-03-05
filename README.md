# refresh-youtube
Shortcut that will allow refresh a YouTube video to where it might have glitched out.

Recently while using YouTube, I found that often times either the video stops completely or only the audio plays but the video is frozen. So I figured out a script that would reload the page where you were last viewing. I was inspired by [this bookmark script](https://github.com/benscabbia/x-ray).

# Usage
```javascript
javascript: (function () { var re = window.location.href.match(/v=([^\?&"'>]+)/g); if (re && re.length > 0) { window.location='https://youtu.be/' + re[0].split('=')[1] + "?t=" + Math.round(document.getElementById('movie_player').getCurrentTime()); }})();
``` 

Highlight and drag this code onto your bookmarks bar, or create a bookmark and paste the code in the URL/location field.

# Line by line explanation of the code

```javascript
var re = window.location.href.match(/v=([^\?&"'>]+)/g);
```
This obtains the YouTube video ID using a regular expression. The "match" method returns an array of results.

```javascript
if (re && re.length > 0) {
```

This checks to see if the regular expression method returned any results.

```javascript
window.location='https://youtu.be/' + re[0].split('=')[1] + "?t=" + Math.round(document.getElementById('movie_player').getCurrentTime()); 
```

This one line redirects the user to the video at the current time of the video.

```javascript
re[0].split('=')[1]
``` 

"re[0]" is the result of the regular expression (i.e. "v=CQ4quG6Q6jE"). So "re[0].split('=')[1]" is the second part of the "=" delimited string, which would be the video ID. 

```javascript
Math.round(document.getElementById('movie_player').getCurrentTime())
``` 
"document.getElementById('movie_player').getCurrentTime()" will return a float value of where you were last in the video so we need to "Math.round" it.
