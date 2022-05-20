// save this file as sketch.js
// Sketch One
var s7 = function( p ) { // p could be any variable name
  var attractors = [];
  var particles = [];
  let x = 100;
  let y = 100;
  var canvas;

  p.preload = () => {
    font = loadFont('assets/fonts/GothamNarrow-Medium.otf');
  };

p.mousePressed = () => {
    attractors.push(createVector(mouseX, mouseY));
  };

  p.setup = () => {
    p.createCanvas(200, 200);
    p.background(51);

    // sketch.textFont(font);
    // sketch.textSize(128);
    // sketch.fill(255);
    // sketch.text('train', 10, 200, 192);

    // var points = font.textToPoints('train', 100, 200, 192, {
    //   sampleFactor: 0.25
    // });
    // console.log(points);

    // for (var i = 0; i < points.length; i++ ) {
    //   var pt = points[i];
    //   sketch.stroke (255);
    //   sketch.strokeWeight (4);
    //   sketch.point(pt.x, pt.y);
    // }
  };

    p.draw = () => {
    p.background(51);
    p.stroke(255);
    p.strokeWeight(4);
    particles.push(new Particle(random(width), random(height)));

    if (particles.length > 100) {
      particles.splice(0, 1);
    }

    for (var i = 0; i < attractors.length; i++) {
      p.stroke(0, 255, 0);
      point(attractors[i].x, attractors[i].y);
    }
    for (var i = 0; i < particles.length; i++) {
      var particle = particles[i];
      for (var j = 0; j < attractors.length; j++) {
        particle.attracted(attractors[j]);
      }
      particle.update();
      particle.show();
    }

  };
};

var mnewnewnewyp5 = new p5(s7, 'c1');

// Sketch Two
var t = function( p ) { 
  var x = 100.0; 
  var y = 100; 
  var speed = 2.5; 
  p.setup = function() {
    p.createCanvas(400, 200);
  };

  p.draw = function() {
    p.background(100);
    p.fill(1);
    x += speed; 
    if(x > p.width){
      x = 0; 
    }
    p.ellipse(x,y,50,50);

  };
};
var mynewnewp5 = new p5(t, 'c2');

