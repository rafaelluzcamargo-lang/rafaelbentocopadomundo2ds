/* ==========================
CONTADOR COPA 2026
========================== */

const contador = document.getElementById("contador");

if (contador) {

```
const dataCopa = new Date("June 11, 2026 00:00:00").getTime();

const atualizarContador = () => {

    const agora = new Date().getTime();

    const distancia = dataCopa - agora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (distancia % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (distancia % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundos = Math.floor(
        (distancia % (1000 * 60))
        / 1000
    );

    contador.innerHTML =
        `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    if (distancia <= 0) {

        contador.innerHTML =
        "⚽ A Copa do Mundo 2026 começou!";
    }
};

atualizarContador();

setInterval(atualizarContador, 1000);
```

}

/* ==========================
MODO ESCURO
========================== */

const botaoModoEscuro =
document.getElementById("modoEscuro");

if (botaoModoEscuro) {

```
const temaSalvo =
localStorage.getItem("tema");

if (temaSalvo === "dark") {

    document.body.classList.add("dark");

    botaoModoEscuro.innerHTML = "☀️";
}

botaoModoEscuro.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (
        document.body.classList.contains("dark")
    ) {

        localStorage.setItem("tema", "dark");

        botaoModoEscuro.innerHTML = "☀️";

    } else {

        localStorage.setItem("tema", "light");

        botaoModoEscuro.innerHTML = "🌙";
    }
});
```

}

/* ==========================
BOTÃO VOLTAR AO TOPO
========================== */

const btnTopo =
document.getElementById("btnTopo");

window.addEventListener("scroll", () => {

```
if (!btnTopo) return;

if (window.scrollY > 400) {

    btnTopo.style.display = "block";

} else {

    btnTopo.style.display = "none";
}
```

});

if (btnTopo) {

```
btnTopo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"
    });
});
```

}

/* ==========================
ANIMAÇÃO DOS CARDS
========================== */

const cards =
document.querySelectorAll(".card");

const observer = new IntersectionObserver(

(entries) => {

```
entries.forEach((entry) => {

    if (entry.isIntersecting) {

        entry.target.style.opacity = "1";

        entry.target.style.transform =
        "translateY(0)";
    }
});
```

},

{
threshold: 0.2
}
);

cards.forEach((card) => {

```
card.style.opacity = "0";

card.style.transform =
"translateY(40px)";

card.style.transition =
"all 0.8s ease";

observer.observe(card);
```

});

/* ==========================
QUIZ
========================== */

const perguntas = [

{
pergunta:
"Qual seleção possui mais títulos da Copa do Mundo?",

opcoes:
["Brasil","Alemanha","Argentina","Itália"],

resposta:
"Brasil"
},

{
pergunta:
"Qual país sediou a primeira Copa do Mundo?",

opcoes:
["Brasil","Argentina","Uruguai","França"],

resposta:
"Uruguai"
},

{
pergunta:
"Quem foi campeão da Copa de 2022?",

opcoes:
["França","Brasil","Argentina","Croácia"],

resposta:
"Argentina"
},

{
pergunta:
"Quantos títulos o Brasil possui?",

opcoes:
["3","4","5","6"],

resposta:
"5"
},

{
pergunta:
"Quem criou a Copa do Mundo?",

opcoes:
["Pelé","Jules Rimet","FIFA","João Havelange"],

resposta:
"Jules Rimet"
}

];

let perguntaAtual = 0;
let pontuacao = 0;

const perguntaElemento =
document.getElementById("pergunta");

const opcoesElemento =
document.getElementById("opcoes");

const resultadoElemento =
document.getElementById("resultado");

function carregarPergunta() {

```
if (
    !perguntaElemento ||
    !opcoesElemento
) return;

const pergunta =
perguntas[perguntaAtual];

perguntaElemento.innerHTML =
pergunta.pergunta;

opcoesElemento.innerHTML = "";

pergunta.opcoes.forEach((opcao) => {

    const botao =
    document.createElement("button");

    botao.innerText = opcao;

    botao.classList.add("opcaoQuiz");

    botao.onclick = () =>
    verificarResposta(opcao);

    opcoesElemento.appendChild(botao);
});
```

}

function verificarResposta(resposta) {

```
if (
    resposta ===
    perguntas[perguntaAtual].resposta
) {

    pontuacao++;
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
```

}

function mostrarResultado() {

```
if (
    !resultadoElemento ||
    !opcoesElemento
) return;

perguntaElemento.innerHTML =
"Quiz Finalizado!";

opcoesElemento.innerHTML = "";

resultadoElemento.innerHTML =

`Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;
```

}

if (
perguntaElemento &&
opcoesElemento
) {

```
carregarPergunta();
```

}

/* ==========================
HEADER DINÂMICO
========================== */

const header =
document.querySelector("header");

window.addEventListener("scroll", () => {

```
if (!header) return;

if (window.scrollY > 80) {

    header.style.padding =
    "12px 8%";

} else {

    header.style.padding =
    "18px 8%";
}
```

});

/* ==========================
ANO AUTOMÁTICO RODAPÉ
========================== */

const rodape =
document.getElementById("anoAtual");

if (rodape) {

```
rodape.innerHTML =
new Date().getFullYear();
```

}

