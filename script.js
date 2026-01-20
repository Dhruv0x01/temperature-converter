// C TO F 

const convBtnc = document.getElementById("convertc");
const resBtnc = document.getElementById("resetc");
const changeBtnc = document.getElementById("changec");

if(convBtnc){
    convBtnc.onclick = function(){
    let input = Number(document.getElementById("inputc").value); // ye under so convert btn ke click pe save ho
    let result = (input*(9/5)) + 32;
    result = Math.round(result*100)/100;   // to get rounded for two digit
    document.getElementById("resultc").textContent = `${input}°C to ${result}°F`;
};

resBtnc.onclick = function(){  // clear result text and clear input field
    document.getElementById("inputc").value = "";  // cleared input field
    document.getElementById("resultc").textContent = ""; // result content resetted 
};

changeBtnc.onclick = function(){
    window.location.href = "./ftoc.html";
  };

}

// F TO C
const convBtnf = document.getElementById("convertf");
const resBtnf = document.getElementById("resetf");
const changeBtnf = document.getElementById("changef");

if(convBtnf) {
    convBtnf.onclick = function(){
        let input = Number(document.getElementById("inputf").value); // ye under so convert btn ke click pe save ho
        result = (input-32) * 5/9;
        result = Math.round(result*100)/100;   // to get rounded for two digit
        document.getElementById("resultf").textContent = `${input}°F to ${result}°C`;
};
resBtnf.onclick = function(){
    document.getElementById("inputf").value = "";  // cleared input field
    document.getElementById("resultf").textContent = ""; // cleared result text
};

changeBtnf.onclick = function(){
    window.location.href = "./index.html"; 
};

    
}

