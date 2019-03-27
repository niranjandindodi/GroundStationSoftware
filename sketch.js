let angleX = 0;
let angleY = 0;
let Width = 600;
let Height = 600;

let fov = 0;
let cameraZ = 0;
let offset = 0;
let near_clip = cameraZ;
let fullScene = true;

let satWidth = 100;
let satHeight = 200;

let top_image, side_image, PCB_image, torquer_image, interior_image;

function mousePressed() {
  if (mouseButton == RIGHT) {
    if (fullScene) {
      fullScene = false;
      offset = 0;
      setPerspective(fov);
    } else {
      fullScene = true;
      offset = 0;
      setPerspective(fov);
    }
  }
}

function mouseDragged() {
  let diffX = 0;
  diffX = pmouseX - mouseX;
  let diffY = 0;
  diffY = pmouseY - mouseY;
  if(diffY != 0) {
    angleX += diffY * 0.01;
  }
  if(diffX != 0) {
    angleY += diffX * 0.01;
  }
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    near_clip += 0.1;
    setPerspective(fov - 0.02);
  } else if (keyCode == DOWN_ARROW) {
    setPerspective(fov + 0.02);
  }
}

function mouseWheel(event) {
  if(!fullScene)
 		offset -= event.delta * 0.1;
  setPerspective(fov);
}

function shineLight() {
  ambientLight(255);
}

function setPerspective(FOV) {
  fov = FOV;
  cameraZ = (Height / 2) / tan(PI / 6);
  if (fullScene) {
    perspective(fov, Width / Height, cameraZ / 10, cameraZ * 10);
  } else {
    perspective(fov, Width / Height, cameraZ - offset, cameraZ * 10);
  }
}

function setRotation() {
  if (fullScene) {
    rotateX(angleX);
    rotateY(-angleY);
  } else {
    rotateX(angleX);
    rotateY(-angleY);
  }
}

function drawSat_out() {
  // Top plate (outer)
  beginShape();
    push();
      texture(top_image);
      vertex(satWidth / 2, satHeight / 2, satWidth / 2, 0, 0);
      vertex(satWidth / 2, satHeight / 2, -satWidth / 2, 1, 0);
      vertex(-satWidth / 2, satHeight / 2, -satWidth / 2, 1, 1);
      vertex(-satWidth / 2, satHeight / 2, satWidth / 2, 0, 1);
    pop();
  endShape(CLOSE);

  // Bottom plate (outer)
  beginShape();
    push();
      texture(top_image);
      vertex(satWidth / 2, -satHeight / 2, satWidth / 2, 0, 0);
      vertex(satWidth / 2, -satHeight / 2, -satWidth / 2, 1, 0);
      vertex(-satWidth / 2, -satHeight / 2, -satWidth / 2, 1, 1);
      vertex(-satWidth / 2, -satHeight / 2, satWidth / 2, 0, 1);
    pop();
  endShape(CLOSE);

  // Side panels
  // Left panel (outer)
  beginShape();
    push();
      texture(side_image);
      vertex(satWidth / 2, satHeight / 2, satWidth / 2, 0, 1);
      vertex(satWidth / 2, satHeight / 2, -satWidth / 2, 0, 0);
      vertex(satWidth / 2, -satHeight / 2, -satWidth / 2, 1, 0);
      vertex(satWidth / 2, -satHeight / 2, satWidth / 2, 1, 1);
    pop();
  endShape(CLOSE);

  // Back panel (outer)
  beginShape();
    push();
      texture(side_image);
      vertex(satWidth / 2, satHeight / 2, -satWidth / 2, 0, 1);
      vertex(-satWidth / 2, satHeight / 2, -satWidth / 2, 0, 0);
      vertex(-satWidth / 2, -satHeight / 2, -satWidth / 2, 1, 0);
      vertex(satWidth / 2, -satHeight / 2, -satWidth / 2, 1, 1);
    pop();
  endShape(CLOSE);

  // Right Panel (outer)
  beginShape();
    push();
      texture(side_image);
      vertex(-satWidth / 2, satHeight / 2, -satWidth / 2, 0, 1);
      vertex(-satWidth / 2, satHeight / 2, satWidth / 2, 0, 0);
      vertex(-satWidth / 2, -satHeight / 2, satWidth / 2, 1, 0);
      vertex(-satWidth / 2, -satHeight / 2, -satWidth / 2, 1, 1);
    pop();
  endShape(CLOSE);

  // Front Panel (outer)
  beginShape();
    push();
      texture(side_image);
      vertex(satWidth / 2, satHeight / 2, satWidth / 2, 0, 1);
      vertex(-satWidth / 2, satHeight / 2, satWidth / 2, 0, 0);
      vertex(-satWidth / 2, -satHeight / 2, satWidth / 2, 1, 0);
      vertex(satWidth / 2, -satHeight / 2, satWidth / 2, 1, 1);
    pop();
  endShape(CLOSE);
}

