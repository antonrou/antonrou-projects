#include <stdio.h>
#include <stdlib.h>
#include <string.h>
const char * const GREEN = "\x1b[32m";
const char * const YELLOW = "\x1b[33m";
const char * const WHITE = "\x1b[0m";
const char * current = WHITE;

void setColour(const char *colour) {
  if (current == colour) return;
  printf("%s", colour);
  current = colour;
}

int input(char *argv[]){
  char word[13]; //initialize word array
  strcpy(word,argv[1]);
  if ((strlen(word)) > 12){
    printf("%s", "Code longer than 12 characters, invalid input\n");
    return -1;
  }
  int len = strlen(word); //number of characters in word
  int guessCounter = 0; //to track number of guesses
  char guess[13]; //to store user guess
  int green[13]; //to track whether each letter in each position should be green
  int correct = 1; //whether it is a right guess or not


  while (guessCounter != 6){
    int count[26] = {0};
    for (int i=0;i<len;i++){ //initialize green array
      green[i] = 0;
    }//for

    printf("Enter guess: ");
    scanf("%s", guess);
    correct = 1;
    if(strlen(guess) != strlen(word)){
      printf("%s","Invalid guess, guess length must match word length\n");
      return -1;
    }// if
    guessCounter++;

    for(int i=0;i<len;i++){
      count[word[i]-'a']++; //add each letter to count array
      if(word[i] == guess[i]){
        green[i] = 1;
      }
    }

    for (int i = 0; i < strlen(guess); i++){
      if (green[i] == 1){
        count[guess[i] - 'a']--; // One less available for yellow
        setColour(GREEN);
        printf("%c", guess[i]);
      } 
      else if (count[guess[i] - 'a'] > 0) {
        setColour(YELLOW);
        printf("%c", guess[i]);
        count[guess[i] - 'a']--;
      }
      else {
        setColour(WHITE);
        printf("%c", guess[i]);
          }
    }
    printf("\n");
    setColour(WHITE);
    for (int i = 0; i < len; i++){ //test for correct word
      if (guess[i] != word[i]){
        correct = 0;
        break;
      } 
    }
    if (correct){
      printf("Finished in %d guesses\n", guessCounter);
      return 0;
    }
  }
  printf("Failed to guess the word: %s\n", word);
  return -1;
}//input


int main( int argc, char *argv[] ){
  input(argv);
  return 0;
}