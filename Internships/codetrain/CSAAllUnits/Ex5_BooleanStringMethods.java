class Ex5_BooleanStringMethods {
  public static void run() {

    while (true) {
      int score = 0;

      System.out.println("Canadian Soccer Quiz");

      System.out.println("Who is the best Canadian soccer player right now?");
      String answer1 = Library.input.nextLine().toLowerCase();
      if (answer1.startsWith("davi") || answer1.startsWith("buch")) {
        System.out.println("Correct");
        score++;
      } else {
        System.out.println("Why do you assume it is a man, you sexist jerks!  :-)  ");
      }

      System.out.println("What position did Mr Couprie?");
      String answer2 = Library.input.nextLine().toLowerCase();
      // discuss that it would be more memory efficient to use the first answer
      // variable every time we want to Scan strings. But for simplicity of
      // understanding, we will use a new one instead.
      if (answer2.contains("right") && (answer2.contains("back") || answer2.contains("defence"))) {
        System.out.println("Correct for 2 points");
        score += 2;
      } else if (answer2.contains("back") || answer2.contains("defence")) {
        System.out.println("Correct for 1 point");
        score += 1;
      }

      System.out.println("How many goals did Mr. Couprie score?");
      double numGoals = Library.input.nextDouble();
      Library.input.nextLine();
      if (numGoals == 0) {
        System.out.println("Correct for 1 point");
        score += 1;
      } else if (numGoals > 10) {
        System.out.println("Wrong. But you seem like the kind fo peerson who will get an A in this course.");
      }

      System.out.println("Your score is: " + score);
    } // while loop

  }// run

}// end class