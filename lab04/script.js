var expresion = "";
var lastCharIsSymbol = false;
var hasComma = false;

function clearDisplay(){
    expresion = ""
    document.getElementById("expression").innerHTML = expresion
}


function numberClicked(number){
    lastCharIsSymbol = false;
    expresion += number

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


function isSymbol(char){
    if(char == "*"){
        return true;
    }
    else if(char == "-"){
        return true;
    }
    else if(char == "+"){
        return true;
    }
    else if(char == "/"){
        return true;
    }



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
                alert("expression can't have 2 commas in one part")
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

    let result = eval(expresion);
    expresion = result;
    //alert("result is: " + result)
    
    document.getElementById("expression").innerHTML = result
}