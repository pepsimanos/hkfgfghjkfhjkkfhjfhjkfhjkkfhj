var winWidth = 1200, winHeight = 600;

var mW = 10, mH = 10, mS =60;

var wallImg;
var wall = [];
var map;

function preload(){
  wallImg = loadImage('assets/brick.png');
}

function setup(){
  createCanvas(winWidth,winHeight);
  map = new Map(10, 10);
  for(var i = 0; i < map.getRows(); i++)
    for(var j = 0; j < map.getColumns(); j++){
      if(map.getElement(i, j) == "#")
        wall.push(new Wall(i * 64, j * 64));
    }
}

function draw() {
  background(color('#AFCCFF'));
  for(var i = 0; i < wall.lenght; i++)
    wall[i].show;
  drawSprites();
}