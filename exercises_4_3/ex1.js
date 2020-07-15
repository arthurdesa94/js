

let n = 4;
let linha = "";
let symbol = "*";

for (let i=0; i<n; i++){
    linha += symbol;
}
for (let i=0; i<n; i++){
    console.log(linha);
}
console.log(linha)


//outra maneira

exibirAsteriscos(4);

    function exibirAsteriscos(linhas){
    
    let padrao = "****";
        for(let linha = 1; linha <= linhas; linha++){
            padrao += ""
            console.log(padrao);
        }

    }