import java.util.Scanner;

class Ex2_UserInput {

        
    public static void run() {
        Scanner input = new Scanner(System.in);
    //Note also the new IMPORT line at the top of this file

    //+++++++++++  Part 1 Scanning Integers +++++++++++
    int time1;
    int time2;
    int time3;

    System.out.println("What is the time for runner 1?");
    time1 = input.nextInt();
    input.nextLine();//required to flush out the ENTER key that is pressed at the end of integer (and any number) input

    System.out.println("What is the time for runner 2?");
    time2 = input.nextInt();
    input.nextLine();

    System.out.println("What is the time for runner 3?");
    time3 = input.nextInt();
    input.nextLine();
    // int average;
      double average;
    average = (time1 + time2 + time3) / 3;
    System.out.println("Team finished with an average " + average + " seconds");



    //+++++++++++  Part 2 Scanning Strings and Doubles +++++++++++   
        String name;
        int numTunes;
        double price; 
        
        System.out.println(Library.TEXT_YELLOW + "Ex1_Datatypes");
        System.out.println(Library.TEXT_CYAN + "There are 5 core data types in java" + Library.TEXT_RESET);

        System.out.println();
        System.out.println("Welcome to da hood");    
        System.out.println("Yo, yo, yo. What is your name homie?");        
        name = input.nextLine();
        System.out.println(name + " is one drippy handle brah. How many tunes you got, dawg?");
        numTunes = input.nextInt();
        input.nextLine();

        System.out.println("Dems some nice kicks.  How much you pay?");
        price = input.nextDouble();
        input.nextLine();  

        if( price < 100){
            System.out.println("If you come rap with us you can afford the Channels");
        }

        if( name.equalsIgnoreCase("Grand Ma$ta Coup")   ){
            System.out.println("Congratulations, you are going to be a star!");
        }
        
        else if( name.toLowerCase().contains("$")   ){
            System.out.println("You got potential kid but need a new handle.");
        }
        
            
    }// end run
   

}// end class