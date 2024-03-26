public class Ex33_TicTacToeV2 {

    public static void run() {

        String[][] tictactoe = new String[3][3];

        setupBoard(tictactoe);
        // complete setupBoard function after printBoard
        // discuss Pass by Reference

        print2DString(tictactoe);
        System.out.println();

        tictactoe[0][1] = "X";
        print2DString(tictactoe);
        System.out.println("The winner is " + checkWinner(tictactoe));
        System.out.println();
        
        tictactoe[0][0] = "X";
        print2DString(tictactoe);
        System.out.println("The winner is " + checkWinner(tictactoe));
        System.out.println();

        tictactoe[0][2] = "X";
        print2DString(tictactoe);
        System.out.println("The winner is " + checkWinner(tictactoe));
        System.out.println();
        
    }// end main

    public static String checkWinner(String[][] tictactoe) {
        // use a for loop to check if a row is a winner
        for (int r = 0; r < tictactoe.length; r++) {
            if (!tictactoe[r][0].equals(" ") && tictactoe[r][0].equals(tictactoe[r][1]) && tictactoe[r][0].equals(tictactoe[r][2])) {
                return tictactoe[r][0];
            }
        }
        // use a for loop to check columns

        return "no one yet!";
    }

    public static void print2DString(String[][] arr) {
        for (int r = 0; r < arr.length; r++) {
            for (int c = 0; c < arr[r].length; c++) {
                System.out.print("| " + arr[r][c] );
            }
            System.out.println();
        }

    }// print2dString

    public static void setupBoard(String[][] tictactoe) {
        for (int r = 0; r < tictactoe.length; r++) {
            for (int c = 0; c < tictactoe[r].length; c++) {
                tictactoe[r][c] = " ";
            }
        }
    }// end

}// end class
