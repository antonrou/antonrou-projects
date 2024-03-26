public class Ex22_Actor{
    private String name;
    private String role;
    private double sales;
    private boolean isPro;

    public Ex22_Actor(String n, boolean p){
        name = n; 
        role = "unassigned";
        sales = 0;
        isPro = p;
        
    }//constructor

    
    //instance methods
    public String toString(){
        return name+"  Role: " + role+"   $" + sales+ "  Professional: " + isPro;
        
    }

  
    public void setRole(String r){
        role = r;
    }

    public void addSales (double s){
        sales += s;
    }

    public double getSales(){
      return sales;
    }


    
}//actor class