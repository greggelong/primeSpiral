let unit = 0.2; // unit of multiplying distance moving from origin for plotting not the same as r
let sz = 5; // size of the plot
let num =0;
let r;
let theta;
let mytext;
let maxp = 5000;

/*
in polar coordinates version the radius from center will be the 
same as y in the last one so 

r is num * unit

theta will be the number mod TWO_PI
*/

function setup() {
  createCanvas(windowWidth, windowHeight-50);
  background(0);
  //frameRate(20);
  //stroke(255);
  noStroke();
  mytext = createP("prime: ")
  for(let i = 0; i< 20; i++){
    print(i,isprime(i));
  }
}

function draw() {

  translate(width/2,height/2);
  // check for max and clear
  if (num > maxp){
      //saveCanvas("primeSprial###.png")
    	background(0);
    	num = 0;
      r=0;
    }

  // incriment num
	num=num+1

  // check if num is prime and plot it 
  if (isprime(num)){
    // stick prime in html
    mytext.html("prime: "+num);
    // set r and theta
    r = num * unit;
    theta = num%TWO_PI;
    // use sin and cos to translate to polar coordinates
  	y = r* sin(theta);
  	x = r* cos(theta);
    // plot x and y
  	fill(0,255,0);
  	ellipse(x,y*-1,sz,sz); // reverse y so it plots like math cartisian 
    //fill(255);
  	//text(num,x,y)
  	}
}



function isprime(n){
  if (n === 1 || n === 0){
    return false;


  }
  else if(n === 2){
    return true;


  }
  // if evenly divisible by any number from 2 up to squr root +1 f
  for(let i = 2; i < floor(sqrt(n))+1; i++){
      if (n%i === 0){
        return false;
        
      }
  

  }
  // passes above test retun true no need for an if statement
  return true


}