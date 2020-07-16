
function palavraPalindromo(string){


    var strLength = string.length;

        for(let i = 0; i < strLength/2; i++){
            if(string[i] !== string[strLength - 1 - i]){
                return false;
    } //if
} // for
return true;
} // function

console.log(palavraPalindromo("arara"))