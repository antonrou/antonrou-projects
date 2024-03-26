import matplotlib.pyplot as plt


Global_Sizes = []      # n, sizes
Global_Times = []    # sort times

def dataset2():
    global Global_Sizes, Global_Times
    Global_Sizes = [10000, 509500,1009000, 1508500, 2008000, 2507500, 3007000, 3506500, 4006000, 4505500, 5005000, 5504500, 6004000, 6503500, 7003000, 7502500, 8002000, 8501500, 9001000, 9500500]
    Global_Times = [5.99425000e-03, 2.97311744e-01, 5.94496467e-01, 8.86532257e-01, 1.18000910e+00, 1.47431614e+00, 1.77345538e+00, 2.06509776e+00, 2.38604912e+00, 2.63953003e+00, 2.93180440e+00, 3.23059822e+00, 3.52263580e+00, 5.63741545e+00, 4.48087202e+00, 4.43584023e+00, 5.18624465e+00, 9.04836966e+00, 5.32307112e+00, 5.61536189e+00]
    return



def test_plot():
    dataset2()

    x_data = Global_Sizes
    y_data = Global_Times

    plt.figure(figsize=(8, 4))
    plt.scatter(x_data, y_data, label="Output/driver03")
    plt.legend([" x "], loc="upper left")
    plt.savefig("Output/driver03_not_oo.png")


if __name__ == "__main__":
    test_plot()
