n,m,k = list(map(int,input().split(" ")))
temps = sorted([int(x) for x in input().split()])

maxTemp, inOven, time = 0,0,0
for i in range(len(temps)):
    if(inOven == m or temps[i] > maxTemp):
        maxTemp = temps[i] + 2*k
        time +=1 
        inOven = 0
    inOven +=1
print(time)