function drawSat_in() {
  // Top plate (inner)
  beginShape();
    push();
      texture(interior_image);
      vertex(satWidth/2, satHeight/2 - 0.1, satWidth/2, 0, 0);
      vertex(satWidth/2, satHeight/2 - 0.1, -satWidth/2, 1, 0);
      vertex(-satWidth/2, satHeight/2 - 0.1, -satWidth/2, 1, 1);
      vertex(-satWidth/2, satHeight/2 - 0.1, satWidth/2, 0, 1);
    pop();
  endShape(CLOSE);

  // Bottom plate (inner)
  beginShape();
    push();
      texture(interior_image);
      vertex(satWidth/2, -satHeight/2 + 0.1, satWidth/2, 0, 0);
      vertex(satWidth/2, -satHeight/2 + 0.1, -satWidth/2, 1, 0);
      vertex(-satWidth/2, -satHeight/2 + 0.1, -satWidth/2, 1, 1);
      vertex(-satWidth/2, -satHeight/2 + 0.1, satWidth/2, 0, 1);
    pop();
  endShape(CLOSE);

  // Side panels
  // Left panel (inner)
  beginShape();
    push();
      texture(interior_image);
      vertex(satWidth/2 - 0.1, satHeight/2, satWidth/2, 0, 0);
      vertex(satWidth/2 - 0.1, satHeight/2, -satWidth/2, 1, 0);
      vertex(satWidth/2 - 0.1, -satHeight/2, -satWidth/2, 1, 1);
      vertex(satWidth/2 - 0.1, -satHeight/2, satWidth/2, 0, 1);
    pop();
  endShape(CLOSE);

  // Back panel (inner)
  beginShape();
    push();
      texture(interior_image);
      vertex(satWidth/2, satHeight/2, -satWidth/2 + 0.1, 0, 0);
      vertex(-satWidth/2, satHeight/2, -satWidth/2 + 0.1, 1, 0);
      vertex(-satWidth/2, -satHeight/2, -satWidth/2 + 0.1, 1, 1);
      vertex(satWidth/2, -satHeight/2, -satWidth/2 + 0.1, 0, 1);
    pop();
  endShape(CLOSE);

  // Right Panel (inner)
  beginShape();
    push();
      texture(interior_image);
      vertex(-satWidth/2 + 0.1, satHeight/2, -satWidth/2, 0, 0);
      vertex(-satWidth/2 + 0.1, satHeight/2, satWidth/2, 1, 0);
      vertex(-satWidth/2 + 0.1, -satHeight/2, satWidth/2, 1, 1);
      vertex(-satWidth/2 + 0.1, -satHeight/2, -satWidth/2, 0, 1);
    pop();
  endShape(CLOSE);

  // Front Panel (inner)
  beginShape();
    push();
      texture(interior_image);
      vertex(satWidth/2, satHeight/2, satWidth/2 - 0.1, 0, 0);
      vertex(-satWidth/2, satHeight/2, satWidth/2 - 0.1, 1, 0);
      vertex(-satWidth/2, -satHeight/2, satWidth/2 - 0.1, 1, 1);
      vertex(satWidth/2, -satHeight/2, satWidth/2 - 0.1, 0, 1);
    pop();
  endShape(CLOSE);

}

