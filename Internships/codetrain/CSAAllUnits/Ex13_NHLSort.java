import java.util.ArrayList;

class Ex6_NHLSort {
    public static void run() {

        ArrayList<String> allNames = Files.loadStringList("data/nhl/nhl_last.txt");
        ArrayList<String> allTeams = Files.loadStringList("data/nhl/nhl_teams.txt");
        ArrayList<Integer> allGoals = Files.loadIntegerList("data/nhl/nhl_goals.txt");

        sortByGoals(allGoals, allNames, allTeams);
        
        for (int i = 0; i < allNames.size(); i++) {
            if (allTeams.get(i).contains("EDM")) {
                System.out.println(allNames.get(i) + "   " + allTeams.get(i) + "   " + allGoals.get(i));
            }
        } // for

        System.out.println();
        System.out.println("Sort by Names");
        sortByNames(allGoals, allNames, allTeams);
        
        for (int i = 0; i < allNames.size(); i++) {
            if (allTeams.get(i).contains("EDM")) {
                System.out.println(i+ "  " +allNames.get(i) + "   " + allTeams.get(i) + "   " + allGoals.get(i));
            }
        } // for

        allGoals.set(509, allGoals.get(509)+ 2);

        Files.saveList("data/nhl/nhl_last.txt", allNames);
        Files.saveList("data/nhl/nhl_teams.txt", allTeams);
        Files.saveList("data/nhl/nhl_goals.txt", allGoals);
        

    }// run

    
    public static void sortByGoals(ArrayList<Integer> list, ArrayList<String> names, ArrayList<String>teams    ) {
        boolean swap = true;
        while (swap){
            swap = false;
            for(int i=0; i<list.size()-1; i++  ){
                if( list.get(i) > list.get(i+1)   ){
                    swap = true;
                    Integer temp = list.get(i);
                    list.set(i,  list.get(i+1)  );
                    list.set(i+1, temp); 

                    String teamTemp = teams.get(i);
                    teams.set(i, teams.get(i+1));
                    teams.set(i+1, teamTemp);

                    String nameTemp = names.get(i);
                    names.set(i, names.get(i+1));
                    names.set(i+1, nameTemp);                    
                }            
            }//for         
        }//while
    }// end sortByGoals

    public static void sortByNames(ArrayList<Integer> list, ArrayList<String> names, ArrayList<String>teams    ) {
        boolean swap = true;
        while (swap){
            swap = false;
            for(int i=0; i<list.size()-1; i++  ){
                if( names.get(i).compareToIgnoreCase( names.get(i+1) )   > 0     ){
                    swap = true;
                    Integer temp = list.get(i);
                    list.set(i,  list.get(i+1)  );
                    list.set(i+1, temp); 

                    String teamTemp = teams.get(i);
                    teams.set(i, teams.get(i+1));
                    teams.set(i+1, teamTemp);

                    String nameTemp = names.get(i);
                    names.set(i, names.get(i+1));
                    names.set(i+1, nameTemp);                    
                }            
            }//for         
        }//while
    }// end sortByGoals

}// class