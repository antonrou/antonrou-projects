from xydata import *

def dataset(theData):
    theData.x([ 10000, 2008000, 4006000, 6004000, 8002000])
    theData.y([1.27140600e-03, 5.20538407e-01, 1.19766300e+00, 1.93259895e+00, 2.68934450e+00])
    return

# Only output is a .png file
def main():
    s = XYData("Output/driver02")

    dataset(s)

    s.plotpng()

if __name__ == "__main__":
    main()
