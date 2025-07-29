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
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(24, 10, 10); //light yellow colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

drawPlant();
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

    // Draw lightest curve
  noFill();
  strokeWeight(5);
  stroke(251, 243, 220);
  curve(x1, y1, x2, y2, x3, y3, x4, y4);


  }

  if(Bubble == true) {
    fill(255);
    ellipse(100, 0, 25);

  }
}
