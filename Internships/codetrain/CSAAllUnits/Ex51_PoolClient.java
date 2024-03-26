public class Ex51_PoolClient extends Ex51_LawnClient {
    private int poolSize;

    public Ex51_PoolClient(String n, String a, int l, boolean dog, int ps ){
        super(n,a,l,dog);
        poolSize=ps;
    }
    public void calculateFee(){
        double totalFee = super.getLawnSize() * 0.2;
        if(super.isHasDog()){
            totalFee += 10;
        }
        totalFee+= poolSize * 50;
        super.setOutstandingFees( super.getOutstanding() + totalFee  );
        System.out.println("This week's charge is: $" + totalFee);
        System.out.println("Your total owing is $" + super.getOutstanding());

    }//end calculateFee


}
