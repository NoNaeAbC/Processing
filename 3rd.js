var h = 200;
var y = 8;
var bool = false;

function setup() {
    createCanvas(390,400);
    background(0);
  }
  
  function draw() {
    
  }
  function mouseDragged(){
    background(0);
    stroke(255);
    var lx = 0;
    var ly = 200;
      for(var i = 0.0;i<400;i++){
          var nx = i;
          var ny = 0;
          if(bool){
            y = map(mouseY,0,400,4,10);
          }else{
            h = mouseY;
          }
          ny = sin((i/400)*y*PI)*(mouseX-200)+h;
        line(lx,ly,nx,ny);
        lx = nx;
        ly=ny;
      }
  }

  function keyTyped(){
    if (bool){
        bool = false;
        return;
    }  
    bool=true;
  }