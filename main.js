objectDetector= "";

img = "";
objects = [];
bedroom = "";
ta = "";
desk = "";
bottles = "";
fruits = "";

function preload()
{
    img = loadImage('bedroom.png , bottles.png , desk.png , fruit.png , tv_ac.png')
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("stat").innerHTML = "Status : Detecting Objects";
  }
  
  function modelLoaded() {
    console.log("Model Loaded!")
    stat = true;
    objectDetector.detect(img, gotResult);
  }
  
  function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
  }

  function onclick(bedroom) {
      img = loadImage('bedroom.png')
  }

  function onclick(ta) {
    img = loadImage('tv_ac.png')
}

function onclick(desk) {
    img = loadImage('desk.png')
}

function onclick(bottles) {
    img = loadImage('bottles.png')
}

function onclick(fruits) {
    img = loadImage('fruits.png')
}