# your solution goes here
n = input()
accidentals = input()
flatcounter = 0
sharpcounter = 0
newstring = ''

if 1<=int(n)<=1e4:
    for char in accidentals:
        if char=='b':
            flatcounter+=1
        elif char=='#':
            sharpcounter+=1

    if(sharpcounter>flatcounter):
        sharps = sharpcounter-flatcounter
        newstring += sharps*'#'
    elif(flatcounter>sharpcounter):
        flats = flatcounter-sharpcounter
        newstring += flats*'b'
    else:
         newstring+='0'



print(newstring)
