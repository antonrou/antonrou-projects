#include <iostream>
#include <string>
using namespace std;

int openRedirect(){
// Redirect stdin and stdout
    //freopen("gospers.in", "r", stdin);
    //freopen("test1.out", "w", stdout);
    return 0;

}




int addToArray(string line,char **&array, int &maxRows, int &maxCols, int rowCounter, int colCounter){
    if((rowCounter >= maxRows) || (colCounter >= maxCols)){
        int newArrayRows = maxRows;
        int newArrayCols = maxCols;
        if (rowCounter >= maxRows){
            while(rowCounter >= newArrayRows){
                newArrayRows*=2;
            }
        }
        if (colCounter >= maxCols){
            while(colCounter >= newArrayCols){
                newArrayCols *=2;
            }
        }

        char** newArray = new char*[newArrayRows];

        for (int i =0; i < newArrayRows; i++){
            newArray[i] = new char[newArrayCols]();
        }
        for(int i = 0; i <maxRows; i++){
            for(int j = 0; j < maxCols; j++){
                newArray[i][j] = array[i][j];
            }
            delete[] array[i]; //delete rows of old array
        }
        delete[] array; //delete old array
        maxRows = newArrayRows; //update maxrows to new number of rows
        maxCols = newArrayCols;
        array = newArray; //pointer to old array now points to new array
    }
    for(int j = 0; j<colCounter; j++){
        array[rowCounter-1][j] = line[j];
    }
    
    return 0;
}

int countLiveNeighbours(char **array, int rows, int cols, int i, int j){
    int liveNeighbours = 0;
    int dx[] = {-1,0,1};
    int dy[] = {-1,0,1}; 
    for(int l = 0; l < 3; l++){
        for(int p = 0; p < 3; p++){
            if(!(dx[l] == 0 && dy[p] == 0)){
                int x = i+ dx[l];
                int y = j + dy[p];
                if(x >= 0 && x < rows && y>= 0 && y < cols && array[x][y] == 'O'){
                    liveNeighbours++;
                }
            }
        }
    }
    return liveNeighbours;
}

int updateArray(char **&originalArray, int rows, int cols){
    char **array = new char*[rows];
    for(int i = 0; i < rows; i++){
        array[i] = new char[cols];
        for(int j = 0; j < cols; j++){
            array[i][j] = originalArray[i][j];
        }
    }

    for(int i = 0; i<rows; i++){
        for(int j = 0; j<cols; j++){
            if (originalArray[i][j] == 'O'){
                if(countLiveNeighbours(originalArray, rows, cols, i, j) < 2){
                    array[i][j] = '.';
                }
                else if(countLiveNeighbours(originalArray, rows, cols, i, j) > 3){
                    array[i][j] = '.';
                }
            }
            else if(originalArray[i][j] == '.'){
                if(countLiveNeighbours(originalArray, rows, cols, i, j) == 3){
                    array[i][j] = 'O';
                }
            }
        }
    }

    for(int i = 0; i< rows; i++){
        for(int j = 0; j < cols; j++){
            originalArray[i][j] = array[i][j];
        }
        delete[] array[i]; //free memory for each row of temp array
    }
    delete[] array; //free memory for temp array
    return 0;
}



int main(){
    openRedirect();
    int maxLines = 2;
    int maxChars = 2;

    //Dynamic memory allocation for array
    char** inputArray = new char*[maxLines];
    for (int i =0; i < maxLines; i++){
        inputArray[i] = new char[maxChars];
    }
    string line;
    int lineCount = 0;
    int charCount = 0;
    while(getline(cin, line)){ //credit to stackOverflow. We are storing cin into line.
        if(line[0] ==  'x'){
            break;
        }
            charCount = line.length();
            ++lineCount;
            addToArray(line, inputArray, maxLines, maxChars, lineCount, charCount);
    }
    char x;
    while(cin>>x){
        if(x == 'p'){
            for(int p = 0; p<charCount; p++){
                cout<<"|";
            }
            cout<<endl;
            
            for(int i=0; i<lineCount; i++){
                for(int j=0; j<charCount; j++){
                    cout<<inputArray[i][j];
                }
                cout<<endl;
            }
            for(int p = 0; p<charCount; p++){
                cout<<"|";
            }
            cout<<endl;
        }
        if(x == 's'){
            updateArray(inputArray, lineCount, charCount);
        }
    }

    for(int i= 0; i < maxLines; i++){
        delete[] inputArray[i];
    }
    delete[] inputArray;
    return 0;
}