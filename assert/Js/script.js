
let nome = window.document.getElementById('txtNome')
let email = document.querySelector('#txtEmail')
let senha = document.querySelector('#txtSenha')
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

function validaSenha(){
   let txtSenha = document.querySelector('#txtSenha')
   if(senha.value.length < 2){
       txtSenha.innerHTML = 'Por favor escreva um texto de no minimo 2 caracteres'
       txtSenha.style.color= 'red'
       txtSenha.style.display = 'block'
   }else {
    txtSenha.style.color= 'green'
    senhaOk= true
   }
}

function enviar(){
    console.log(nomeOk)
    console.log(emailOk)
    console.log(senhaOk)
    if (nomeOk == true && emailOk == true && senhaOk == true){
        alert('Formulario enviado com sucesso!')
    }else {
        alert('Preenchar o formulario corretamente antes de enviar')
    }
} 