class Ex8_Hangman {
    public static void run() {

        System.out.println("Welcome to Hangman");
        // drawhangman(6);

        String startWord = "canada";
        String[] solution = startWord.split("");
        String[] underscores = new String[  solution.length  ];
        for(int i=0; i<underscores.length; i++){
            underscores[i] = "_";            
        }

        int numWrong = 0;
        while(numWrong < 6){

            System.out.print("The word is: ");
            for(int i=0; i<underscores.length; i++){
                System.out.print(underscores[i] + ", ");
            }
            System.out.println();

            boolean found = false;
            System.out.println("What is your letter guess?");
            String guess = Library.input.nextLine();
            
            for(int i=0; i<underscores.length; i++){
                if(guess.equalsIgnoreCase( solution[i]  )){
                    found = true;
                    underscores[i] = guess;
                }       
            }//for

            if(!found){
                numWrong++;
            }
            drawhangman(numWrong);

            boolean done = true;
            for(int i=0; i<underscores.length; i++){
                if(underscores[i].equals("_")){
                    done = false;
                }      
            }
            if(done){
                System.out.println("You win! The word is " +startWord);
                return;
            }
                   
        }//while loop
        
        System.out.println("Death draws near but not quickly enough for our hero!");
        
    }// run

    public static void drawhangman(int numWrong) {

        if (numWrong == 6) {
            System.out.println("             ---- \n             |  | \n             ----");
            System.out.println("            / | \\");
            System.out.println("           /  |  \\");
            System.out.println("          /   |   \\");
            System.out.println("              |   ");
            System.out.println("              |   ");
            System.out.println("             / \\");
            System.out.println("            /   \\");
            System.out.println("           /     \\");
        } // 6
        if (numWrong == 5) {
            System.out.println("            / | \\");
            System.out.println("           /  |  \\");
            System.out.println("          /   |   \\");
            System.out.println("              |   ");
            System.out.println("              |   ");
            System.out.println("             / \\");
            System.out.println("            /   \\");
            System.out.println("           /     \\");
        } // 5
        if (numWrong == 4) {

            System.out.println("             | \\");
            System.out.println("             |  \\");
            System.out.println("             |   \\");
            System.out.println("             |   ");
            System.out.println("             |   ");
            System.out.println("            / \\");
            System.out.println("           /   \\");
            System.out.println("          /     \\");
        } // 4
        if (numWrong == 3) {

            System.out.println("             | ");
            System.out.println("             |  ");
            System.out.println("             |   ");
            System.out.println("             |   ");
            System.out.println("             |   ");
            System.out.println("            / \\");
            System.out.println("           /   \\");
            System.out.println("          /     \\");
        } // 3
        if (numWrong == 2) {

            System.out.println("             | ");
            System.out.println("             |  ");
            System.out.println("             |   ");
            System.out.println("             |   ");
            System.out.println("             |   ");
            System.out.println("            / ");
            System.out.println("           /   ");
            System.out.println("          /     ");
        } // 2
        if (numWrong == 1) {
            System.out.println("             | ");
            System.out.println("             |  ");
            System.out.println("             |   ");
            System.out.println("             |   ");
            System.out.println("             |   ");
            System.out.println("             ");
            System.out.println("              ");
            System.out.println("               ");
        } // 1

    }// drawHangman

}// class