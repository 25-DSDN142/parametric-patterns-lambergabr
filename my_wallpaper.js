//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;

  let x1 =-300 //-300
  let y1 = 25 //25

  let x2 = 100 //100
  let y2 = 0 //0

  let x3 = 100 //100
  let y3 = 200 //200

  let x4 = 500 //500
  let y4 = 175 //175

let Bubble = false;

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(24, 10, 10); //light yellow colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  //drawPlant();
function drawPlant(){

         // Draw BASE spine curve
  noFill();
  strokeWeight(150);
  stroke(40, 5, 5);
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

        // Draw 0 spine curve
  noFill();
  strokeWeight(125);
  stroke(87, 10, 10);
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

      // Draw 1 spine curve
  noFill();
  strokeWeight(100);
  stroke(150, 22, 22);
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

        // Draw 2 spine curve
  noFill();
  strokeWeight(75);
  stroke(241, 185, 158);
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

          // Draw 3 spine curve
  noFill();
  strokeWeight(50);
  stroke(249, 218, 185);
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

      // Draw 4 spine curve
  noFill();
  strokeWeight(25);
  stroke(255, 231, 191);
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

    // Draw 5 spine curve
  noFill();
  strokeWeight(5);
  stroke(251, 243, 220);
  curve(x1, y1, x2, y2, x3, y3, x4, y4);


  }

  if(Bubble == true) {
    fill(255);
    ellipse(100, 0, 25);
    ellipse(122, 25, 20);
    ellipse(120, 55, 15); 
  }

  drawSeed();
function drawSeed(){
  
  let c1 = 255
  let sizeCircle = 25

    //Base Gradient
    fill(243, 64, 51);
    stroke(243, 64, 51);
    ellipse(100, 25, sizeCircle*2);
    ellipse(125, 50, sizeCircle); //20
    ellipse(120, 80, sizeCircle+10); //15

      ellipse(100, 100, sizeCircle+5); //10

    ellipse(100, 175, sizeCircle+20); //25
    ellipse(75, 150, sizeCircle+15); //20
    ellipse(80, 120, sizeCircle+10); //15

  //5th Gradient
    fill(246, 108, 84);
    stroke(246, 108, 84);
    ellipse(100, 25, sizeCircle+20);
    ellipse(125, 50, sizeCircle+15); //20
    ellipse(120, 80, sizeCircle+10); //15

      ellipse(100, 100, sizeCircle+5); //10

    ellipse(100, 175, sizeCircle+20); //25
    ellipse(75, 150, sizeCircle+15); //20
    ellipse(80, 120, sizeCircle+10); //15

  //4th Gradient
    fill(248, 149, 106);
    stroke(248, 149, 106);
    ellipse(100, 25, sizeCircle+15);
    ellipse(125, 50, sizeCircle+10); //20
    ellipse(120, 80, sizeCircle+5); //15
  
  ellipse(100, 100, sizeCircle); //10

    ellipse(100, 175, sizeCircle+15); //25
    ellipse(75, 150, sizeCircle+10); //20
    ellipse(80, 120, sizeCircle+5); //15

//3rd Gradient
    fill(246, 189, 131);
    stroke(246, 189, 131);
    ellipse(100, 25, sizeCircle+10);
    ellipse(125, 50, sizeCircle+5); //20
    ellipse(120, 80, sizeCircle); //15
  
  ellipse(100, 100, sizeCircle-5); //10

    ellipse(100, 175, sizeCircle+10); //25
    ellipse(75, 150, sizeCircle+5); //20
    ellipse(80, 120, sizeCircle); //15

//2nd Gradient
    fill(253, 238, 182);
    stroke(253, 238, 182);
    ellipse(100, 25, sizeCircle+5);
    ellipse(125, 50, sizeCircle); //20
    ellipse(120, 80, sizeCircle-5); //15
  
  ellipse(100, 100, sizeCircle-10); //10

    ellipse(100, 175, sizeCircle+5); //25
    ellipse(75, 150, sizeCircle); //20
    ellipse(80, 120, sizeCircle-5); //15


//Light Source
    fill(c1);
    stroke(c1);
    ellipse(100, 25,sizeCircle); //25
    ellipse(125, 50, sizeCircle-5); //20
    ellipse(120, 80, sizeCircle-10); //15

   ellipse(100, 100, sizeCircle-15); //10

    ellipse(100, 175, sizeCircle); //25
    ellipse(75, 150, sizeCircle-5); //20
    ellipse(80, 120, sizeCircle-10); //15





 }
}
