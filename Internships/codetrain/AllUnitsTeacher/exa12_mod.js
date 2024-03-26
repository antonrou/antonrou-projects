function setup() {
  let sketch = createCanvas(800, 600);
  sketch.parent("mycanvas");
  print("How do you tell if a number is odd or even?");
  print("Use MOD to find the remainder. MOD is the % sign");
  print( 123%2 );
  print ( 4%2 );
  print("Divide the class of 31 into groups of 4");
  print("Number of groups: " + floor( 31/4 ) ); 
  //floor round down
  print("Extra students: " + ( 31%4 ) )
}//end setup