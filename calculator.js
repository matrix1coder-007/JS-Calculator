var varBool = false;
document.getElementById("button-clicked-error").style.visibility = "hidden";

function speakProcedure() {
    var msg = new SpeechSynthesisUtterance("Hi! Welcome to Cal-Curator... I am curator-bot. I will tell you next how to use this program. Just type in the two numbers. Click on any of the operations you want to do. Then see for yourself the result.");
    speechSynthesis.speak(msg);    
}

function extractValues() {
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);
    return [a, b]
}

function addNums() {
    [num1, num2] = extractValues();
    setResult(num1 + num2)
}

function subtractNums() {
    [num1, num2] = extractValues();
    setResult(num1 - num2)
}

function multiplyNums() {
    [num1, num2] = extractValues();
    setResult(num1 * num2)
}

function divideNums() {
    [num1, num2] = extractValues();
    setResult(num1 / num2)
}

function moduloRemainderNums() {
    [num1, num2] = extractValues();
    setResult(num1 % num2)
};

function percentageNums() {
    [num1, num2] = extractValues();
    setResult((num1*100)/num2)
}

function underRootNums() {
    [num1, num2] = extractValues();
    setResult(Math.pow(num1, num2))
}

function clearNums() {
    document.getElementById("num1").value = ''
    document.getElementById("num2").value = ''
}

function setResult(answer) {
    if (isNaN(answer)) {
        document.getElementById("button-clicked-error").style.visibility = "visible";
        speakProcedure()
    }
    else {
        document.getElementById("result").innerHTML = answer;
        displayResult(true)
    }
}

function displayRefresh() {
    varBool = false;
    if (!varBool)  {
        document.getElementById("button-clicked").style.visibility = "hidden";
        document.getElementById("button-clicked-error").style.visibility = "hidden";
    }
    clearNums()
}

function displayResult(valBool) {
    if (valBool)  {
        document.getElementById("button-clicked").style.visibility = "visible";
        document.getElementById("button-clicked-error").style.visibility = "hidden";
    }
}

if (!varBool)  {
    document.getElementById("button-clicked").style.visibility = "hidden";
}
