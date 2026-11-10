const nome = document.querySelector("#nome");
const botaoEditar = document.querySelector("#editar");
const botaoSair = document.querySelector("#sair");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const cidade = document.querySelector("#cidade");
const botaoCancelar = document.querySelector("#cancelar");

const areaFormulario = document.querySelector("#areaFormulario");
const formulario = document.querySelector("#formPerfil");

const perfilNome = document.querySelector("#perfilNome");
const perfilCurso = document.querySelector("#perfilCurso");
const perfilEmail = document.querySelector("#perfilEmail");
const perfilTelefone = document.querySelector("#perfilTelefone");
const perfilCidade = document.querySelector("#perfilCidade");
const perfilDescricao = document.querySelector("#perfilDescricao");




botaoEditar.addEventListener("click", function(){
    const novoNome = prompt("Digite seu nome:");
    if (novoNome !== null && novoNome.trim() !== "") {
        nome.textContent = novoNome.trim();
    }
    const novaCidade = prompt("Digite sua cidade:");
    if (novaCidade !== null && novaCidade.trim() !== "") {
        cidade.textContent = novaCidade.trim();
    }

    const novoTelefone = prompt("Digite seu telefone:");
    if (novoTelefone !== null && novoTelefone.trim() !== "") {
        telefone.textContent = novoTelefone.trim();
    }
});

botaoSair.addEventListener("click", function() {
    const resposta = confirm("Deseja realmente sair do perfil?");
    if (resposta) {
        alert("Você saiu do perfil!");
    }

});

