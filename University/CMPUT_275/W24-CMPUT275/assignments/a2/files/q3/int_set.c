#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void push(int **arr, int *len, int *cap, int val) {
    for (int i = 0; i < *len; i++) {
        if ((*arr)[i] == val) {
            return; // Element already exists, so return without adding
        }
    }
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
    if (len == 0){
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

int openRedirect(){
// Redirect stdin and stdout
    freopen("sample2.in", "r", stdin);
    freopen("sample2.temp", "w", stdout);
    return 0;

}

int closeRedirect(){
// Close files
    fclose(stdin);
    fclose(stdout);
    return 0;
}

int main(void){
    //openRedirect(); //comment out before submitting
    //initializing arrayx
    int *arrayX = malloc(4 * sizeof(int));
    int *arrayY = malloc(4 * sizeof(int));

    int lenX = 0, lenY = 0;
    int capX = 4, capY = 4;

    int num;
    char line[100];
    char command_str[2], set_str[2]; // Arrays to hold single character strings

    while(fgets(line,sizeof(line),stdin)){ //credit to ChatGPT, reads an entire line from stdin into line array. we specify max bytes to read at any point to prevent buffer overflow
        if(line[0] == 'q'){
            return 0;
        }//if
        sscanf(line, " %1s %1s %d", command_str, set_str, &num);//credit to ChatGPT for parsing logic. single character string will ignore whitespace.
        char command = command_str[0]; // Extracting the single characters from the strings
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
    }//while
    
    free(arrayX);
    free(arrayY);
   //closeRedirect(); //comment out before submitting 
}//main