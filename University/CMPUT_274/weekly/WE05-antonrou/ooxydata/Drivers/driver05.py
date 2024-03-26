import math
from xydata import *

def main():
    s = XYData("Output/driver05")

    x = []
    y = []
    for i in range(1,100):
        x.append(i)
        y.append(math.log(i,2))

    s.x(x)
    s.y(y)
    s.plotpng()

if __name__ == "__main__":
    main()
