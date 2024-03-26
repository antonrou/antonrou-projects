# Good luck on this morning problem!
fourInputs = input()
location = input()
if len(fourInputs.split()) == 4:
    l,c,n,t = list(map(int,fourInputs.split(" ")))
    if(c==1):
        print(l)
    elif 1<=l<=1e6 and 1<c<=1e5 and 0<=n<=1e5 and 0<=t<=1e3 and 1<len(location.split())<l-1:
        stations = list(map(int,location.split(" ")))
        gasTime = 0
        currentPos=0
        stations.append(l)
        while currentPos<l:
            changed = False
            for j in range(1,len(stations)):
                if currentPos+c<stations[j]:
                    # print(f"moving from {currentPos} to {stations[j-1]}")
                    gasTime+=t
                    currentPos=stations[j-1]
                    changed = True
            if changed == False:
                break
        print(l+gasTime)