let input=document.querySelector(".input_box");
let count=0;
let single_num;
function append(value) {
    single_num=value;
    if(count==1){
        clearAll();
        count=0;
    }
    input.value+=value;
}

function clearOne(){
    if(count!=1){
    input.value=input.value.slice(0,-1);}

}
function clearAll() {
    input.value = "";
}

function calculate() {
    input.value = eval(input.value);
    count=1;
}
