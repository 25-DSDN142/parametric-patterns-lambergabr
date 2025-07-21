//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(255, 233, 182); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  rect(40 ,40, rect_width, rect_height);

DrawGatt();

}

function DrawGatt(){

  var leftearX = 30;
  var leftearY = 20

  var rightearX = 65;
  var rightearY = 85;

  strokeWeight(3);
  stroke(0);
  fill(255);

   // Start drawing the shape.
beginShape();

  // Add vertices.

  //left ear
  vertex(leftearX, leftearY);//tip of left ear // (30,20) before
  vertex(leftearX +20, leftearY+20); //left head

  //right ear
  vertex(rightearX, 40); //right head
  vertex(rightearX+20, rightearY-65);//tip of right ear

  //right hand 
  vertex(rightearX+20, rightearY-35); //armpit
  vertex(rightearX+32, rightearY-20); // hand
  vertex(rightearX+20,rightearY-25); //shoulder

  //right foot
  vertex(rightearX+20, rightearY+15); //right foot
  vertex(rightearX,rightearY); //right crotch

  //left foot
  vertex(leftearX +20 ,leftearY+65); // crotch
  vertex(leftearX, leftearY+80); // foot

  //tail
  vertex(leftearX, leftearY+70);
  vertex(leftearX -10, leftearY+70);
  vertex(leftearX, leftearY+65)

  //left hand
  vertex(leftearX, leftearY+30); //arm pit
  vertex(leftearX-13,leftearY+45); // hand
  vertex(leftearX, leftearY+40); //shoulder

  // Stop drawing the shape.
endShape(CLOSE);

//eyes
  stroke(0)
  strokeWeight(1);
  fill(255);
  ellipse(leftearX +15, leftearY +30, 3, 3); //left eye
  ellipse(rightearX+5, rightearY -35, 3,3); //right eye

//mouth
 strokeWeight(1);
 stroke(0);
  line(leftearX+20, leftearY +30, rightearX, rightearY-35);

}
