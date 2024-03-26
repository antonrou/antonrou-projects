//Ex4_MonsterMain

import java.util.ArrayList;

class Ex4_MonsterMain {
    public static void run() {

        ArrayList<Ex24_Monster> allMonsters = new ArrayList();
        setup(allMonsters);

        // ******* player variables **********/
        int playerHealth = 100;
        int coins = 0;
        String weapon = "crossbow";
        int playerDamage = 8;

        int rand = (int) (Math.random() * allMonsters.size());
        Ex24_Monster temp = allMonsters.remove(rand);

        System.out.println("debug: " + temp.description + " " + temp.type);

        System.out.println();
        System.out.println();
        System.out.println();
        System.out.println("I was walking down the street when");
        System.out.println("I heard a horrendous sound behind me and turned to see" + temp.type);
        System.out
                .println("It was " + temp.description + " " + temp.type + "! Folks, frankly, it was quite disgusting.");

        while (playerHealth > 0 && temp.health > 0) {

            playerHealth -= temp.monsterAttacks();
            if (playerHealth <= 0)
                break;

            temp.monsterDefends(playerDamage);
            System.out.println("My health was: " + playerHealth);
            
            System.out.println("Hit enter to continue");
            Library.input.nextLine();
        } // end fight loop

        if (playerHealth <= 0) {
            System.out.println("I died.  Sigh.");
            return;
        } else {
            System.out.println("I killed " + temp.type + ". Believe me.");
        }

    }// end run

    public static void setup(ArrayList<Ex24_Monster> allMonsters) {
        allMonsters.add(new Ex24_Monster("Frankenstein", 4));
        allMonsters.add(new Ex24_Monster("The Mummy", 8));
        allMonsters.add(new Ex24_Monster("Dracula", 6));
        allMonsters.add(new Ex24_Monster("Casper", 2));
        allMonsters.add(new Ex24_Monster("Thanos", 10));
        allMonsters.add(new Ex24_Monster("Worm", 8));
        allMonsters.add(new Ex24_Monster("Jason", 3));

    }// setup

}// MonsterMain class