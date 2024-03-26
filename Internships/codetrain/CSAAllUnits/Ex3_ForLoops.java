//Ex3_ForLoops.java

class Ex3_ForLoops {
  public static void run() {

    // Count up to 1000
    for (int i = 0; i < 1000; i++) {

      System.out.print(i + ", ");

    }
    System.out.println();

    // Count up showing the square roots of each number
    for (int i = 0; i < 50; i++) {

      System.out.print(Math.sqrt(i) + ", ");

    }
    System.out.println();

    // count down from 50, showing the even numbers only
    for (int i = 50; i > 0; i--) {

      if (i % 2 == 0) {
        System.out.print(i + ", ");
      }
    }
    System.out.println();

    // Challenge for students - Can you only print out the Prime Numbers
    // for (int i = 1; i < 100; i++) {
    // boolean prime = true;
    // for (int j = 1; j <= i; j++) {
    // // System.out.println(i + ", " + j);
    // if (i % j == 0) {
    // prime = false;
    // // break;
    // }
    // }
    // if (prime) {
    // System.out.print(i + ", ");
    // }
    // }

    System.out.println(Library.TEXT_GREEN + "FizzBuzz Problem");
    System.out.println();

    //Begin without this scanning first to focus on the FOR loop
    //Then add the Scanner. Note that we did not add in import line or create the Scanner in this file. From now on, we will use the Library file
    System.out.println("How high do you want to count?" + Library.TEXT_RESET);
    int counter = Library.input.nextInt();
    Library.input.nextLine();

    for (int i = 1; i <= counter; i++) {
      String output = "";
      if (i % 3 == 0)
        output += "Fizz";
      if (i % 5 == 0)
        output += "Buzz";

      if (output.equals(""))
        output += i;

      System.out.println(output);

    } // for

  }// run

}
// class