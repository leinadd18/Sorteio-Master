
function geradorDeNumero(){
    const min = Math.ceil(document.getElementById("input-min").value)
    const max = Math.floor(document.getElementById("input-max").value)
    const texto = document.querySelector(".result")

    const resultado = Math.floor(Math.random() * (max - min + 1)) + min;

    if(min <= max){
        texto.innerHTML = resultado
    }
    if(min >= max ){
        alert("Erro: Número menor primeiro")
    }

}