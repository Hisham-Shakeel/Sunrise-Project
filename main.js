// Drawing Basics

// Setup the canvas and the graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Store images in variables
let htmlLogoImg = document.getElementById("html-logo-img");

// Let's draw some stuff using the graphics context (ctx)

// Draw Rectangles

// DRAW SKY
ctx.lineWidth = 4;
ctx.fillStyle = "blue";
ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(0, 600);
ctx.lineTo(800, 600);
ctx.lineTo(800, 0);
ctx.lineTo(0, 0);
ctx.fill();
ctx.stroke(); // Draw the specified path

// CIRCLES / ARCS
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(400, 450, 30, 0, 2 * Math.PI); // Circle (0 to 2*PI) with center (250, 500) and radius 30
ctx.fill();

// DRAW Ground
ctx.lineWidth = 4;
ctx.fillStyle = "rgb(0, 163, 8)";
ctx.strokeStyle = "rgb(0, 163, 8)";
ctx.beginPath();
ctx.moveTo(0, 450);
ctx.lineTo(0, 650);
ctx.lineTo(800, 650);
ctx.lineTo(800, 450);
ctx.lineTo(0, 450);
ctx.fill();
ctx.stroke(); // Draw the specified path

// DRAW IMAGES
ctx.drawImage(htmlLogoImg, 325, 225); // Draw image with top left corner of (325, 225)
ctx.drawImage(htmlLogoImg, 375, 200); // Draw image with top left corner of (375, 200)
