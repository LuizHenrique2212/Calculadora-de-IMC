//Função que armazena os inputs em um objeto.
function ArmazenaDados(){
    const Dados_do_usuario = {
        nome: document.querySelector("#nome").value,
        altura: document.querySelector("#altura").value,
        peso: document.querySelector("#peso").value,
    };
    //Checa se todos os campos estão preenchidos.
    if(nome.value == '' || altura.value == '' || peso.value == ''){
        return alert("Preencha todos os campos!");
    }
    else 
        return Dados_do_usuario;
};

//Função que recebe dois parametros e retornando o IMC.
function CalculaIMC(altura,peso){
    //tratando a entrada caso o usuário digite a altura em centímetros.
    if(altura %1 == 0){
        altura = altura/100;
    }
    let altura_quadrado = Math.pow(altura,2);
    let imc = peso / altura_quadrado;
    return imc.toFixed(2);
};

//Coloca a div em uma variável e esconde seu contaúdo
let hidden = document.querySelector("#hidden");
hidden.style.display = "none";

const botao = document.querySelector("#botão");
//Condicionando ações para ocorrer após pressionar o botão.
botao.addEventListener('click',function(){   
    const ValorDados = ArmazenaDados();
    const IMC = CalculaIMC(ValorDados.altura, ValorDados.peso);

    //Mostrar a tabela de resultados somente após preccionar o botão.
    MostraTabela(hidden);

    //Mostra o nome e o IMC obtidos, atualizados na tabela.
    document.querySelector("#nome_resultado").innerHTML = ValorDados.nome;
    document.querySelector("#imc_resultado").innerHTML = IMC;

    //animação
    hidden.style.animation = '';
    setTimeout(() => hidden.style.animation = 'deslizar 1s linear', 5);
});

//Função para mostrar a tabela.
function MostraTabela(hidden){
    console.log(hidden);
    hidden.style.display = "block";    
}
