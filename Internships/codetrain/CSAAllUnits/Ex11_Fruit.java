import java.util.ArrayList;

class Ex11_Fruit{
    public static void run(){

        ArrayList<String> allFruit = new ArrayList();
        allFruit.add("apple");            //0
        allFruit.add("banana");            //1
        allFruit.add("dragon fruit");       //2
        allFruit.add("pomegranate");        //3
        allFruit.add("plum");                //4
        allFruit.add("starfruit");           //5

        for(int i=0; i<allFruit.size() - 1; i++){

            System.out.println(allFruit.get(i).compareToIgnoreCase(allFruit.get(i+1))  ); 
        
            
        }

        // System.out.println(allFruit);

        // String temp = allFruit.get(3);
        // allFruit.set(3, allFruit.get(4) );
        // allFruit.set(4, temp );

        // System.out.println(allFruit);      

    }//run   
}//class