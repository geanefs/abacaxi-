var box1

function setup() 
{
  createCanvas(400, 400);

  box1 = new Box();

}

function draw() 
{
  background(220);

  box1.show();

  box1.set_speed(2);
  
}

