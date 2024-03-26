public class Ex51_LawnClient {
    //instance variables
    private int id;
    private String name;
    private String address;
    private int lawnSize;
    private boolean hasDog;
    private double outstandingFees;
           
    //constructor method
    public Ex51_LawnClient(String n, String a, int l, boolean dog){
        name = n;
        address =a;
        lawnSize = l;  //square feet of yard
        hasDog = dog;
        outstandingFees = 0;
        Ex51_LawnMainInheritance.lastID++;
        id = Ex51_LawnMainInheritance.lastID;
    }
   
    //instance methods
    public int getId(){
        return id;
    }
    public String getName(){
        return name;
    }
    public void setName(String n){
        name = n;
    }

    public void setOutstandingFees(double outstandingFees) {
        this.outstandingFees = outstandingFees;
    }

    public String getAddress() {
        return address;
    }

    public int getLawnSize() {
        return lawnSize;
    }

    public boolean isHasDog() {
        return hasDog;
    }

    public double getOutstandingFees() {
        return outstandingFees;
    }

    public void calculateFee(){
        double totalFee = lawnSize * 0.2;
        if(hasDog){
            totalFee += 10;
        }
        outstandingFees += totalFee;
        System.out.println("This week's charge is: $" + totalFee);
        System.out.println("Your total owing is $" + outstandingFees);
 
    }//end calculateFee
    public double getFees(){
        return outstandingFees;
    }//end getFees
    
    public void processPayment(double dollars){
        outstandingFees -= dollars;
        System.out.println("Thank you for your payment");
        System.out.println("Your total owing is $" + outstandingFees);
    }
    
    public double getOutstanding(){
        if (outstandingFees > 50 && hasDog){
            hasDog = false;
        }
        return outstandingFees;
    }
    
    
}
