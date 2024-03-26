class Ex22_ActorV2{
    //***** Instance Variables
    public String name;
    private String role;
    public int sales;  //dollars sold
    public boolean isPro;
    public int roomNum;

    //***** Constructor methods
    public Ex22_ActorV2 (String n, boolean p){
        name = n; 
        role = "unassigned";
        sales = 0;
        isPro = p;
        roomNum = -1;
             
    }//constructor

    //***** Instance Methods
    public String toString(){
        return name + "  " + role + "  " + sales +"  " + isPro;
    }


    public void setRole( String r ){
        role = r;
    }

    public void sellTix (int numtix){
        sales +=  (numtix*15);
    }

    public double pay(){
        double total = 500;

        if(isPro){
            total += 200;
        }

        total +=  (sales*0.33);
        System.out.println(name + " was paid through etransfer: $" + total);

        return total;
        
    }//pay
    
    

}//Actor class
