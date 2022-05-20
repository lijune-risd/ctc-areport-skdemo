
const s4 = ( sketch ) => {

  var attractors = [];
  var particles = [];
  let x = 100;
  let y = 100;
  var canvas;

  sketch.preload = () => {
    font = loadFont('assets/fonts/GothamNarrow-Medium.otf');
  };

  sketch.mousePressed = () => {
    sketch.attractors.push(createVector(mouseX, mouseY));
  };

  sketch.setup = () => {
    sketch.createCanvas(200, 200);
  };

  sketch.draw = () => {
    sketch.background(138, 127, 96);
    sketch.stroke(255);
    sketch.strokeWeight(4);
    sketch.particles.push(new Particle(random(width), random(height)));

    if (particles.length > 100) {
      particles.splice(0, 1);
    }

    for (var i = 0; i < attractors.length; i++) {
      sketch.stroke(0, 255, 0);
      sketch.point(attractors[i].x, attractors[i].y);
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

let mnewestyp5 = new p5(s4, 'p5sketch2');

