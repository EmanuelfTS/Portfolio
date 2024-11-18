function calc() {
    var valor = parseFloat(document.getElementById("valor").value)
    var tipo = parseFloat(document.getElementById("select").value)
    let result = document.getElementById("result")
    if (tipo == 0) {
        valor = valor*0.20
        valor = valor.toFixed(2)
        result.innerHTML = 'O resultado é: ' + valor + '$'
    }
    else if (tipo == 1) {
        valor = valor*0.18
        valor = valor.toFixed(2)
        result.innerHTML = 'O resultado é: ' + valor + '€'
    }
    else if (tipo == 2) {
        valor = valor*270
        valor = valor.toFixed(2)
        result.innerHTML = 'O resultado é: ' + valor + '₩'
    }
    else if (tipo == 3) {
        valor = valor*3.60
        valor = valor.toFixed(2)
        result.innerHTML = 'O resultado é: ' + valor + '$'
    }
    else if (tipo == 4) {
        valor = valor*0.30
        valor = valor.toFixed(2)
        result.innerHTML = 'O resultado é: ' + valor + '$'
    }
    else {
        result.innerHTML = '<p id="result" style="color: red;">SELECIONE UMA MOEDA!</p>'
    }
}