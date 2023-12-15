class Repeller {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.width = 30; // 가로 길이 변경
    this.height = 30; // 세로 길이 변경
  }

  repel(particle) {
    let repelForce = p5.Vector.sub(this.position, particle.position);
    let distance = repelForce.mag();
    distance = constrain(distance, 1, 100);
    repelForce.normalize();
    let strength = -10 / (distance * distance);
    repelForce.mult(strength);
    particle.applyForce(repelForce);
  }

  display() {
    noStroke();
    fill(255, 255, 255);
    rectMode(CENTER);
    rect(this.position.x, this.position.y, this.width, this.height);
  }
}