function draw_internal_components() {
  // TT&C PCB
  beginShape();
    push();
      texture(PCB_image);
      vertex(50, -80, 50, 0, 0);
      vertex(50, -80, -50, 1, 0);
      vertex(-50, -80, -50, 1, 1);
      vertex(-50, -80, 50, 0, 1);
    pop();
  endShape(CLOSE);

  // ECL PCB
  beginShape();
    push();
    	texture(PCB_image);
      vertex(50, -70, 50, 1, 0);
      vertex(50, -70, -50, 1, 1);
      vertex(-50, -70, -50, 0, 1);
      vertex(-50, -70, 50, 0, 0);
    pop();
  endShape(CLOSE);

	// EPS PCB
  beginShape();
    push();
      texture(PCB_image);
      vertex(50, -60, 50, 1, 1);
      vertex(50, -60, -50, 0, 1);
      vertex(-50, -60, -50, 0, 0);
      vertex(-50, -60, 50, 1, 0);
    pop();
  endShape(CLOSE);

  // Misc Sensors
  // Magnetorquer
  beginShape();
    texture(torquer_image);
    noStroke();

    let cyl_rad = 8;
    let cyl_height = satHeight / 2 - 40;

    push();
    translate(satWidth / 2 - cyl_rad, -(cyl_height / 2 - 0.1), satWidth / 2 - cyl_rad);
    cylinder(cyl_rad, cyl_height);
    pop();
    push();
    translate(satWidth / 2 - cyl_rad, -(cyl_height - cyl_rad), satWidth/2 - cyl_height/2 - 0.1);
    rotateX(PI/2);
    cylinder(cyl_rad, cyl_height);
    pop();
    push();
    translate(satWidth/2 - cyl_height/2 - 0.1, -(cyl_height - cyl_rad), satWidth / 2 - cyl_rad);
    rotateZ(PI/2);
    cylinder(cyl_rad, cyl_height);
    pop();
  endShape(CLOSE);

  // Payload Partition
  beginShape();
    ambientMaterial(50, 50, 50);
  	let payload_width = 20;
  	let payload_height = satHeight/2 - 10;
  	let offset_posX = 35;
  	let offset_posY = payload_height/2 + 5;
  	push();
  		translate(offset_posX, offset_posY, 0);
  		box(payload_width, payload_height, payload_width);
    pop();
  	push();
  		translate(offset_posX * cos(PI/3), offset_posY, offset_posX * sin(PI/3));
  		rotateY(-PI/3);
  		box(payload_width, payload_height, payload_width);
    pop();
  	push();
  		translate(offset_posX * cos(2 * PI/3), offset_posY, offset_posX * sin(2 * PI/3));
  		rotateY(-2 * PI/3);
  		box(payload_width, payload_height, payload_width);
    pop();
  	push();
  		translate(-offset_posX, offset_posY, 0);
  		box(payload_width, payload_height, payload_width);
    pop();
  	push();
  		translate(-offset_posX * cos(PI/3), offset_posY, -offset_posX * sin(PI/3));
  		rotateY(-PI/3);
  		box(payload_width, payload_height, payload_width);
    pop();
  	push();
  		translate(-offset_posX * cos(2 * PI/3), offset_posY, -offset_posX * sin(2 * PI/3));
  		rotateY(-2 * PI/3);
  		box(payload_width, payload_height, payload_width);
    pop();
  endShape(CLOSE);

}

function draw_sat() {
  if (fullScene) {
    drawSat_out();
  } else {
    draw_internal_components();
    drawSat_in();
    drawSat_out();
  }
}

function preload() {
  top_image = loadImage("/usr/local/bin/myfirstapp/img/top.jpg");
  side_image = loadImage("/usr/local/bin/myfirstapp/img/side.jpg");
  PCB_image = loadImage("/usr/local/bin/myfirstapp/img/PCB 2.jpg");
  torquer_image = loadImage("/usr/local/bin/myfirstapp/img/copper 2.jpg");
  interior_image = loadImage("/usr/local/bin/myfirstapp/img/capton 2.jpg");
}

function setup() {
  createCanvas(Width, Height, WEBGL);
  shineLight();
  setPerspective(PI / 6);
}

function draw() {
  background(40);

  setRotation();

  draw_sat();
}
