function setup(){
let compnum= floor(random(0,100));
let usernum = -1;
usernum = 1*window.prompt("pick number between 1 and 100");
while(compnum!=usernum){
if(usernum<compnum){
usernum = 1*window.prompt("guess higher");
} else{
usernum = 1*window.prompt("guess lower");
}
}
window.alert("You win. the number was " + usernum)
}//end setup