class Ex0_ArrayAlgorithms {
    public static void run() {
        System.out.println("Java arrays hold only 1 type of data and do NOT change size");

        String[] allTeams = { "Oilers", "Flames", "Canucks", "Jets", "Leafs", "Senators", "Canadiens" };
        int[] allWins = new int[7];

        allWins[0] = 29;
        allWins[1] = 24;

        // for (int i = 0; i < allTeams.length; i++) {
        // System.out.println(allTeams[i] + " Points: " + allWins[i] * 2);
        // }

        String[] allGames = { "Grand Theft Auto V", "Pacman", "Tetris", "PlayerUnknown's Battlegrounds",
                "Super Mario Bros", "Pokemon", "Mario Kart 8", "Wii Fit", "Red Dead Redemption 2", "Mario Kart Wii",
                "Terraria", "Minecraft", "Animal Crossing", "Wii Sports" };
        double[] allSales = { 150, 40.9, 100, 70, 58, 47.5, 45.5, 43.8, 38, 37.3, 35, 238, 33.8, 82.9 };
        String[] allPublish = { "Rockstar Games", "Namco", "Electronic Arts", "PUBG Corporation", "Nintendo",
                "Nintendo", "Nintendo", "Nintendo", "Rockstar Games", "Nintendo", "Re-Logic / 505 Games",
                "Mojang Studios", "Nintendo", "Nintendo" };
        int[] allYears = { 2013, 1980, 2006, 2017, 1985, 1996, 2014, 2007, 2018, 2008, 2011, 2011, 2020, 2006 };


        
        // Filtered Print - Scan for a publisher
        System.out.println("What publishing company do you want to find the games for?");
        String publisher = Library.input.nextLine();
        for (int i = 0; i < allGames.length; i++) {
            if (publisher.equals(allPublish[i])) {
                System.out.println(allGames[i] + "  Sales in Millions: $" + allSales[i]);
            }
        }


        
        // Find the lowest - earliest year
        int lowestIndex = 0;
        for (int i = 0; i < allYears.length; i++) {
            if (allYears[i] < allYears[lowestIndex]) {
                lowestIndex = i;
            }
        }
        System.out.println(allGames[lowestIndex] + " was released in " + allYears[lowestIndex]);


        
        // Total and average
        double total = 0;
        for (int i = 0; i < allSales.length; i++) {

            total += allSales[i];

        }
        System.out.println("Total sales: $" + total);
        System.out.println("Average sales: $" + total / allSales.length);


        
        // Countif - How many nintendo games?
        int counter = 0;
        for (int i = 0; i < allGames.length; i++) {
            if (allPublish[i].equalsIgnoreCase("nintendo")) {
                counter++;
            }

        }
        System.out.println("The number of Nintendo games is: " + counter);


        
        // Searching
        System.out.println("What game do you want to find?");
        String gameToFind = Library.input.nextLine();
        int foundIndex = stringSearchArrays(allGames, gameToFind);
        if (foundIndex == -1) {
            System.out.println("Not found");
        } else {
            System.out.println(allGames[foundIndex] + "  $" + allSales[foundIndex]);
        }

    }// run

    public static int stringSearchArrays(String[] arr, String searchTerm) {
        for (int i = 0; i < arr.length; i++) {
            if (searchTerm.equalsIgnoreCase(arr[i])) {
                return i;
            }
        }
        return -1;
    }// stringSearch
    
}// class