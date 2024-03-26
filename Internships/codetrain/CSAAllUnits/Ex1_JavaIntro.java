import java.util.Scanner;

class Ex1_JavaIntro {
  public static void run() {
    //++++++++  Example 1 - Focusing on Java Printing and Datatypes ++++

    System.out.println();
    System.out.println();
    System.out.println("Welcome to Grade 12 Computer Science");
    System.out.println("Advanced Placement Course - Computer Science A");

    System.out.println();
    System.out.println("Mean Uncle Java's Big 5 Data Types");
    
    System.out.println("int - for whole numbers");
    int age = 26;
    System.out.println("   Mr. Smith's age is " + age + " years old");
    
    System.out.println("String for words (notice the capital S)");
    String course = "CSA";
    System.out.println("   We are taking the AP course called " + course);

    System.out.println("char for single characters (not needed often in Java)");
    char goalGrade = 'b';

    System.out.println("boolean for true or false");
    boolean metGoal = true;
    if( metGoal ){
      System.out.println("   Congratulations on earning a " + goalGrade);
    }

    System.out.println("double or float for numbers that may contain decimals. I usually use doubles but floats are more memory efficient.");
    double average = 74.8;
    System.out.println("   Your average in this class was " + average);


    
    
  }//end run

}// end class