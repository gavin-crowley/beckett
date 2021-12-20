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
  img = loadImage('beckett.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
  xspeed = 2;
  yspeed = 2;

  
  wind = loadSound("wind.mp3", loaded)
  clangSound = loadSound("clang.mp3")
}

function loaded() {
  wind.play();
}

function draw() {
  background(0);
  image(img, x, y);

  x = x + xspeed;
  y = y + yspeed;

  if (x + img.width >= width) {
    xspeed = -xspeed;
    x = width - img.width;
    clangSound.play();
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    clangSound.play();
  }

  if (y + img.height >= height) {
    yspeed = -yspeed;
    y = height - img.height;
    clangSound.play();
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    clangSound.play();
  }
}