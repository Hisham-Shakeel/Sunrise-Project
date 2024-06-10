// Drawing Basics

// Setup the canvas and the graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Store images in variables
let htmlLogoImg = document.getElementById("html-logo-img");

let x1 = 325;
let x2 = 375;
let frameCount = 0;

requestAnimationFrame(draw);
function draw() {
  // LOGIC
  x1--;
  x2++;

  // Reset animation if x1 < -99
  if (x1 < -99) {
    x1 = 325;
  }

  // Reset animation if x2 > 799
  if (x2 > 799) {
    x2 = 375;
  }

  // DRAWING
  // Let's draw some stuff using the graphics context (ctx)

  // Draw Rectangles

  // DRAW SKY
  ctx.lineWidth = 4;
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 800, 450);

  // CIRCLES / ARCS
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(400, 450, 30, 0, 2 * Math.PI); // Circle (0 to 2*PI) with center (250, 500) and radius 30
  ctx.fill();

  // DRAW Ground
  ctx.lineWidth = 4;
  ctx.fillStyle = "rgb(0, 163, 8)";
  ctx.fillRect(0, 450, 800, 450);

  // DRAW IMAGES
  ctx.drawImage(htmlLogoImg, x1, 225); // Draw image with top left corner of (x1, 225)
  ctx.drawImage(htmlLogoImg, x2, 200); // Draw image with top left corner of (x2, 200)

  // REQUEST ANIMATION FRAME
  requestAnimationFrame(draw);
}
