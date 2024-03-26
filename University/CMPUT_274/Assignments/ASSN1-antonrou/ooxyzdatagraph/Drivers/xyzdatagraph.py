# Copyright Paul Lu, 2023

import matplotlib.pyplot as xyzplt
import matplotlib.cm as cm
from xydata import *

class XYZDatagraph(XYData):
    def __init__(self,name=""):
        super().__init__(name)
        self.__x = []
        self.__y = []
        self.__z = []
    
    def __str__(self):
        s = "XYZData: " + self.name()
        return s
    
    def __repr__(self):
        s = "Id<"+ str(id(self)) + "> " + self.name()
        return s

    def dumplist(self):
        points = []
        for point in zip(self.x(),self.y(),self.z()):
            pointList = list(point)
            points.append(pointList)
        return points

    def dump(self):
        for xyz in self.dumplist():
            print(xyz)

    def swapxy(self):
        oldy = self.y()
        oldx = self.x()
        self.x(oldy)
        self.y(oldx)
        return

    def swapxz(self):
        oldx = self.x()
        oldz = self.z()
        self.x(oldz)
        self.z(oldx)
        return

    def swapyz(self):
        oldy = self.y()
        oldz = self.z()
        self.y(oldz)
        self.z(oldy)
        return

    def z(self,data=[]):
        # HINT: Borrow idea from Lecture 14 worksheet, polymorphism
                # HINT: Borrow idea from Lecture 14 worksheet, polymorphism
        if len(data) == 0:
            return(self.__z)
        elif type(data) is list:
            self.__z = data.copy()
            assert self.__z is not data, "Not copied"
            return(len(data))

        assert False, "Should not be here: z"

    # Expects list of 3-element [x,y,z] lists
    def xyz(self,data=[]):
        # HINT: Borrow idea from Lecture 14 worksheet, polymorphism
        if data is None:
            return self.dumplist()
        elif len(data) == 0:
            return self.dumplist()
        elif len(data) != 0:
            self.__x.clear()
            self.__y.clear()
            self.__z.clear()
            x_values = []
            y_values = []
            z_values = []
            for point in data:
                x_values.append(point[0])
                y_values.append(point[1])
                z_values.append(point[2])
            self.x(x_values)
            self.y(y_values)
            self.z(z_values)
            return None

    def plot3dpng(self):
        fig = xyplt.figure()
        ax = fig.add_subplot(projection='3d')

        sc = ax.scatter(self.x(), self.y(), self.z(), c=self.z(), cmap=cm.turbo)
        fig.colorbar(sc, pad=0.2)

        ax.set_xlabel('Fingerprint Size (bytes)')
        ax.set_ylabel('Min Chunk Size (bytes)')
        ax.set_zlabel('Deduplication Ratio')
        ax.set_title('Deduplication Ratio vs.\nFingerprint Size and Min Chunk Size')

        xyplt.savefig(self.name() + ".png")