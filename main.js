
function brinquedo(){
    alert("Bem vindo(a) ao parque!");
    let altura = Number(prompt("Por favor, insira a sua altura para ter acesso ao brinquedo: "));
    if(altura > 1.50){
        alert("Divirta-se!");
    }
    else{
        alert("Acesso bloqueado, por favor tente outro brinquedo.");
    }
}
function loja(){
    alert("Bem vindo à loja!");
    let estoque = Number(prompt("Digite o número de produtos que deseja comprar: "));
    if(estoque < 5){
        alert("Sinto muito, estoque está baixo.");
    }
    else{
        alert("Tudo em ordem, prossiga com a compra.");
    }
}

//ex3
function desconto(){
    let valores = Number(prompt("Insira um valor para ser avaliado: "))
    if(valores < 756.5){
        alert("Está isento");
    }
    else{
        alert("Será aplicado uma taxa de 10%");
    }
}
