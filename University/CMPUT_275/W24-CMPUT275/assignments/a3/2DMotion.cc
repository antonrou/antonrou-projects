#include "2DMotion.h"
using namespace std;

// Predefined constant for pi, to be used if/when converting degrees
// to radians.
#define PI 3.14159265
Point::Point() :  x(0), y(0){} //credit to ChatGPT for syntax

Point::Point(double _x, double _y): x(_x), y(_y){} //credit to ChatGPT for syntax

int Point::quadrant(){
    if(x>0 && y>0){
        return 1;
    }
    else if(x>0 && y<0){
        return 4;
    }
    else if(x<0 && y>0){
        return 2;
    }
    else if(x<0 && y<0){
        return 3;
    }
    return -1;
}

istream& operator>>(istream& cin, Point& p){
  cin >> setprecision(2) >> fixed >> p.x >> p.y;
  return cin;
}

ostream& operator<<(ostream& cout, Point& p){
  cout<<fixed<<setprecision(2) <<"("<<p.x<<", "<<p.y<<")";
  return cout;
}


Force::Force() : angle(0), magnitude(0) {}//credit to ChatGPT for syntax
Force::Force(double _angle, double _magnitude) : angle(_angle), magnitude(_magnitude){}//credit to ChatGPT for syntax

//overload operators for Force
istream& operator>>(istream& cin, Force& f){
  cin>>f.angle>>f.magnitude;
  return cin;
}

ostream& operator<<(ostream& cout, Force& f){
  cout<<fixed << setprecision(2)<<f.angle<<" degrees with magnitude of "<< fixed << setprecision(2) << f.magnitude; //credit to ChatGPT for setprecision and fixed
  return cout;
}


//other overload operators
Point operator+(const Point& p, const Force& f){
  double thetaDegrees = f.angle;
  double thetaRadians = thetaDegrees*(PI) / 180.0;
  double c = f.magnitude; 
  double dy = (sin(thetaRadians)*c); 
  double dx = (cos(thetaRadians)*c);
  return Point(p.x + dx, p.y + dy);
}

Force operator*(const Force& f, double scalar){
  return Force(f.angle, f.magnitude*scalar);
}