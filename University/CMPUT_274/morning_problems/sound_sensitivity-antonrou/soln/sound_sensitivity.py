# Good luck!
import math
input1 = input().split()
input2 = input().split()
input1int = []
input2int = []
for x in input2:
    input2int.append(int(x))
for x in input1:
    input1int.append(int(x))
factor = 100*input1int[1]//max(input2int)
print(factor)

