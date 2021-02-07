var canvas, backgroundImage;
var Leaderboard = 0;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var passedFinish;
var cars, car1, car2, car3, car4;
var bronze, gold, silver;
var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("track.jpg");
  car1_img = loadImage("car1.png");
  car2_img = loadImage("car2.png");
  car3_img = loadImage("car3.png");
  car4_img = loadImage("/car4.png");
  ground = loadImage("ground.png");
  bronze = loadImage("bronze medal.png");
  gold = loadImage("gold medal.png");
  silver = loadImage("silver medal.png");
  backgroundImg=loadImage("game-1.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(backgroundImg);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(Leaderboard === 4){

game.update(2)

  }
  if(gameState === 2 & Leaderboard === 4){

 game.ranks()   

  }
}
