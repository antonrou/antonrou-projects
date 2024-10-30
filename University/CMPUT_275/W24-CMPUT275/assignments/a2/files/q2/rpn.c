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

int operation(int lastOperand, int secondlastOperand , char operator){
    int result = -1;
    if (operator == 'p'){
        result = lastOperand+secondlastOperand;
    }
    else if (operator == 's'){
        result = secondlastOperand-lastOperand;
    }
    else if (operator == '*'){
        result = lastOperand*secondlastOperand;
    }
    else if (operator == '/'){
        result = secondlastOperand/lastOperand;
    }
    return result;
}

int openRedirect(){
// Redirect stdin and stdout
    freopen("test2.in", "r", stdin);
    freopen("test2.temp", "w", stdout);
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
    int cap = 4;
    int *array = (int *)malloc(cap * sizeof(int));
    int len = 0;
    int c;
    int lastOperand;
    int secondlastOperand;

    while (( c = getchar()) != '\n' && c != EOF){
        if(c>= '0' && c <= '9'){
            push(&array,&len,&cap,c-'0');
        }
        else if (c == 'p' || c == 's'){
            lastOperand = pop(&array, &len);
            secondlastOperand = pop(&array, &len);
            push(&array,&len,&cap,(operation(lastOperand,secondlastOperand,c)));
        }
        else if (c == '*'){
            lastOperand = pop(&array, &len);
            secondlastOperand = pop(&array, &len);
            push(&array,&len,&cap,(operation(lastOperand,secondlastOperand,'*')));

        }
        else if (c == '/'){
            lastOperand = pop(&array, &len);
            secondlastOperand = pop(&array, &len);
            push(&array,&len,&cap,(operation(lastOperand,secondlastOperand,'/')));

        }

    }

    if (len == 1){
        printf("%d\n", pop(&array,&len));
    }
    free(array);
    //closeRedirect(); //comment out before submitting
    return 0;
}