function enterdraw(){
 var number = Math.floor(Math.random()*3);
    if (number==2){
        alert("You win a new ipad")
        
        
    } else{
        prompt("you lose, do you want to play again?")
        
    }
}
function setText(){
    var name = document.getElementById("firstname").value;
    document.getElementById("welcomemessage").innerHTML =
        'Thank you ' + name;
}