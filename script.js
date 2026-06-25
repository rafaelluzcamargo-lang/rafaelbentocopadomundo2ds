/* ===================================
   MUSEU DAS COPAS DO MUNDO
   SCRIPT PRINCIPAL
=================================== */

/* ===================================
   BOTÃO VOLTAR AO TOPO
=================================== */

const btnTopo = document.getElementById("topo");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        btnTopo.style.opacity = "1";
        btnTopo.style.visibility = "visible";

    } else {

        btnTopo.style.opacity = "0";
        btnTopo.style.visibility = "hidden";
    }
});

btnTopo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/* ===================================
   HEADER DINÂMICO
=================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        header.style.background =
        "rgba(255,255,255,0.98)";

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.15)";

    } else {

        header.style.background =
        "rgba(255,255,255,.95)";

        header.style.boxShadow =
        "0 2px 15px rgba(0,0,0,.08)";
    }

});

/* ===================================
   QUIZ DA COPA
=================================== */

const perguntas = [

{
pergunta:
"Qual seleção possui mais títulos da Copa do Mundo?",

opcoes:
["Brasil", "Alemanha", "Argentina", "Itália"],

resposta:
"Brasil"
},

{
pergunta:
"Onde foi realizada a primeira Copa do Mundo?",

opcoes:
["Brasil", "Uruguai", "Argentina", "França"],

resposta:
"Uruguai"
},

{
pergunta:
"Quem foi campeão da Copa do Mundo de 2022?",

opcoes:
["França", "Brasil", "Argentina", "Croácia"],

resposta:
"Argentina"
},

{
pergunta:
"Quem é o maior artilheiro da história das Copas?",

opcoes:
["Pelé", "Messi", "Klose", "Ronaldo"],

resposta:
"Klose"
},

{
pergunta:
"Quantos títulos possui o Brasil?",

opcoes:
["4", "5", "6", "7"],

resposta:
"5"
}

];

let perguntaAtual = 0;
let pontos = 0;

const perguntaElemento =
document.getElementById("pergunta");

const opcoesElemento =
document.getElementById("opcoes");

const resultadoElemento =
document.getElementById("resultado");

function carregarPergunta() {

    if (
        !perguntaElemento ||
        !opcoesElemento
    ) return;

    const pergunta =
    perguntas[perguntaAtual];

    perguntaElemento.innerHTML =
    pergunta.pergunta;

    opcoesElemento.innerHTML = "";

    pergunta.opcoes.forEach(opcao => {

        const botao =
        document.createElement("button");

        botao.innerText = opcao;

        botao.addEventListener(
            "click",
            () => verificarResposta(opcao)
        );

        opcoesElemento.appendChild(botao);

    });

}

function verificarResposta(resposta) {

    if (
        resposta ===
        perguntas[perguntaAtual].resposta
    ) {

        pontos++;

    }

    perguntaAtual++;

    if (
        perguntaAtual <
        perguntas.length
    ) {

        carregarPergunta();

    } else {

        mostrarResultado();

    }

}

function mostrarResultado() {

    perguntaElemento.innerHTML =
    "Quiz Finalizado!";

    opcoesElemento.innerHTML = "";

    let mensagem = "";

    if (pontos === 5) {

        mensagem =
        "🏆 Perfeito! Você é um especialista em Copas do Mundo.";

    } else if (pontos >= 3) {

        mensagem =
        "⚽ Muito bem! Você conhece bastante sobre a história das Copas.";

    } else {

        mensagem =
        "📚 Continue estudando para se tornar um craque da história das Copas.";
    }

    resultadoElemento.innerHTML =

    `
    <strong>Você acertou ${pontos} de ${perguntas.length} perguntas.</strong>
    <br><br>
    ${mensagem}
    `;
}

if (
    perguntaElemento &&
    opcoesElemento
) {

    carregarPergunta();

}

/* ===================================
   ANIMAÇÃO AO APARECER
=================================== */

const elementos =
document.querySelectorAll(
'.card, .evento, .quiz-box'
);

const observador =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0)";
        }

    });

},

{
    threshold: 0.15
}

);

elementos.forEach(elemento => {

    elemento.style.opacity = "0";

    elemento.style.transform =
    "translateY(40px)";

    elemento.style.transition =
    "all .8s ease";

    observador.observe(elemento);

});

/* ===================================
   MENU ATIVO
=================================== */

const secoes =
document.querySelectorAll("section");

const links =
document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let atual = "";

    secoes.forEach(secao => {

        const topo =
        secao.offsetTop - 150;

        const altura =
        secao.offsetHeight;

        if (
            window.scrollY >= topo &&
            window.scrollY < topo + altura
        ) {

            atual = secao.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("ativo");

        if (
            link.getAttribute("href")
            === "#" + atual
        ) {

            link.classList.add("ativo");

        }

    });

});

/* ===================================
   EFEITO DE DIGITAÇÃO NO HERO
=================================== */

const tituloHero =
document.querySelector(".hero h1");

if (tituloHero) {

    const textoOriginal =
    tituloHero.textContent;

    tituloHero.textContent = "";

    let indice = 0;

    function escrever() {

        if (
            indice <
            textoOriginal.length
        ) {

            tituloHero.textContent +=
            textoOriginal.charAt(indice);

            indice++;

            setTimeout(
                escrever,
                50
            );
        }

    }

    escrever();

}

/* ===================================
   ANO AUTOMÁTICO NO RODAPÉ
=================================== */

const anoAtual =
new Date().getFullYear();

console.log(
`Museu das Copas © ${anoAtual}`
);

