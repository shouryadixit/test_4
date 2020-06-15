var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers, player, form;
var game;
var database;
var soldier_img, soldier2_img, back_img, soldier3_img, sol_img, sol2_img, sol_stand, back2_img, run;
var car1, car2, car3, car4, cars;



function preload(){
 back2_img = loadImage("backg.png");
  back_img = loadImage("bg0.png");
  sol_img = loadAnimation("1.png", "2.png", "5.png");
  sol2_img = loadAnimation("1f.png", "2f.png", "5f.png");
 // sol_stand = loadImage("standing.png");
 run = loadSound("run.mp3");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-200);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 run.loop();
}


function draw(){
  
  background(back2_img);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

  if(keyDown(LEFT_ARROW)){
    run.play();
    }

}

