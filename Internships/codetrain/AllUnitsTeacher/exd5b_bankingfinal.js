let allNames = ["Serena", "Marco", "Amrit"];
let allPass = ["1234", "1235", "1236"];
let allBalances = [500, 123.50, 100];
let accountNum = -1;

function setup() {
  let sketch = createCanvas(800, 600);
    sketch.parent("mycanvas");
  background(200,0,80);
  textSize(15);
  fill(255);
  text("Press e to enter your account info.", 50, 100);
}

function draw() {
//leave draw empty
}//end draw

function keyPressed() {
  background(200,0,80);
  textSize(15);
  fill(255);
  text("Press e to enter your account info.", 50, 100);
  if(key==='e'){
    let account = window.prompt("What is your username?");
    let pass = window.prompt("What is your password?");
    accountNum = login( allNames, allPass, account, pass );
    if(accountNum===-1){
      text("Invalid username or password.", 50, 130);
    }
  }//e
  
  if(accountNum != -1) {
    text("Press b to print your balance.", 50, 130);
    text("Press d to deposit", 50, 150);
    text("Press w to withdraw", 50, 170);
  }

  if(key === 'b'){
    text("Your balance is: $"+ allBalances[accountNum], 50, 190 );
  }
  
  if (key === 'd'){
    allBalances[accountNum] = deposit(
    allBalances[accountNum] );
  }
  
  if (key === 'w'){
    allBalances[accountNum] = withdraw(
    allBalances[accountNum] );
  }
}//end keyPressed

function withdraw(balance){
  let dollars = 1*window.prompt("How much do you want to withdraw?");
  dollars += 0.50;
  if( balance >= dollars ){
    balance -= dollars;
    return balance;
  } else {
    text("Insufficient funds. ", 50, 190);
    return balance;
  }
}//end deposit

function deposit(balance){
  let dollars = 1*window.prompt("How much are you depositing?");
  return balance + dollars;
}//end deposit

function login( usernames, passwords, u, p ){
  for(let i=0; i<usernames.length; i++){
    if( usernames[i]===u && passwords[i]===p ){
      return i;
    }
  }
  return -1;
}//end login
