public class Ex23_LawnClient {

  public String name;
  public String address;
  public int lawnSize;
  public boolean hasDog;
  public double outstandingFees;

  // Constructor Method
  public Ex23_LawnClient(String n, String a, int s, boolean d) {
    name = n;
    address = a;
    lawnSize = s;
    hasDog = d;
    outstandingFees = 0;
  }

  // This second constructor below is needed for V2
  public Ex23_LawnClient(String n, String a, int s, boolean d, double f) {
    name = n;
    address = a;
    lawnSize = s;
    hasDog = d;
    outstandingFees = f;
  }

  // Instance Methods

  // public String toString() {
  // return name + " Lawn: " + lawnSize + " sq metres. Dog: " + hasDog + "
  // Currently owing: $" + outstandingFees;
  // }

  public void mowLawn() {
    double mowFee = 10;
    mowFee += lawnSize * 0.5;
    if (hasDog) {
      mowFee += 15;
    }
    outstandingFees += mowFee;

    System.out.println("Today fee is $" + mowFee);
    System.out.println(name + " you now owe a total of $" + outstandingFees);

  }// mowLawn

  public void processPayment() {
    // ask and scan for payment amount
    double dollars = 50; // always 50 for testing purposes
    outstandingFees -= dollars;
    System.out.println("Thank you for your payment " + name);
  }

  public void delinquentFees() {
    if (outstandingFees > 50) {
      outstandingFees *= 1.1;
      if (outstandingFees > 400 && hasDog) {
        hasDog = false;

      }
    }

  }// deliquent

}// class