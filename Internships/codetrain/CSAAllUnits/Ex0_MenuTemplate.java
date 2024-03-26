class Ex0_MenuTemplate {
    public static void run() {

        while (true) {
            System.out.println("Choose from the following options.");

            System.out.println("1. Choice 1");
            System.out.println("2. Choice 2");
            System.out.println("3. Choice 3");
            System.out.println("4. exit.");

            int choice = Library.input.nextInt();
            Library.input.nextLine();
            
            if (choice == 1) {
                System.out.println("Choice 1");
            } else if (choice == 2) {

            } else if (choice == 3) {

            } else if (choice == 4) {
                break;
            }

        } // while loop
        
        System.out.println("Thank you. Please come again.");
        
    }// run

    
    
}// class