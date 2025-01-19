// Aleiah Tzintzun
// atzintzu@ucsc.edu

// DrawRectangle.js
function main() {
    // Retrieve <canvas> element                                  <- (1)
    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
    return;
    }

// Get the rendering context for 2DCG                          <- (2)
ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);

}

function drawVector(v,color) {
    // Draw line in the middle
    console.log(v.elements[0]);
    console.log(v.elements[1]);
    ctx.beginPath(); 
    ctx.moveTo(200, 200); 
    ctx.lineTo(200+v.elements[0]*20, 200-v.elements[1]*20); 
    ctx.strokeStyle = color;
    ctx.stroke(); 
}

function handleDrawEvent() {
    // Clear canvas
    ctx.clearRect(0, 0, 400, 400);
    // Restore black background: 
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 400, 400);

    // Read the values of the text boxes to create v1.
    let v1X = parseFloat(document.getElementById('xCoorV1').value);
    let v1Y = parseFloat(document.getElementById('yCoorV1').value);

    // Check if both afre valid numbers
    if (isNaN(v1X) || isNaN(v1Y)) {
        console.log('Invalid input: Please enter numeric values for the v1 coordinates.');
        return;
    }

    let v1 = new Vector3();
    v1.elements[0] = v1X;
    v1.elements[1] = v1Y;
    v1.elements[2] = 0;
    // Call drawVector(v1, "red") .
    drawVector(v1, "red");

    // Read the values of the text boxes to create v2.
    let v2X = parseFloat(document.getElementById('xCoorV2').value);
    let v2Y = parseFloat(document.getElementById('yCoorV2').value);

    // Check if values are valid numbers
    if (isNaN(v2X) || isNaN(v2Y)) {
        console.log('Invalid input: Please enter numeric values for the v2 coordinates.');
        return;
    }

    let v2 = new Vector3();
    v2.elements[0] = v2X;
    v2.elements[1] = v2Y;
    v2.elements[2] = 0;
    // Call drawVector(v2, "blue") .
    drawVector(v2, "blue");
  
}

function handleDrawOperationEvent() {
    // Clear canvas
    ctx.clearRect(0, 0, 400, 400);
    // Restore black background: 
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 400, 400);

   // Read the values of the text boxes to create v1.
   let v1X = parseFloat(document.getElementById('xCoorV1').value);
   let v1Y = parseFloat(document.getElementById('yCoorV1').value);

   // Check if both afre valid numbers
   if (isNaN(v1X) || isNaN(v1Y)) {
       console.log('Invalid input: Please enter numeric values for the v1 coordinates.');
       return;
   }
   
   // Create vector v1
   let v1 = new Vector3();
   v1.elements[0] = v1X;
   v1.elements[1] = v1Y;
   v1.elements[2] = 0; 
    // Call drawVector(v1, "red") .
    drawVector(v1, "red");

  // Read the values of the text boxes to create v2.
  let v2X = parseFloat(document.getElementById('xCoorV2').value);
  let v2Y = parseFloat(document.getElementById('yCoorV2').value);

  // Check if values are valid numbers
  if (isNaN(v2X) || isNaN(v2Y)) {
      console.log('Invalid input: Please enter numeric values for the v2 coordinates.');
      return;
  }

  // Create vector v2
  let v2 = new Vector3();
  v2.elements[0] = v2X;
  v2.elements[1] = v2Y;
  v2.elements[2] = 0;
  // Call drawVector(v2, "blue") .
  drawVector(v2, "blue"); 

  // Read value of selector
  let select = document.getElementById("Operation");
  let opt = select.value;

  // Create new vector v3
  let v3 = new Vector3();

  if(opt == 'Add') {
    console.log("made it in");
    v3.add(v1);
    v3.add(v2);
    // Now that we have our new vector, lets draw it
    drawVector(v3, "green");
    console.log("finished drawing");
  }

  if(opt == 'Subtract') {
    v3.add(v1);
    v3.sub(v2);
    // Now that we have our new vector, lets draw it
    drawVector(v3, "green");
  }

  // Create new vector, v4
  let v4 = new Vector3;


  if(opt == 'Multiply') {
    // Read Scalar 
    let scalar = parseFloat(document.getElementById('ScalarNum').value);
    console.log("scalar: " + scalar)
    // Fill in new vectors with old ones
    v3.add(v1);
    v4.add(v2);
    // Do the scalar mult
    v3.mul(scalar);
    v4.mul(scalar);
    console.log(v3);
    console.log(v4);
    // Now that we have our new vectors, lets draw them
    drawVector(v3, "green");
    drawVector(v4, "green");
  }
  if(opt == 'Divide') {
    // Read Scalar 
    let scalar = parseFloat(document.getElementById('ScalarNum').value);
    // Fill in new vectors with old ones
    v3.add(v1);
    v4.add(v2);
    // Do the scalar div
    v3.div(scalar);
    v4.div(scalar);
    // Now that we have our new vectors, lets draw them
    drawVector(v3, "green");
    drawVector(v4, "green");
  }

  if(opt == "Magnitude") {
    let m1 = v1.magnitude();
    let m2 = v2.magnitude();
    console.log("Magnitude v1: " + m1);
    console.log("Magnitude v1: " + m2);
  }

  if(opt == 'Normalize') {
    v1.normalize();
    v2.normalize();
    drawVector(v1, "green");
    drawVector(v2, "green");
  }

  if(opt == "Angle Between") {
    angleBetween(v1, v2);
  }

  if(opt == 'Area') {
    areaTriangle(v1, v2);
  }
}

function angleBetween(v1, v2) {
    let d = Vector3.dot(v1, v2);
    let m1 = v1.magnitude();
    let m2 = v2.magnitude();
    let cosTheta = d/(m1*m2);
    console.log("Angle: " + Math.acos(cosTheta)*180/Math.PI);
}

function areaTriangle(v1, v2) {
    let crossV = Vector3.cross(v1, v2);
    let area = crossV.magnitude()/2.0;
    console.log("Area of the triangle: " + area);
}
