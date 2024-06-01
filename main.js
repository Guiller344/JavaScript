function calcularIMC(altura, peso) {
    return peso / (altura * altura);
}

function crearPersona(nombre, genero, peso, altura) {
    return {
        nombre: nombre,
        genero: genero,
        peso: peso,
        altura: altura,
        imc: 0  
    };
}

function solicitarDatosYCalcularIMC() {
    let nombre = prompt("¿Cómo te llamas?");
    let genero = prompt("¿Eres chico o chica?");
    let altura = parseFloat(prompt("¿Cuánto mides en metros? (Ej: 1.75)"));
    let peso = parseFloat(prompt("¿Cuánto pesas en kilogramos?"));

    let persona = crearPersona(nombre, genero, peso, altura);
    persona.imc = calcularIMC(persona.altura, persona.peso);

    alert(`${persona.nombre}, tu Índice de Masa Corporal (IMC) es ${persona.imc.toFixed(2)}`);
}

alert("¿Quieres calcular tu Índice de Masa Corporal?");
let respuesta1 = prompt("¡GENIAL! Escriba SI o NO para continuar.");

while (respuesta1.toLowerCase() === "si") {
    alert("A continuación se le pedirán los datos necesarios");
    solicitarDatosYCalcularIMC();

    respuesta1 = prompt("¿Quieres calcular el IMC de otra persona? Escriba SI o NO para continuar.");
}

if (respuesta1.toLowerCase() === "no") {
    alert("Vaya, es una pena ;(");
} else {
    alert("Por favor ingrese una respuesta válida.");
}
