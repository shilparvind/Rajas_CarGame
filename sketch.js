var canvas, backgroundImage;
var gameStateP = 0;
var playerCount;
var database;
var form, player, game;
var allPlayers;
var finishedPlayers = 0;
var track;
var car1, car2, car3, car4, cars;
var car1i, car2i, car3i, car4i;
var passed = false;
function preload() {
  car1i = loadImage("images/car1.png");
  car2i = loadImage("images/car2.png");
  car3i = loadImage("images/car3.png");
  car4i = loadImage("images/car4.png");
  track = loadImage("images/track.jpg");
}
function setup() {
  canvas = createCanvas(displayWidth - 30, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  if (playerCount === 4) {
    game.update(1);
  }
  if (gameStateP === 1) {
    clear();
    game.play();
  }
  if (finishedPlayers === 4) {
    game.update(2);
    gameStateP = 2;
  }
  if (gameStateP === 2) {
    //console.log("gameStateP2");
    game.end();
  }
  // if(finishedPlayers===4){
  ///    game.update(2);
  //     gameStateP=2;
  //   }
}
