class Ex42_Fibonacci {
  public static int counter = 0;

  public static void run() {
    System.out.println("Fibonacci Sequence Example");
    System.out.println(fib(6));
    fib(6);
    System.out.println(counter);

  }// end runEx2

  public static int fib(int n) {
    counter++;
    if (n <= 0) {
      return 0;
    } else if (n == 1) {
      return 1;
    } else {
      return fib(n - 1) + fib(n - 2);
    }
  }// end fib

}// class