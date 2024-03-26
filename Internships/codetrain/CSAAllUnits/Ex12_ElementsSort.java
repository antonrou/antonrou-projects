import java.util.ArrayList;

class Ex5_ElementsSort{
    public static void run(){
        ArrayList<String> teachers = new ArrayList();
        teachers.add("Williams");
        teachers.add("Kinasevich");
        teachers.add("Deboer");
        teachers.add("Phillpotts");
        teachers.add("Gregory");
        
        System.out.println(teachers);
        Sort.bubbleSortStrings(teachers);
        System.out.println(teachers);


        ArrayList<String> elements = Files.loadStringList("data/elements/enames.txt");
        // System.out.println(elements);
        ArrayList<Double> weights  = Files.loadDoubleList("data/elements/weights.txt");

        System.out.println("Sorted by name");
        Sort.bubbleSortStrings(elements);
        Sort.bubbleSortDoubles(weights);
        for(int i=0; i<elements.size(); i++){
            System.out.println( elements.get(i) + "  " + weights.get(i)  );
        }
        
    }//run


    

    
}//class