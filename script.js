
var title=document.createElement("h1")
title.innerHTML="Calculator"
var description=document.createElement("P")
description.innerHTML="This is calculator program"
var container=document.createElement("div")
container.innerHTML=` <div class="calculator">
<input type="text" placeholder="0" id="result">
<button onclick="Clear()" id="clear">Cl</button>
<button onclick="del()" id="delete">DEL</button>
<button onclick="display('%')">%</button>
<button onclick="display('/')">/</button>
<button onclick="display('7')" id="7">7</button>
<button onclick="display('8')" id="8">8</button>
<button onclick="display('9')" id="9">9</button>
<button onclick="display('*')">*</button>
<button onclick="display('4')" id="4">4</button>
<button onclick="display('5')" id="5">5</button>
<button onclick="display('6')" id="6">6</button>
<button onclick="display('-')"id="subtract">-</button>
<button onclick="display('1')" id="1">1</button>
<button onclick="display('2')" id="2">2</button>
<button onclick="display('3')" id="3">3</button>
<button onclick="display('+') " id="add">+</button>
<button onclick="display('.')">.</button>
<button onclick="display('0')" id="0">0</button>
<button onclick="Calculate()"class="equal" id="equal">=</button>
</div>
</div>     `

document.body.append(title,description,container)

let output=document.getElementById("result");
function display(num){
    output.value +=num;
}
function Calculate(){
    try{
        output.value=eval(output.value);
    }
    catch(err){
        alert("Invalid");
    }

}
function Clear(){
    output.value= "";
}
function del(){
    output.value=output.value.slice(0,-1);
}



let val = document.getElementById("result");
console.log(val);
val.addEventListener("keydown", function(event){

  if(event.key === "1"||
     event.key === "2"||
     event.key === "3"||
     event.key === "4"||
     event.key === "5"||
     event.key === "6"||
     event.key === "7"||
     event.key === "8"||
     event.key === "9"||
     event.key === "0"){
    
  }

  else if(event.key === "Delete"){
     clr(event.key);
  }

  else if(event.key ==="Backspace"){
     del(event.key);
  }
    
  else{
    alert("Please Enter the Number");
    event.preventDefault();
  }
})