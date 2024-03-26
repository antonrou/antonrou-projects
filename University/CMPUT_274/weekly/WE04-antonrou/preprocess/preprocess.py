import sys

"""
--------------------------------------------
Name: Anton Roupassov-Ruiz
SID: 1800957
CCID: roupasso
AnonID: 1000409647
CMPUT 274, Fall 2023
 
Assessment: Weekly Problem #4
--------------------------------------------

TEMPLATE: ADD YOUR INFORMATION TO ABOVE

You must determine how to structure your solution.
Create your functions here and call them from under
if __name__ == "__main__"!
"""

# Global List
Stop_Words = [
    "i", "me", "my", "myself", "we", "our",
    "ours", "ourselves", "you", "your",
    "yours", "yourself", "yourselves", "he",
    "him", "his", "himself", "she", "her",
    "hers", "herself", "it", "its", "itself",
    "they", "them", "their", "theirs",
    "themselves", "what", "which", "who",
    "whom", "this", "that", "these", "those",
    "am", "is", "are", "was", "were", "be",
    "been", "being", "have", "has", "had",
    "having", "do", "does", "did", "doing",
    "a", "an", "the", "and", "but", "if",
    "or", "because", "as", "until", "while",
    "of", "at", "by", "for", "with",
    "about", "against", "between", "into",
    "through", "during", "before", "after",
    "above", "below", "to", "from", "up",
    "down", "in", "out", "on", "off", "over",
    "under", "again", "further", "then",
    "once", "here", "there", "when", "where",
    "why", "how", "all", "any", "both",
    "each", "few", "more", "most", "other",
    "some", "such", "no", "nor", "not",
    "only", "own", "same", "so", "than",
    "too", "very", "s", "t", "can", "will",
    "just", "don", "should", "now"
    ]

if __name__ == "__main__":

    words = input().split()
    lowerWords = []
    updateWords = []
    finalWords = []

    if len(sys.argv)>1:
        if sys.argv[1] == "keep-stops":
            for word in words:
                lowerWords.append(word.lower())
            for word in lowerWords:
                newWord = ''
                for char in word:
                    if char.isalpha():
                        newWord += char
                if newWord != '':         
                    updateWords.append(newWord)
                else:
                    for char in word:
                        if char.isdigit():
                            newWord+= char
                    updateWords.append(newWord)

            finalString = ' '.join(updateWords)
            print(finalString.strip())
            exit()



    if len(sys.argv) == 1:
        for word in words:
            lowerWords.append(word.lower())
        for word in lowerWords:
            newWord = ''
            for char in word:
                if char.isalpha():
                    newWord += char
            if newWord != '':         
                updateWords.append(newWord)
                
            else:
                for char in word:
                    if char.isdigit():
                        newWord+= char
                updateWords.append(newWord)
    
    elif sys.argv[1] == "keep-digits":
        for word in words:
            lowerWords.append(word.lower())
        for word in lowerWords:
            newWord = ''
            for char in word:
                if char.isalpha() or char.isdigit():
                    newWord += char
            if newWord != '':         
                updateWords.append(newWord)
                
            else:
                for char in word:
                    if char.isdigit():
                        newWord+= char
                updateWords.append(newWord)
    
    elif sys.argv[1] == "keep-symbols":
        for word in words:
            lowerWords.append(word.lower())
        for word in lowerWords:
            newWord = ''
            for char in word:
                if not char.isdigit():
                    newWord += char
            if newWord != '':         
                updateWords.append(newWord)
            else:
                for char in word:
                    if char.isdigit():
                        newWord+= char
                updateWords.append(newWord)
             
    for word in updateWords:
        if word not in Stop_Words:
            finalWords.append(word)
    finalString = ' '.join(finalWords)
    print(finalString.strip())

