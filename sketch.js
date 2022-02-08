const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var submarino;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    submarino=new Submarino(200,200,400,400);

}

function draw(){
    background(180);

    submarino.display();
}