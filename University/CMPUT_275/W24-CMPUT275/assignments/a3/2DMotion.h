//declarations 

#ifndef MOTION2D
#define MOTION2D
#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;

// Predefined constant for pi, to be used if/when converting degrees
// to radians.
#define PI 3.14159265

// Forward declation of Force. Needed in case any of Point references
// the existence of type Force.
class Force;

class Point {
    double x;
    double y;
  public:
  //constructor declarations
    Point(); 
    Point(double _x, double _y);
    // Required public interface here.
    friend istream& operator>>(istream& cin, Point& p); //credit to ChatGPT for syntax correctness
    friend ostream& operator<<(ostream& cout, Point& p);
    friend Point operator+(const Point& p, const Force& f);
    int quadrant();
};

class Force {
  double angle;
  double magnitude;
  public:
    //constructor declarations
    Force();
    Force(double _angle, double _magnitude);
    // Required public interface here.
    friend istream& operator>>(istream& cin, Force& f); //credit to ChatGPT for syntax
    friend ostream& operator<<(ostream& cout, Force& f);
    friend Point operator+(const Point& p, const Force& f);
    friend Force operator*(const Force& f, double scalar);
};

#endif