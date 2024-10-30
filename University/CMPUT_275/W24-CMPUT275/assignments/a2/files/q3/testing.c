
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void push(int **arr, int *len, int *cap, int val) {
    if (*len == *cap) {
        int *newArr = malloc(*cap*sizeof(int)*2);
        for (int i = 0; i < *len; i++){
            newArr[i] = (*arr)[i];
        }
        free(*arr);
        *cap = *cap*2;
        *arr = newArr;
    }
    (*arr)[*len] = val;
    ++*len;
}


void bubbleSort(int array[], int size) { //credit: https://www.programiz.com/dsa/bubble-sort

  // loop to access each array element
  for (int step = 0; step < size - 1; ++step) {
      
    // loop to compare array elements
    for (int i = 0; i < size - step - 1; ++i) {
      
      // compare two adjacent elements
      // change > to < to sort in descending order
      if (array[i] > array[i + 1]) {
        
        // swapping occurs if elements
        // are not in the intended order
        int temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
}

int printArray(int *array, int len){
    if (array == NULL){
        return 0;
    }
    bubbleSort(array, len);
    for (int i=0; i< len; i++){
        printf("%d ", array[i]);
    }//for
    printf("\n");
    return 1;
}

int removeElement(int**array, int*len, int valueToRemove){
    int i;
    for (i = 0; i<*len; i++){
        if((*array)[i] == valueToRemove){ //brackets around *array correctly dereferences the pointer to the array, and then accesses element i
            break;
        }
    }

    if(i == *len){
        return 0;
    }
    for (int j = i; j<= *len - 1; j++){ //shift array to fill hole
        (*array)[j] = (*array)[j+1];
    }
    (*len)--;
    return 1;
}





int existsInArray(int *array, int len, int element){
    for(int i=0; i < len; i++){
        if(array[i] == element){
            return 1; //element exists in array
        }
    }
    return 0; //elements does not exist in array
}


int arrayUnion(int *arrayX, int capX, int lenX, int *arrayY, int capY, int lenY){
    int *arrayU = malloc(4 * sizeof(int));
    int lenU = 0;
    int capU = 4;
    for (int i = 0; i < lenX; i++) {//add unique x elements to result array
        if (!existsInArray(arrayU, lenU, arrayX[i])) {
            push(&arrayU, &lenU,&capU,arrayX[i]);
        }
    }
    for (int i = 0; i < lenY; ++i) {//add unique y elements to result array
        if (!existsInArray(arrayU, lenU, arrayY[i])) {
            push(&arrayU, &lenU,&capU,arrayY[i]);
        }
    }
    printArray(arrayU,lenU);
    free(arrayU);
    return 0;
}

int arrayIntersect(int *arrayX, int capX, int lenX, int *arrayY, int capY, int lenY){

    int *arrayI = malloc(4 * sizeof(int)); // Allocate maximum possible size
    int lenI = 0;
    int capI = 4;

    for (int i = 0; i < lenX; ++i) {//add unique y elements to result array
        if (existsInArray(arrayY, lenY, arrayX[i]) && !existsInArray(arrayI, lenI, arrayI[i])) {
            push(&arrayI, &lenI,&capI,arrayX[i]);
        }
    }
    printArray(arrayI,lenI);
    free(arrayI);
    return 0;
}


#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void push(int **arr, int *len, int *cap, int val) {
    if (*len == *cap) {
        int *newArr = malloc(*cap*sizeof(int)*2);
        for (int i = 0; i < *len; i++){
            newArr[i] = (*arr)[i];
        }
        free(*arr);
        *cap = *cap*2;
        *arr = newArr;
    }
    (*arr)[*len] = val;
    ++*len;
}



int removeElement(int**array, int*len, int valueToRemove){
    int i;
    for (i = 0; i<*len; i++){
        if((*array)[i] == valueToRemove){ //brackets around *array correctly dereferences the pointer to the array, and then accesses element i
            break;
        }
    }

    if(i == *len){
        return 0;
    }
    for (int j = i; j<= *len - 1; j++){ //shift array to fill hole
        (*array)[j] = (*array)[j+1];
    }
    (*len)--;
    return 1;
}



void bubbleSort(int array[], int size) { //credit: https://www.programiz.com/dsa/bubble-sort

  // loop to access each array element
  for (int step = 0; step < size - 1; ++step) {
      
    // loop to compare array elements
    for (int i = 0; i < size - step - 1; ++i) {
      
      // compare two adjacent elements
      // change > to < to sort in descending order
      if (array[i] > array[i + 1]) {
        
        // swapping occurs if elements
        // are not in the intended order
        int temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
}

int printArray(int *array, int len){
    if (array == NULL){
        return 0;
    }
    bubbleSort(array, len);
    for (int i=0; i< len; i++){
        printf("%d ", array[i]);
    }//for
    printf("\n");
    return 1;
}


int existsInArray(int *array, int len, int element){
    for(int i=0; i < len; i++){
        if(array[i] == element){
            return 1; //element exists in array
        }
    }
    return 0; //elements does not exist in array
}

int arrayUnion(int *arrayX, int *capX, int *lenX, int *arrayY, int *capY, int *lenY){
    int *arrayU = malloc(4 * sizeof(int));
    int lenU = 0;
    int capU = 4;
    for (int i = 0; i < *lenX; i++) {//add unique x elements to result array
        if (!existsInArray(arrayU, lenU, arrayX[i])) {
            push(&arrayU, &lenU,&capU,arrayX[i]);
        }
    }
    for (int i = 0; i < *lenY; ++i) {//add unique y elements to result array
        if (!existsInArray(arrayU, lenU, arrayY[i])) {
            push(&arrayU, &lenU,&capU,arrayY[i]);
        }
    }
    printArray(arrayU,lenU);
    free(arrayU);
    return 0;
}

int arrayIntersect(int *arrayX, int *capX, int lenX, int *arrayY, int *capY, int lenY){

    int *arrayI = malloc(4 * sizeof(int)); // Allocate maximum possible size
    int lenI = 0;
    int capI = 4;

    for (int i = 0; i < lenX; ++i) {//add unique y elements to result array
        if (existsInArray(arrayY, lenY, arrayX[i]) && !existsInArray(arrayI, lenI, arrayI[i])) {
            push(&arrayI, &lenI,&capI,arrayX[i]);
        }
    }
    printArray(arrayI,lenI);
    free(arrayI);
    return 0;
}

int openRedirect(){
// Redirect stdin and stdout
    freopen("sample1.in", "r", stdin);
    freopen("sample1.temp", "w", stdout);
    return 0;

}

int closeRedirect(){
// Close files
    fclose(stdin);
    fclose(stdout);
    return 0;
}


#include <stdio.h>
#include <stdlib.h>

// Assuming functions like push, printArray, removeElement, arrayUnion, and arrayIntersect are defined elsewhere.

int main(void) {
    // Initialization of arrays...
    int *arrayX = malloc(4 * sizeof(int));
    int *arrayY = malloc(4 * sizeof(int));
    int lenX = 0, lenY = 0;
    int capX = 4, capY = 4;

    char command_str[2], set_str[2];
    int num;
    size_t bufferSize = 4;
    char *line = malloc(bufferSize);

    while (1) {
        size_t len = 0;
        int ch;
        while ((ch = fgetc(stdin)) != '\n' && ch != EOF) {
            if (len + 1 >= bufferSize) {
                bufferSize *= 2;
                char *newLine = realloc(line, bufferSize);
                if (!newLine) {
                    free(line); free(arrayX); free(arrayY);
                    perror("Failed to reallocate memory");
                    return EXIT_FAILURE;
                }
                line = newLine;
            }
            line[len++] = ch;
        }
        line[len] = '\0';
        
        // Handling EOF and 'q' command
        if (len == 0 && ch == EOF) break;
        if (line[0] == 'q') break;
        
        // Parsing and executing commands
        if (sscanf(line, " %1s %1s %d", command_str, set_str, &num) == 3) {
            char command = command_str[0];
            char set = set_str[0];
            switch (command){
                case 'a':
                    if (set == 'x'){
                        push(&arrayX,&lenX,&capX,num);
                    }
                    
                    else if (set == 'y'){
                        push(&arrayY,&lenY,&capY,num);
                    }
                    break;
                    
                case 'p':
                    if (set == 'x'){
                        printArray(arrayX,lenX);
                    }
                    else if (set == 'y'){
                        printArray(arrayY,lenY);
                    }
                    break;
                case 'r':
                    if (set == 'x'){
                        removeElement(&arrayX,&lenX,num);
                    }
                    
                    else if (set == 'y'){
                        removeElement(&arrayY,&lenY,num);
                    }
                    break;
                case 'u':
                    arrayUnion(arrayX, capX, lenX, arrayY, capY, lenY);
                    break;
                case 'i':
                    arrayIntersect(arrayX, capX, lenX, arrayY, capY, lenY);
                    break;
            }
        } else {
            fprintf(stderr, "Invalid command format.\n");
        }
    }
    
    // Cleanup and exit
    free(arrayX); free(arrayY); free(line);
    return 0;
}
