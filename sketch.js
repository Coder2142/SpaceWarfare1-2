var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;
var allPlayers;
var score = 0;
var database;

var form, player, game;

var spaceship, alien1, alien2, alien3;
var alien1Image, alien2Image, alien3Image, shipImage, background;

function preload(){
  alien1Image=loadImage("images/alien1.png");
  alien2Image=loadImage("images/alien2.png");
  alien3Image=loadImage("images/alien3.png");
  shipImage=loadImage("images/spaceship.png");
  ship2Image=loadImage("images/spaceship2.png");
  
  background=loadImage("images/background.png");
}



function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getGameState();  
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.updateGameState(1);
  }
  if(gameState === 1){
    game.play();
  }

}
