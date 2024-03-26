//Ex31_Golf2D

class Ex31_Golf2D{
    public static void run(){

        // String[] names = new String[4];
        String[] names = {"Serena", "Diane", "Stu", "Tiger"};

        int[][] scorecard = new int[4][18];  //[rows][columns] 

        //Hole 1: 3 , 5, 5, 2
        scorecard[0][0] = 3;
        scorecard[1][0] = 5;
        scorecard[2][0] = 5;
        scorecard[3][0] = 2;
        //Hole 2: 4 , 4, 4, 4
        scorecard[0][1] = 4;
        scorecard[1][1] = 4;
        scorecard[2][1] = 4;
        scorecard[3][1] = 4;

        //randomize all remaining scores to be between 3 and 8
        for(int r=0; r<scorecard.length; r++){
            for(int c=2; c<scorecard[r].length; c++ ){
                scorecard[r][c] = Library.myRandom(3,9);
            }
        }

        
        
        // for(int n = 0; n<scorecard.length; n++){
        //     System.out.print(names[n]+":   ");
        //     for(int holes=0; holes<scorecard[n].length; holes++){
        //         System.out.print(scorecard[n][holes] +"   ");
        //     }
        //     System.out.println();
        // }


        //Calculate and print their total score at the end of each row
        for(int n = 0; n<scorecard.length; n++){
            int total = 0;
            System.out.print(names[n]+":   ");
            for(int holes=0; holes<scorecard[n].length; holes++){
                System.out.print(scorecard[n][holes] +"   ");
                total += scorecard[n][holes];
            }
            System.out.println("Total: " + total);
        }
        
        
    }//run

    
}//class