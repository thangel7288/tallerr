
// calculadora.js

export class CalculadoraSimple {
    sumar(x, y) {
        this.validarEntradas(x, y);
        return x + y;
    }

    restar(x, y) {
        this.validarEntradas(x, y);
        return x - y;
    }

    multiplicar(x, y) {
        this.validarEntradas(x, y);
        return x * y;
    }

    dividir(x, y) {
        this.validarEntradas(x, y);
        if (y === 0) {
            throw new Error("Error: No se puede dividir por cero");
        }
        return x / y;
    }

    validarEntradas(x, y) {
        if (isNaN(x) || isNaN(y)) {
            throw new Error("Error: ambos deben ser válidos");
        }
    }
}

export function iniciarCalculadora() {
    const calculadora = new CalculadoraSimple();
    let continuarCalculando = true;

    while (continuarCalculando) {
        const opcion = prompt(
            "Selecciona la operación que deseas realizar:\n" +
            "1.-Sumar\n" +
            "2.- \n" +
            "3.-Multiplicar\n" +
            "4.-Dividir\n" +
            "5.-Salir"
        );

        if (opcion === '5' || opcion === null) {
            console.log("Gracias por usar la calculadora");
            continuarCalculando = false;
            break;
        }

        if (!'1234'.includes(opcion)) {
            console.error("Selección no válida. Elige una opción del 1 al 4, o 5 para salir.");
            continue;
        }
        

        const num1 = parseFloat(prompt("Introduce el primer número:"));
        const num2 = parseFloat(prompt("Introduce el segundo número:"));

        try {
            let resultado;
            switch (opcion) {
                case '1':
                    resultado = calculadora.sumar(num1, num2);
                    break;
                case '2':
                    resultado = calculadora.restar(num1, num2);
                    break;
                case '3':
                    resultado = calculadora.multiplicar(num1, num2);
                    break;
                case '4':
                    resultado = calculadora.dividir(num1, num2);
                    break;
            }
            alert(`El resultado es: ${resultado}`);
        } catch (error) {
            console.error(error.message);
        }
    }
}
