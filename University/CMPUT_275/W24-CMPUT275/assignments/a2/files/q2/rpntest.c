#include <stdio.h>
#include <stdlib.h>
#include <string.h>


void push(int **array, int *len, int *cap, int element) {
    if (*len == *cap) {
        int newCap = *cap * 2;
        int *newArray = realloc(*array, sizeof(int) * newCap);
        *array = newArray;
        *cap = newCap; // Update the capacity
    }
    (*array)[*len] = element;
    (*len)++;
}


int pop(int**array, int*len){
    int poppedValue;
    if(*len > 0){
        poppedValue = (*array)[*len-1]; //credit to ChatGPT for syntax help
        (*len)--;
    }
    return poppedValue;
}

int main(void){
    int cap = 4;
    int *array = (int *)malloc(cap * sizeof(int));
    int len = 4;
    int toPush = 5;

    for (int i=0; i<len; i++) {
        array[i] = i;
    }
    push(&array,&len,&cap,toPush);
    pop(&array,&len);

    for(int i=0; i<len;i++){
        printf("%d",array[i]);
    }
    printf("\n");
    return 0;
}