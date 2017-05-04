var mySound;
var kiRed = 200;
var kiGreen = 200;
var kiBlue = 200;

function preload(){
mySound = loadSound('js/likethat.mp3');  
}

function setup(){
createCanvas(800,800);
background(255);

kiBlue = random(0,255);
kiGreen = random(0,255);
kired = random(0,255);
mySound.setVolume(0.1);

}


function draw(){
kiBlue = random(0,255);
kiGreen = random(0,255);
kired = random(0,255);

if(mouseIsPressed){
stroke(255);
fill(kiBlue,kiGreen,kiRed);
ellipse(mouseX,mouseY,50,50);
}
}


function mousePressed(){
mySound.play(); 
}

function mouseReleased(){
mySound.pause();
}

// function NuWorld(){
//     if(mouseIsPressed){
//          if(mySound.isplaying){
//     mySound.pause(); 
//  }  
//  else{
//      mySound.play();
//  }    
//     }


// }
