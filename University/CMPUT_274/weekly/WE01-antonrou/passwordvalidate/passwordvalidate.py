import random
import string
n = random.randint(8,100)

def containsDigit(p):
    return(any(chr.isdigit() for chr in p))

def containsUpper(p):
    return(any(chr.isupper() for chr in p))

def containsLower(p):
    return(any(chr.islower() for chr in p))

def containsSpecialChars(p):
    for char in p:
        if char in list("!-$%&'()*+,./:;<=>?_[]^`{|}~"):
            return True
        
def validate(p):
    if p.__contains__(" ") or p.__contains__("@") or p.__contains__("#") or len(p)<8:
        return("Invalid")
    elif containsDigit(p) and containsUpper(p) and containsLower(p) and containsSpecialChars(p):
        return("Secure")
    else:
        return("Insecure")

def generate(num):
    generatedPassword = ""
    for char in range(num):
        generatedPassword+=(random.choice(string.ascii_lowercase + string.ascii_uppercase + string.digits + "!-$%&'()*+,./:;<=>?_[]^`{|}~"))
    while validate(generatedPassword) != "Secure":
        for char in generatedPassword:
            char.replace(char,random.choice(string.ascii_lowercase + string.ascii_uppercase + string.digits + "!-$%&'()*+,./:;<=>?_[]^`{|}~"))
    return(generatedPassword)