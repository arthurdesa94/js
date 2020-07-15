
let n = 4;
let linha = "";
let symbol = "*";
let posicaoColunaInicial = n;

for (let i=0; i<=n; i++){
    for (let j=0; j<n; j++)
    if (j < posicaoColunaInicial){ // vai colocando espacos vazios ate preencher com o *
        linha += " ";
    }
    else {
        linha += symbol;
    }
    console.log(linha);
    linha = "";
    posicaoColunaInicial -=1

}


