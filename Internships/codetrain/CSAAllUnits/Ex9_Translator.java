import java.util.ArrayList;

class Ex9_Translator {
    public static void run() {

        ArrayList<String> allEnglish = new ArrayList();
        ArrayList<String> allPirate = new ArrayList();

        allEnglish.add("hello");
        allPirate.add("ahoy");
        allEnglish.add("yes");
        allPirate.add("aye");
        allEnglish.add("gosh");
        allPirate.add("blimey");
        allEnglish.add("fine looking");
        allPirate.add("comely");
        allEnglish.add("yikes");
        allPirate.add("shiver me timbers");
        allEnglish.add("what");
        allPirate.add("yar");

        System.out.println(allPirate);

        allPirate.add(3, "briney seas");
        allEnglish.add(3, "the ocean");

        // for (int i = 0; i < allPirate.size(); i++) {
        //     System.out.println(allPirate.get(i) + " - " + allEnglish.get(i));
        // }

        System.out.println("What Pirate word do you want to translate?");
        String pWord = Library.input.nextLine();

        int foundIndex = binarySearch(allPirate, pWord);
        if (foundIndex == -1) {
            System.out.println("Not found");

        } else {
            System.out.println(pWord + " tranlates to " + allEnglish.get(foundIndex));
        }


        ArrayList<String> myPirate = new ArrayList();
        myPirate.add( allPirate.get(foundIndex) );

        for(int i=0; i<myPirate.size(); i++){
            
            myPirate.set(i, myPirate.get(i) + "!");
            
        }


        
    }// run

    public static int binarySearch(  ArrayList<String> list, String searchTerm  ){
        int begin = 0;
        int end = list.size()-1;
        while( begin <= end  ){
            int mid = (begin + end)/2;
            if( searchTerm.equalsIgnoreCase(list.get(mid) )  ){
                return mid;
            } 
            else if (  searchTerm.compareToIgnoreCase( list.get(mid) )  > 0  ){
                begin = mid + 1;
            }
            else {
                end = mid - 1;
            }

            
        }//while

        return -1;
    }//binarySearch
    

}// class