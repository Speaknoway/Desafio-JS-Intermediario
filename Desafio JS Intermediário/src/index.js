const caixaDeTexto = document.querySelectorAll(".dadosDoCliente");
const enviarForm = document.getElementById("enviarForm");
console.log(caixaDeTexto)



enviarForm.addEventListener("click", function(event) {
    event.preventDefault();

    caixaDeTexto.forEach(informacoes =>{
        if(informacoes.value === ""){
            informacoes.classList.add("nao-preenchido");
            informacoes.classList.remove("esconder")
        }else{
            informacoes.classList.add("preenchido");
        }
    })
    

});
