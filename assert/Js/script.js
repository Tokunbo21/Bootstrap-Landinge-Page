
let nome = window.document.getElementsByName('Nome')
let email = document.querySelector('email')
let senha = document.querySelector('Senha')
let nomeOk = false
let emailOk = false
let senhaOk = false


function validaNome(){
    let txtNome= document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
    }else  {
        txtNome.innerHTML= 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk= true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@')== -1 ||email.value.indexOf('.')== -1){

    
        txtEmail.innerHTML= 'E-mail inválido, por favor coloque o "@"'
        txtEmail.style.color= 'red'
    }else {
        txtEmail.innerHTML= 'E-mail Válido'
        txtEmail.style.color= 'green'
        emailOk= true
    }
senhaOk
}

function validaSenha (){
   let txtAssunto = document.querySelector('#txtSenha')
   if(assunto.value.length < 2){
       txtAssunto.innerHTML = 'Por favor escreva um texto de no minimo 2 caracteres'
       txtAssunto.style.color= 'red'
       txtAssunto.style.display = 'block'
   }else {
    txtAssunto.style.display = 'none'
    assuntoOk= true
   }
}

function enviar (){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulario enviado com sucesso!')
    }else {
        alert('Preenchar o formulario corretamente antes de enviar')
    }
} 