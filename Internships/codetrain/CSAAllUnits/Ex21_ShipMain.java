class Ex21_ShipMain {

  public static void run() {

    Ex21_Ship ship1 = new Ex21_Ship("Millenium Falcon", true, "Lando", 1500);
    Ex21_Ship ship2 = new Ex21_Ship("Titanic", false, "White Starline", 0);
    Ex21_Ship ship3 = new Ex21_Ship("Falcon Heavy", false, "Elon", 0);
    System.out.println(ship1);
    System.out.println(ship2);
    System.out.println();

    // ship2.captain = "Edward Smith";
    // System.out.println(ship1.name);

    ship2.addYears(107);

    ship1.setCaptain("Han Solo");
    ship2.setCaptain("Edward Smith");
    System.out.println(ship1);
    System.out.println(ship2);
    System.out.println(ship3);

  }// run

}// end class