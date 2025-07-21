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

 var threadWidth = 25 //25
 var threadHeight = 100 //100

fill(234, 200, 137); //faded yellow

//Vertical Thread

    // Start drawing the shape. 
  beginShape();
    // Add vertices.
  vertex(threadWidth,0);
  vertex(threadWidth,threadHeight*2);
  vertex(threadWidth*2,threadHeight*2);
  vertex(threadWidth*2, 0);
    // Stop drawing the shape.
  endShape(CLOSE);

      // Start drawing the shape. 2nd Thread Vertical
  beginShape();
    // Add vertices.
  vertex(threadWidth*2,0);
  vertex(threadWidth*2,threadHeight*2);
  vertex(threadWidth*3,threadHeight*2);
  vertex(threadWidth*3, 0);
    // Stop drawing the shape.
  endShape(CLOSE);

//Horizontal Threads
        // Start drawing the shape. 3rd Thread Horizontal
  beginShape();
    // Add vertices.
  vertex(threadWidth*0,threadHeight/2);
  vertex(threadWidth*0,threadHeight-25);
  vertex(threadWidth+175,threadHeight-25);
  vertex(threadWidth+175, threadHeight/2);
    // Stop drawing the shape.
  endShape(CLOSE);

          // Start drawing the shape. 4th Thread Horizontal
  beginShape();
    // Add vertices.
  vertex(threadWidth*0,threadHeight-25);
  vertex(threadWidth*0,threadHeight);
  vertex(threadWidth+175,threadHeight);
  vertex(threadWidth+175, threadHeight-25);
    // Stop drawing the shape.
  endShape(CLOSE);

}
