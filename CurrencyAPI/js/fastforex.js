const options = { method: 'GET', headers: { accept: 'application/json' } };

let allResponse = {};

fetch('https://api.fastforex.io/fetch-all?api_key=b0f9ae2fc2-44b6ab31c0-rm4sym', options)
    .then(response => response.json())
    .then(response => allResponse = response.results)
    .catch(err => console.error(err))

function CurrencyFromSelected() {
    let Result = 0;
    const Valor = document.getElementById('Valor').value;
    const From = document.getElementById('CurrencyFrom').value;
    Result = allResponse[From] / Valor;
    console.log(Result);
    document.getElementById('valueFrom').innerHTML = Valor + From;
}

function CurrencyToSelected() {
    let Result = 0;
    const Valor = document.getElementById('Valor').value;
    const From = document.getElementById('CurrencyFrom').value;
    const To = document.getElementById('CurrencyTo').value;
    if (From == "USD") {
        Result = allResponse[To] * Valor;
        document.getElementById('valueTo').innerHTML = Result + To;
    }
    if (From == "COP") {
        Result = ((allResponse["COP"] / Valor) * Valor);
        document.getElementById('valueTo').innerHTML = Result + To;
    }
}