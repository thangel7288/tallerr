function ingresoNumeros() {
    let numeros = [];
    let cantidad = parseInt(prompt("cuantos numeros quieres ingresar"));

    for (let i = 0; i < cantidad; i++) {
        
        let num = parseFloat(prompt(`Ingrese el número ${1 + i}:`));
        numeros.push(num);
    }
    ordenarNumeros(...numeros)
}
// -------------------------

function ordenarNumeros(...numeros) {

    numeros.sort((a,b) => b - a);

    
    console.table(numeros);
}

ingresoNumeros();