

function setup() {
  // create canvas
  // var cnv = createCanvas(100, 100);
  // var x = (windowWidth - width) / 2;
  // var y = (windowHeight - height) / 2;
  // cnv.position(x, y);

  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-holder');
  
  textSize(15)




  // create sliders
  //createSlider is the color range, and the starting position of the scale
  rSlider = createSlider(0, 255, 0);
  //possition on the page
  rSlider.position(90, 20);
 
  

}


function draw() {

  
  var r = rSlider.value();
  background(r);
  //this controls color

  textFont("Helvetica");
  text("Lights on", 232, 35);
  fill(255,255,255);
  textFont("Helvetica");
   text("Lights off", 20, 35);
  fill(0,0,0);
  var type = loadFont("AmericanTypewriter-48.vlw");

}


// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);

// }


  
