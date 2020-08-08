var ball;
var database, ballposition, pos;
var playerCount = 0;
var gameState = 0;
var form, player, game;
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.Start();
}
function draw(){
}

