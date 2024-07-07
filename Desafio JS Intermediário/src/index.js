
const caixaDeTexto = document.querySelectorAll(".dadosDoCliente");
const enviarForm = document.getElementById("formulario");
const esconder = document.querySelectorAll(".esconder")


enviarForm.addEventListener("submit", function(event) {
    event.preventDefault();

    caixaDeTexto.forEach(informacoes =>{
        const aviso = informacoes.nextElementSibling;
        
        if(informacoes.value === ""){
            informacoes.classList.add("nao-preenchido"); 
            aviso.classList.remove("esconder");
            
        }else{
            informacoes.classList.add("preenchido");
            informacoes.classList.remove("nao-preenchido");
            aviso.classList.add("esconder");
        }
    })
});