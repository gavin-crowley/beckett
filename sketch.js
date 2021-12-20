// Bouncing DVD Logo
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/131-bouncing-dvd-logo.html
// https://youtu.be/0j86zuqqTlQ
// https://editor.p5js.org/codingtrain/sketches/Ya1K1ngtFk

let x;
let y;

let xspeed;
let yspeed;

let dvd;

var clangSound;
var wind;

function preload() {
  dvd = loadImage('beckett.jpg');
  clangSound = loadSound("clang.mp3")
  wind = loadSound("wind.mp3")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
  xspeed = 2;
  yspeed = 2;
  wind.play();
}

function draw() {
  background(0);
  image(dvd, x, y);

  x = x + xspeed;
  y = y + yspeed;

  if (x + dvd.width >= width) {
    xspeed = -xspeed;
    x = width - dvd.width;
    clangSound.play();
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    clangSound.play();
  }

  if (y + dvd.height >= height) {
    yspeed = -yspeed;
    y = height - dvd.height;
    clangSound.play();
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    clangSound.play();
  }
}