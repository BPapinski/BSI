var expresion = "0";
var lastCharIsSymbol = false;
var hasComma = false;

function clearDisplay(){
    expresion = "0"
    document.getElementById("expression").innerHTML = expresion
}

function createdWithZeros(value){
    for(var i = 0; i<value.length; i++){
        if(value[i] != 0){
            return false;
        }
    }
    return true;

}

function numberClicked(number){
    if(expresion.length >= 20){
        alert("you can enter no more than 20 characters")
        return;
    }
    if(createdWithZeros(expresion) && number == 0){
        alert("that make no sense")
        return;
        
    }
    if (expresion === "0") {
        expresion = number.toString(); // Zastąp zerem
    } else {
        expresion += number; // Dodaj liczbe
    }
    lastCharIsSymbol = false;
    document.getElementById("expression").innerHTML = expresion
}


function symbolClicked(symbol){
    
    if(expresion.length == 0){
        alert("symbol cannot be first character in expression")
        return;
    }
        
    
    if(lastCharIsSymbol){
        expresion = expresion.substring(0, expresion.length-1) // usuwa ostatni znak (symbol)
    }

    lastCharIsSymbol = true;
    expresion += symbol
    document.getElementById("expression").innerHTML = expresion

}


function isSymbol(char) {
    return ["*", "-", "+", "/"].includes(char);
}

function commaClicked(symbol){

    if(expresion.length == 0){
        alert("comma cannot be first character in expression")
        return;
    }

    if(isSymbol(expresion[expresion.length-1])){
        alert("comma cannot be placed just after the symbol")
        return;
    }
    // trzeba sprawdzic czy fragment do ostatniego znaku nie posiada juz kropki
    if(expresion.includes(".")){
        // zawiera kropke
        for(i = expresion.length-1; i>=0; i--){
            if(isSymbol(expresion[i])){
                break;
            }
            if(expresion[i] == "."){
                alert("one number cannot contain two dots in it")
                return;
            }
        }
    }

    // dalej
    if(lastCharIsSymbol){
        expresion = expresion.substring(0, expresion.length-1) // usuwa ostatni znak (symbol)
    }
    lastCharIsSymbol = true;
    expresion += '.'
    document.getElementById("expression").innerHTML = expresion
}

function calculate(){
    expresion = document.getElementById("expression").innerHTML
    //alert("calculating " + expresion)
    if(lastCharIsSymbol){
        alert("finish your expression first")
        return;
    }
    let result = eval(expresion);
    expresion = result;
    //alert("result is: " + result)
    
    document.getElementById("expression").innerHTML = result
}