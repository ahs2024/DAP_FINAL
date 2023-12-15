class Sketch {
  constructor() {
    this.particles = [];
    this.repeller = null;
    this.numParticles = 20;
  }

  setup() {
    createCanvas(600, 400);
    this.repeller = new Repeller(width / 2, height / 3);

    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push(new Particle(width / 2, 0));
    }
  }

  draw() {
    background(255);
    this.repeller.display();

    for (let i = this.particles.length - 1; i >= 0; i--) {
      let gravity = createVector(0, 0.1);
      this.particles[i].applyForce(gravity);
      this.repeller.repel(this.particles[i]);
      this.particles[i].update();
      this.particles[i].display();
      if (this.particles[i].isOffScreen()) {
        this.particles.splice(i, 1);
      }
    }

    if (frameCount % 1 === 0) {
      for (let i = 0; i < this.numParticles; i++) {
        this.particles.push(new Particle(random(this.repeller.position.x - 7.5, this.repeller.position.x + 7.5), 0));
      }
    }
  }
}
let sketch = new Sketch();

function setup() {
  sketch.setup();
}

function draw() {
  sketch.draw();
}
