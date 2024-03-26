import java.util.ArrayList;

class Ex10_RailFence{

    public static void run(){

        System.out.println("What do you want to encrypt?");
        String english = Library.input.nextLine();

        //english.substring(i, i+1);

        String ciphertext = encrypt(english);
        System.out.println("Your encrypted message is: " + ciphertext);
        
        
    }//run

    public static String encrypt(String eng){
        
        ArrayList <String> rail1 = new ArrayList();
        ArrayList <String> rail2 = new ArrayList();

        for(int i=0; i<eng.length()-2;  i+=2 ){
            rail1.add( eng.substring(i, i+1)  );
            rail2.add( eng.substring(i+1, i+2)  );   
        }

        String temp = "";
        for( int i=0; i<rail1.size();  i++){
            temp += rail1.get(i);
        }
        for( int i=0; i<rail2.size();  i++){
            temp += rail2.get(i);
        }

        rail2.set(0, "Q");  
        rail2.remove(5);
        rail2.add("!");
        rail2.add(3, "****");
        
        
        
        
        return temp;
    }

    
    
    
    
}//class