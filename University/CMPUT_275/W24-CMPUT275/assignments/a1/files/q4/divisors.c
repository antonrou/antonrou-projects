#include <stdio.h>

int main() {
    int userInt;
    scanf("%d", &userInt);
    int i;
    for (i=1; i<=userInt; i++){
        if(userInt % i == 0){
            printf("%d", i);
            printf(" ");
        }
    }
    printf("\n");
    return 0;
}