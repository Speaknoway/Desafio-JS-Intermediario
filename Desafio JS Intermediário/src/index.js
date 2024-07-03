const caixaDeTexto = document.querySelectorAll(".dadosDoCliente");
const enviarForm = document.getElementById("formulario");
console.log(caixaDeTexto)
const aviso = document.querySelectorAll(".aviso")

console.log(aviso)


enviarForm.addEventListener("submit", function(event) {
    event.preventDefault();

    caixaDeTexto.forEach(informacoes =>{
        if(informacoes.value === ""){
            informacoes.classList.add("nao-preenchido");    
        }else{
            informacoes.classList.add("preenchido");
            informacoes.classList.remove("nao-preenchido");
        }
    })
    

});

