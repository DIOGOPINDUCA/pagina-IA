const caixaPrincipal = document.querySelector (".caixa-principal");
const caixaPerguntas = document.querySelector (".caixa-perguntas");
const caixaAlternativas = document.querySelector (".caixa-alternativas");
const caixaResultados = document.querySelector (".caixa-resultados");
const textoResultados = document.querySelector (".texto-resultados");

const perguntas = [
    {
        enunciado: "Quem é o maior artilheiro da Selecao Brasileira em jogos oficiais?",
        
        alternativas: [
            {
                texto:"Neymar",
                afirmacao:"afirmação"
            },
            {
                texto:"Pelé",
                afirmacao:"afirmação"
            },
        ] 
    },
    {
            enunciado: "Quantos gols oficiais Neymar Jr tem pela Seleção Brasileira? ",
        
            alternativas: [
                {
                    texto:  "79",
                    afirmacao:"afirmação"
                },
               {
                texto:  "63",
                afirmacao:"afirmação"
               },
            ] 
    },
    {
        
        enunciado: "Quando Neymar Jr fez sua estreia pela Seleção principal?",
        
        alternativas: [
            {
                texto:"2010",
                afirmacao: "afirmação"  
            },
            {
                texto:"2011",
                afirmacao:"afirmação"
            },
        ] 
    },
{
    enunciado: "Quando Neymar Jr ganhou seu único título com a Seleção Brasileira principal?",

    alternativas: [
        {
            texto: "2013",
            afirmacao: "afirmação"
        },
        {
            texto:  "2015",
            afirmacao: "afirmação"
        },
    ] 
},
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        });
        caixaAlternativas.appendChild (botaoAlternativas);
    }
}

mostraPergunta();
