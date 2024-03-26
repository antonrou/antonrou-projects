// import java.io.*;
// import java.util.ArrayList;

// class Ex3_FoodCSV {

//     public static void run() {
        
//      ArrayList<Ex3_Food> allFood = new ArrayList();


//     loadFile("test.csv",allFood);


        
//         for (int i = 0; i < allFood.size(); i++) {
//             System.out.println(allFood.get(i).name);
//         }
                

        
//     }// run

// public static void loadFile(String filename, ArrayList<Ex3_Food> list ) {

//     try {
//     BufferedReader file = new BufferedReader(new FileReader(filename));
    
//     String dataToRead;
//         while( file.ready()){
//         dataToRead = file.readLine();
            
//         String tempArray[] = dataToRead.split(",");
      
//         list.add(new Ex3_Food(tempArray[0], tempArray[1], Double.parseDouble(tempArray[2]), Integer.parseInt(tempArray[3])));
        
//         } 
//     }
    
//     catch (IOException e) {
//     System.out.println(e);
//     }
// }//end loadFile


   

// }// class