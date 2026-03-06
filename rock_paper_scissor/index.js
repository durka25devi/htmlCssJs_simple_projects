const choices=document.querySelectorAll('.choice');
choices.forEach(choice =>{
    choice.addEventListener("click",function(){
        playgame(this.id);
    });
});

let userscore=0;
let machinescore=0;
let msg="";

function playgame(userchoice){
    let options=["rock","paper","scissor"];
    let randomindex=Math.floor(Math.random()*3);
    let machinechoice=options[randomindex];

    document.getElementsByClassName("user-score-para")[0].textContent="Your choice: "+userchoice;
    document.getElementsByClassName("machine-score-para")[0].textContent="Machine's choice: "+machinechoice;

    if(userchoice==="rock"){
        if(machinechoice==="rock"){
            msg="It's a tie!";

        }
        else if(machinechoice==="paper"){
            msg="You lose!";
            machinescore++;
        }
        else{
            msg="You win!";
            userscore++;
        }
    }
    
     if(userchoice==="paper"){
        if(machinechoice==="paper"){
             msg="It's a tie!";

        }
        else if(machinechoice==="scissor"){
            msg="You lose!";
            machinescore++;
        }
        else{
        msg="You win!";
            userscore++;
        }
    }

     if(userchoice==="scissor"){
        if(machinechoice==="scissor"){
            msg="It's a tie!";

        }
        else if(machinechoice==="rock"){
            msg="You lose!";
            machinescore++;
        }
        else{
            msg="You win!";
            userscore++;
        }
    }

    document.getElementById("machine-score").textContent=machinescore;
    document.getElementById("user-score").textContent=userscore;
    document.getElementById("score-para").textContent=msg;
}