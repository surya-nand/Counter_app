let data = 0;
console.log("whoy");

document.getElementById("number").innerHTML = data;

function Increment(){
    data+=1;
    document.getElementById("number").innerHTML = data;
}

function Decrement(){
    data-=1;
    if (data<0) {
        data = 0;
    }
    document.getElementById("number").innerHTML = data;

}

function Reset(){
    data = 0;
    document.getElementById("number").innerHTML = data;
}


let increment = document.getElementById("increase");
increment.addEventListener("click",Increment);

let decrement = document.getElementById("decrease");
decrement.addEventListener("click",Decrement);

let reset = document.getElementById("reset");
reset.addEventListener("click",Reset);