"""
--------------------------------------------
Name: Anton Roupassov-Ruiz
SID: 1800957
CCID: roupasso
AnonID: 1000409647
CMPUT 274, Fall 2023
 
Assessment: Weekly Problem #3
--------------------------------------------

FREQ TEMPLATE: ADD YOUR INFORMATION TO ABOVE

You must determine how to structure your solution.
Create your functions here and call them from under
if __name__ == "__main__"!
"""
import sys

def errorHandle(commandArgs):
    if len(commandArgs) < 2 :
        print("Too few arguments. Usage: python3 freq.py <input file name>")
        return -1
    elif len(commandArgs) > 2 :
        print("Too many arguments. Usage: python3 freq.py <input file name>")
        return -1

def main(someFile):
    fileToBeRead = open(someFile,"r")
    fileToBeWrite = open(someFile+".out","w")
    fileSort = sorted(fileToBeRead.read().split())
    dictWords = {}
    for word in fileSort:
        if word not in dictWords.keys():
            dictWords[word] = 1
        elif word in dictWords.keys():
            dictWords[word]+=1
    for key, value in dictWords.items():
        fileToBeWrite.write(str(key) + " " + str(value) + " " + str(round(value/len(fileSort),3)) + "\n")
    fileToBeRead.close()
    fileToBeWrite.close()

def demo_command_line():
    # the first argument is the program name
    print(sys.argv[0])

    # so the filename is the second argument
    filename = sys.argv[1]
    print(filename)
    return(filename)

if __name__ == "__main__":
    if errorHandle(sys.argv) == -1:
        exit
    else:
        main(demo_command_line())