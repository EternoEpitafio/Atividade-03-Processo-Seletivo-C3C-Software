const ladoA = document.querySelector("#ladoA"); //Declarações usando o id
const ladoB = document.querySelector("#ladoB");
const ladoC = document.querySelector("#ladoC");
const resultado = document.querySelector("#resultado");
const resolver = document.querySelector("#resolver");
const la = document.querySelector("#la");
const lb = document.querySelector("#lb");
const lc = document.querySelector("#lc");

ladoA.onblur = () => { //Foca e muda a cor do campo e label
    if (ladoA.value == "") {
        la.style = "color: #aa0044";
        ladoA.style = "border-color: #aa0044";
    } else {
        la.style = "color: #000000";
        ladoA.style = "border-color: #000000";
    }
}

ladoB.onblur = () => {
    if (ladoB.value == "") {
        lb.style = "color: #aa0044";
        ladoB.style = "border-color: #aa0044";
    } else {
        lb.style = "color: #000000";
        ladoB.style = "border-color: #000000";
    }
}

ladoC.onblur = () => {
    if (ladoC.value == "") {
        lc.style = "color: #aa0044";
        ladoC.style = "border-color: #aa0044";
    } else {
        lc.style = "color: #000000";
        ladoC.style = "border-color: #000000";
    }
}

resolver.onclick = () => { //Ação executado ao clicar no botão
    if (ladoA.value == "") {
        ladoA.focus();
    }
    if (ladoB.value == "") {
        ladoB.focus();
    }
    if (ladoC.value == "") {
        ladoC.focus();
    } else {
        resultado.value = tiposDeTriangulo(ladoA.value, ladoB.value, ladoC.value);
    }
}

const tiposDeTriangulo = (a, b, c) => { //Não levam em conta as condições matemáticas de existência de um triângulo.
    if (a == b && b == c) {
        return ('Triângulo equilátero');
    }
    else if (a == b || a == c || c == b) {
        return ('Triângulo isóceles');
    }
    else {
        return ('Triângulo escaleno');
    }
}

