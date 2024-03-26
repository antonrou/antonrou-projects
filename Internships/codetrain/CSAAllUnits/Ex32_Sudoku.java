class Ex32_Sudoku {
    public static void run() {

        int[][] square1 = { { 1, 2, 3 }, { 4, 5, 6 }, { 7, 8, 9 } };
        // int[][] square1 = { { 1, 2, 3 },  new int[3] , { 7, 8, 9 } };

        print2Dint(square1);
        System.out.println("Square 1 is legit: " + testSquare(square1));
        
        int[][] square2 = { { 1, 2, 9 }, { 4, 5, 6 }, { 7, 8, 9 } };
        print2Dint(square2);
        System.out.println("Square 2 is legit: " + testSquare(square2));

      
        int[][] square3 = generateSquare(3);
        print2Dint(square3);
        System.out.println("Square 3 is legit: " + testSquare(square3));


        
    }// run

    public static int[][] generateSquare(int size){
        int[][] arr = new int[size][size];
        int max = (int)Math.pow(size, 2);
        for (int r = 0; r < arr.length; r++) {
            for (int c = 0; c < arr[r].length; c++) {
               arr[r][c] = (int) (Math.random() * max + 1     );
            }
        }
        return arr;
      
    }//generateSquare

    
    public static boolean testSquare(int[][] arr) {
        for (int i = 1; i < 10; i++) {
            int counter = 0;

            for (int r = 0; r < arr.length; r++) {
                for (int c = 0; c < arr[r].length; c++) {
                    if (arr[r][c] == i) {
                        counter++;
                    }
                }

            }
            if (counter > 1) {
                return false;
            }
        }
        return true;
    }// testSquare


    public static void print2Dint(int[][] arr) {
        for (int r = 0; r < arr.length; r++) {
            for (int c = 0; c < arr[r].length; c++) {
                System.out.print(arr[r][c] + "  ");
            }
            System.out.println();
        }

    }// print2dint

    


}// class