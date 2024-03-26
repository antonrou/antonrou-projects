#Unfair Dice
import random

def biased_rolls(prob_list, s, n):
    random.seed(s)
    iterations = 0
    rolls = []
    while iterations<n:
        flip = random.random()
        counter=prob_list[0]
        if 0.0<=flip<prob_list[0]:
            rolls.append(1)
        for i in range(1,len(prob_list)-1):
            if(counter <= flip < (counter+prob_list[i]) ):
                rolls.append(i+1)
            counter+=prob_list[i]
        if counter<=flip<1.0:
            rolls.append(len(prob_list))
        counter = 0
        iterations+=1
    return rolls

def draw_histogram (m, rolls, width):
    myNums = {}
    myMax = []
    for num in range (1,m+1):
       myNums[num] = rolls.count(num)   
    for num in myNums:
        myMax.append(myNums[num])
    maxNum = max(myMax)
    if width>0:
        scalingFactor = maxNum/width
    print(f"Frequency Histogram: {m}-sided Die")
    if width>0:
        for num in myNums:
            dashNum = round(width-myNums[num]/scalingFactor)*"-"
            hashNum = round(myNums[num]/scalingFactor)*"#"
            print(f"{num}.{hashNum}{dashNum}")
    else:
        for num in myNums:
            print(f"{num}.")

if __name__ == "__main__":
    pass
