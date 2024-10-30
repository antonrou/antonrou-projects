#include <stdio.h>
#include <stdlib.h>

void push(int **array, int *len, int *cap, int element) {
    if (*len == *cap) {
        int newCap = *cap * 2;
        int *newArray = realloc(*array, sizeof(int) * newCap);
        if (!newArray) {
            fprintf(stderr, "Memory allocation failed.\n");
            free(*array); // Free the original array to prevent memory leak
            exit(EXIT_FAILURE);
        }
        *array = newArray;
        *cap = newCap;
    }
    (*array)[*len] = element;
    (*len)++;
}

int pop(int **array, int *len) {
    if (*len > 0) {
        return (*array)[--(*len)];
    } else {
        fprintf(stderr, "Stack underflow.\n");
        exit(EXIT_FAILURE);
    }
}

int operation(int num1, int num2, char op) {
    switch (op) {
        case '+': return num1 + num2;
        case '-': return num2 - num1; // Note the order for correct RPN operation
        case '*': return num1 * num2;
        case '/': 
            if (num1 == 0) {
                fprintf(stderr, "Division by zero.\n");
                exit(EXIT_FAILURE);
            }
            return num2 / num1; // Note the order for correct RPN operation
        default:
            fprintf(stderr, "Unknown operator %c\n", op);
            exit(EXIT_FAILURE);
    }
}

int main(void) {
    int cap = 4;
    int *array = malloc(cap * sizeof(int));
    int len = 0;
    char c;
    while ((c = getchar()) != '\n' && c != EOF) {
        if (c >= '0' && c <= '9') {
            push(&array, &len, &cap, c - '0');
        } else if (c == '+' || c == '-' || c == '*' || c == '/') {
            if (len < 2) {
                fprintf(stderr, "Insufficient operands.\n");
                free(array);
                exit(EXIT_FAILURE);
            }
            int num1 = pop(&array, &len);
            int num2 = pop(&array, &len);
            int result = operation(num2, num1, c); // Ensure correct order
            push(&array, &len, &cap, result);
        }
    }

    if (len == 1) {
        printf("%d\n", pop(&array, &len));
    }
}