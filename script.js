

function login() {

    let usuario =
        document.getElementById("usuario").value;

    let senha =
        document.getElementById("senha").value;


    if (usuario === "admin" && senha === "1234") {

        document.getElementById("loginSection")
            .style.display = "none";

        document.getElementById("dashboard")
            .classList.remove("hidden");

    } else {

        alert("Usuário ou senha incorretos!");

    }

}



function logout() {

    document.getElementById("dashboard")
        .classList.add("hidden");

    document.getElementById("loginSection")
        .style.display = "flex";

    document.getElementById("usuario").value = "";
    document.getElementById("senha").value = "";

}



function mostrarPagina(pagina, botao) {

    let paginas =
        document.querySelectorAll(".pagina");

    paginas.forEach(function(item) {

        item.classList.add("hidden");

    });


    document
        .getElementById(pagina)
        .classList.remove("hidden");


    let botoes =
        document.querySelectorAll(".menu-btn");

    botoes.forEach(function(item) {

        item.classList.remove("active");

    });


    botao.classList.add("active");

}



function adicionarCrianca() {

    let nome =
        document.getElementById("nome").value.trim();

    let idade =
        document.getElementById("idade").value;

    let responsavel =
        document
        .getElementById("responsavel")
        .value
        .trim();

    let tipo =
        document.getElementById("tipo").value;


    if (
        nome === "" ||
        idade === "" ||
        responsavel === "" ||
        tipo === ""
    ) {

        alert("Preencha todos os campos!");

        return;
    }


    let tabela =
        document.getElementById("tabelaCriancas");


    let novaLinha =
        tabela.insertRow();


    novaLinha.innerHTML = `

        <td>${nome}</td>

        <td>${idade}</td>

        <td>${responsavel}</td>

        <td>${tipo}</td>

        <td>

            <button
                class="delete-btn"
                onclick="excluirLinha(this)"
            >
                Excluir
            </button>

        </td>

    `;


    atualizarTotal();

    limparCamposCrianca();

}


function limparCamposCrianca() {

    document.getElementById("nome").value = "";

    document.getElementById("idade").value = "";

    document.getElementById("responsavel").value = "";

    document.getElementById("tipo").value = "";

}


function excluirLinha(botao) {

    let linha =
        botao.parentElement.parentElement;


    linha.remove();


    atualizarTotal();

}



function atualizarTotal() {

    let total =
        document
        .querySelectorAll("#tabelaCriancas tr")
        .length;


    document
        .getElementById("totalCriancas")
        .innerText = total;


    let mensagem =
        document.getElementById("semCriancas");


    if (total === 0) {

        mensagem.style.display = "block";

    } else {

        mensagem.style.display = "none";

    }

}



function adicionarAtividade() {

    let nome =
        document
        .getElementById("nomeAtividade")
        .value
        .trim();

    let categoria =
        document
        .getElementById("categoriaAtividade")
        .value;

    let descricao =
        document
        .getElementById("descricaoAtividade")
        .value
        .trim();


    if (
        nome === "" ||
        categoria === "" ||
        descricao === ""
    ) {

        alert("Preencha todos os campos da atividade!");

        return;
    }


    let lista =
        document.getElementById("listaAtividades");


    let mensagem =
        document.getElementById("semAtividades");


    mensagem.style.display = "none";


    let card =
        document.createElement("div");


    card.className = "activity-card";


    let emoji = "🎯";


    if (categoria === "Sensorial") {
        emoji = "🎨";
    }

    if (categoria === "Emoções") {
        emoji = "🌙";
    }

    if (categoria === "Auditivo") {
        emoji = "🎧";
    }


    card.innerHTML = `

        <div class="emoji">
            ${emoji}
        </div>

        <span class="categoria">
            ${categoria}
        </span>

        <h3>
            ${nome}
        </h3>

        <p>
            ${descricao}
        </p>

        <button
            class="delete-btn"
            onclick="excluirAtividade(this)"
        >
            Excluir
        </button>

    `;


    lista.appendChild(card);


    atualizarTotalAtividades();


    document.getElementById("nomeAtividade").value = "";

    document.getElementById("categoriaAtividade").value = "";

    document.getElementById("descricaoAtividade").value = "";

}



function excluirAtividade(botao) {

    botao.parentElement.remove();

    atualizarTotalAtividades();

}



function atualizarTotalAtividades() {

    let total =
        document
        .querySelectorAll(
            "#listaAtividades .activity-card"
        )
        .length;


    document
        .getElementById("totalAtividades")
        .innerText = total;


    let mensagem =
        document.getElementById("semAtividades");


    if (total === 0) {

        mensagem.style.display = "block";

    } else {

        mensagem.style.display = "none";

    }

}



function adicionarSessao() {

    let nome =
        document
        .getElementById("nomeSessao")
        .value
        .trim();

    let data =
        document
        .getElementById("dataSessao")
        .value;

    let atividade =
        document
        .getElementById("atividadeSessao")
        .value;


    if (
        nome === "" ||
        data === "" ||
        atividade === ""
    ) {

        alert("Preencha todos os campos da sessão!");

        return;
    }


    let tabela =
        document.getElementById("tabelaSessoes");


    let novaLinha =
        tabela.insertRow();


    let dataFormatada =
        formatarData(data);


    novaLinha.innerHTML = `

        <td>${nome}</td>

        <td>${dataFormatada}</td>

        <td>${atividade}</td>

        <td>

            <button
                class="delete-btn"
                onclick="excluirSessao(this)"
            >
                Excluir
            </button>

        </td>

    `;


    atualizarTotalSessoes();


    document.getElementById("nomeSessao").value = "";

    document.getElementById("dataSessao").value = "";

    document.getElementById("atividadeSessao").value = "";

}


function formatarData(data) {

    let partes =
        data.split("-");


    return (
        partes[2] +
        "/" +
        partes[1] +
        "/" +
        partes[0]
    );

}



function excluirSessao(botao) {

    botao.parentElement.parentElement.remove();

    atualizarTotalSessoes();

}



function atualizarTotalSessoes() {

    let total =
        document
        .querySelectorAll("#tabelaSessoes tr")
        .length;


    document
        .getElementById("totalSessoes")
        .innerText = total;


    let mensagem =
        document.getElementById("semSessoes");


    if (total === 0) {

        mensagem.style.display = "block";

    } else {

        mensagem.style.display = "none";

    }

}



function alternarModoEscuro() {

    let checkbox =
        document.getElementById("modoEscuro");


    if (checkbox.checked) {

        document.body.classList.add("dark");

    } else {

        document.body.classList.remove("dark");

    }

}



function alterarSenha() {

    let novaSenha =
        prompt("Digite a nova senha:");

    if (novaSenha === null) {
        return;
    }

    if (novaSenha.trim() === "") {

        alert("A senha não pode ficar vazia!");

        return;
    }

    alert(
        "Senha alterada nesta sessão!"
    );

}



document.addEventListener(
    "DOMContentLoaded",
    function() {

        atualizarTotal();

        atualizarTotalAtividades();

        atualizarTotalSessoes();

    }
);