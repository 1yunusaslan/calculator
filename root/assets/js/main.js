const button = document.getElementsByTagName("button");
const result = document.getElementById("input-result");
const calculate = document.getElementById("calculate");
const clear = document.getElementById("clear");

for (let i = 0; i < button.length; i++) {
    if(i!=12 && i!=14){
        button[i].addEventListener("click",write);
    }
   
}

function write() {  
    result.value=result.value+this.value;
}

calculate.addEventListener("click",inputCalc);

function inputCalc(){
    result.value = eval(result.value);
}

clear.addEventListener("click",inputClear);

function inputClear(){
    result.value="";
}



