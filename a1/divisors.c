#include <stdio.h>

int main() {
    int userInt;
    scanf("%d", &userInt);
    int i;
    for (i=1; i<=userInt; i++){
        if(userInt % i == 0){
            if(i != userInt){
                printf("%d", i);
                printf(" ");
            } 
            else if (i == userInt){
                printf("%d", i);
            }
        }
    }
    printf("\n");
    return 0;
}