let boxes=document.querySelectorAll(".items");
let currentplayer="X";

boxes.forEach(function(box){
    box.addEventListener("click" , function(){
         if(box.innerText !== "") {
            return;
        }
        box.innerText=currentplayer;
        checkwin();

        if(currentplayer==='X'){
            currentplayer='O';
        }
        else{
            currentplayer='X';
        }
    });

});
// check for winning function
function checkwin(){
    let winpatterns=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for(let i=0;i<winpatterns.length;i++){
        let a=winpatterns[i][0];
        let b=winpatterns[i][1];
        let c=winpatterns[i][2];
        if(boxes[a].innerText!="" && boxes[a].innerText===boxes[b].innerText && boxes[b].innerText===boxes[c].innerText){
            alert(currentplayer+"wins!");
            return;
        }

    }
   }