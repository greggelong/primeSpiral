# primeSpiral
a place to hold and show a live animated visualization in p5js of a spiral of prime numbers 

as seen on 3blue 1 brown 
and in the math stack exchange 

This version converts polar coordinates ( theta and a radius)  to Cartesian  coordinates.
I am plotting all (r,theta) (p,p)

I am using a multiplier for called ‘unit’ to for plotting.  
So you get r, radius, by multiplying the prime by r,
and you get the angle, theta, by getting that same prime mod TWO_PI

```javascript
r = num * unit;
theta = num%TWO_PI;
```
then you need to convert the ‘r’ and ‘theta’ into Cartesian coordinates using soh cah

```javascript  	
y = r* sin(theta);
x = r* cos(theta);
```
it is animated. And currently set to do the primes under 5000
but if you download it you can set the max higher or lower.
There is also a commented out line for saving a png when it reaches the max number

[see it live](https://greggelong.github.io/primeSpiral)

