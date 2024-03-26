from xydata import *

# Only output is a .png file
def main():
    s = XYData("Output/driver04")

    x = []
    y = []
    for i in range(1,20):
        x.append(i)
        y.append(i * i)

    s.x(x)
    s.y(y)
    s.plotpng()

if __name__ == "__main__":
    main()
