//Definindo variáveis e constante
const form = document.getElementById("form-deposito");
const campoA = document.getElementById("campo-a");
const campoB = document.getElementById("campo-b");
const btn = document.getElementById('btn')

//Constante ligada a tag <p> com o id mensagem-resposta
const mensagemResposta = document.getElementById("mensagem-resposta")
//Constante ligada a tag <p> com o id mensagem-erro
const mensagemErro = document.getElementById("mensagem-erro");

//Validação do Formulário
let formEValido = false

//Mensagem caso B seja maior que A
const mensagemCasoB = `O valor do campo <b>B</b> é maior que o valor do campo <b>A</b>`
//Mensagem caso A seja maior que B
const mensagemCasoA = `O campo A não pode ser maior ou igual!`

function validaCampo(campo1, campo2)
{
    const resultado = parseFloat(campo1.value) > parseFloat(campo2.value)
    return resultado
}

//Faz com que o aviso 
campoA.addEventListener('keyup', function()
{
    formEValido = validaCampo(campoB, campoA)
    if (!formEValido)
    {   
        mensagemErro.innerHTML= mensagemCasoA;
        mensagemErro.style.display = "block";
        campoA.classList.add('error')
    }
    else
    {
        campoA.classList.remove('error')
        mensagemErro.style.display = "none";
    }
})

//Alterando a função do botão enviar
form.addEventListener("submit", function(e)
{
    //Evitando a função padrão do botão enviar
    e.preventDefault();

    formEValido = validaCampo(campoB, campoA)
    
    if(formEValido)
    {
        mensagemResposta.innerHTML= mensagemCasoB;
        mensagemResposta.style.display = "block";
    }
})

