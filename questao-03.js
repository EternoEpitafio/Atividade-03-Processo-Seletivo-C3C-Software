const nota = document.querySelector("#nota");
const la = document.querySelector("#la");
const resultado = document.querySelector("#resultado");
const resolver = document.querySelector("#resolver");

nota.onblur = () => { //Foca e muda a cor do campo e label
    if (nota.value == "") {
        la.style = "color: #aa0044";
        nota.style = "border-color: #aa0044";
    } else {
        la.style = "color: #000000";
        nota.style = "border-color: #000000";
    }
}

function classificaAluno(nota) {
    const notaCorrigida = arredondar(nota);
    if (notaCorrigida < 40) {
        return(`Aluno foi reprovado com nota ${notaCorrigida}`);
    } else {
        return(`Aluno foi aprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota) {
    nota = Number.parseInt(nota);
    if (nota < 38) {
        return nota;
    } else if (nota % 5 >= 3 ) {
        return nota = nota + (5 - (nota % 5));
    } else {
        return nota = nota - (nota % 5);
    }
}

resolver.onclick = () => { //Ação executado ao clicar no botão
    if (nota.value == "") {
        nota.focus();
    }else {
        resultado.value = classificaAluno(nota.value);
    }
}