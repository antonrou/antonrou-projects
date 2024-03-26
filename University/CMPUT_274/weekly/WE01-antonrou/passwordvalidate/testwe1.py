# Python Intro Labs covers import
from passwordvalidate import *

print("Should be invalid because too short ",validate("HACKING")) 
print("Should be invalid contains forbidden character ",validate("pop corN1!")) 
print("Should be insecure because does not contain uppercase lettering",validate("popcorn1!")) 
print("Should be insecure because does not contain lowercase lettering",validate("POPCORN1!")) 
print("Should be insecure because does not contain a digit",validate("Popcorn!"))
print("Should be insecure because does not contain a special character",validate("Popcorn1"))
print("Should be secure",validate("Passw0rd!"))
print("Should be insecure because does not contain uppercase characters or digits",validate("helloworld!"))
print("Should be secure",validate(generate(n)) )

# Add your own tests and calls to validate() and generate() here
