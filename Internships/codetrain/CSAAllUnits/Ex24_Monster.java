//Ex4_ Monster Class

import java.util.ArrayList;

public class Ex24_Monster {
    public String type;
    public int strength;
    public int health;
    public String description;

    
    //************* constructor methods **************************
    public Ex24_Monster(String t, int s){
        type = t;
        strength = s;
        health = 100;
        
        String[]sizes = {"tiny","tall","giant", "gargantuan"};
        String[]colors = {"green","blue","violet", "turqouis", "polkadotted"};
        String[]look= {"gross","sauve","beguiling","ugly","larged nosed"};
        description = sizes[(int)(Math.random()*sizes.length)] + ", " +  colors[(int)(Math.random()*colors.length)]+", " + look[(int)(Math.random()*look.length)] ;
        
    }
    
    
    //**********  other methods  **********************
    public int monsterAttacks(){
        //when the monster is attacking
        //returns the amount of damage done to the player
        int damage = 0;
        int multiplier =(int)(Math.random()*5);
        damage = strength*multiplier;

        if(damage==0){
          System.out.println("I defended off the attack. No damage done.");
        } else {
          System.out.println("I suffered " + damage + " worth of pain.");
        }


        return damage;
    }//end attack
    
    public int monsterDefends(int damage){
        //when the monster is defending
        int multiplier =(int)(Math.random()*5);
        damage *= multiplier;
         
        if(damage==0){
          System.out.println("You missed! No damage done!");
        } else {
          System.out.println("You hit the monster and do " + damage + " worth of pain.");
        }

        health -= damage;
        System.out.println("The " + type +" has this much health left: " + health);
        
                           //returns the current health of the monster after the attack
       return 0;
    }//end defend
 
    
}//monster class