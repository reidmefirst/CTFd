var yessnd;
var nosnd;
var clapsnd; // slow clap for when another team scores. implement a websocket for this also?

function yesflag() {
  yessnd = new Audio("/static/original/snd/yes.mp3");
  yessnd.play();
}

function noflag() {
  //nosnd = new Audio("/static/original/snd/no.mp3");
  nosnd = new Audio("/static/original/snd/no5s.wav");
  nosnd.play();
}
