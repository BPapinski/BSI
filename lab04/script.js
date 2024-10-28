var expresion = "";
var lastCharIsSymbol = false;

function clearDisplay(){
    expresion = ""
    document.getElementById("expression").innerHTML = expresion
}

function foo(){
    alert("foo")
}



function numberClicked(number){
    //alert("clicked number " + number)
    //expresion += " "
    lastCharIsSymbol = false;
    expresion += number

    document.getElementById("expression").innerHTML = expresion
}


function symbolClicked(symbol){
    if(lastCharIsSymbol){
        expresion = expresion.substring(0, expresion.length-1) // usuwa ostatni znak (symbol)
    }
    lastCharIsSymbol = true;
    expresion += symbol
    document.getElementById("expression").innerHTML = expresion
}

function calculate(){
    expresion = document.getElementById("expression").innerHTML
    //alert("calculating " + expresion)

    let result = eval(expresion);
    expresion = result;
    //alert("result is: " + result)
    
    document.getElementById("expression").innerHTML = result
}