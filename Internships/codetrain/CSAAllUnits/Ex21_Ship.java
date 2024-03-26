public class Ex21_Ship {
    // Instance class, like a blueprint

    // Instance Variables
    private String name;
    private boolean inSpace;
    private String owner;
    private String captain;
    private int age;

    // Constructor method

    public Ex21_Ship(String n, boolean s, String o, int a) {
        name = n;
        inSpace = s;
        owner = o;
        captain = o;
        age = a;
    }

    // Instance Methods

    public void setCaptain(String n) {
        captain = n;
    }
  
    public void addYears(int years) {
        age += years;
    }
  

    // The toString() method creates and returns a String for easier printing.
    // All Objects have a built in toString method that will naturally return the hexadecimal memory address of the instance.
    public String toString() {
        if (inSpace){
            return name + " (spaceship)  Owned by: " + owner + "  Captain:" + captain;
        } else {
            return name + "  Owned by: " + owner + "  Captain:" + captain;
        }
            
    }//toString

}// end ship class