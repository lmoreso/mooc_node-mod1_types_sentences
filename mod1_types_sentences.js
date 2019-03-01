const writeCons = (texto) => console.log(texto);
const WriteLineCons = () => writeCons("");


function funcPunto2(miHora) {
    let saludo = ""
    let hora = (miHora >= 0 && miHora < 24) ? miHora : new Date().getHours();

    if (hora >= 22 || hora < 7) {
        saludo = "night";
    } else if (hora >= 13) {
        saludo = "afternoon";
    } else
        saludo = "morning";
    writeCons(`“Good ${saludo}, it's ${hora} o’clock”`)
}

function funcPunto4() {
    writeCons("Número PI con 6 decimales: " + Math.PI.toPrecision(7))
}

function pintaNum(numero = 0) {
    writeCons(`${numero} dec = ${numero.toString(16)} hex = ${numero.toString(8)} oct = ${numero.toString(2)} bin`);
};

function funcPunto6() {
    for (let i = 0; i <= 22; i++) {
        pintaNum(i);
    };
}

function funcPunto8() {
    for (let i = 1; i <= 21; i++) {
        if ((i < 10 || i > 20) && (i % 2))
            pintaNum(i);
    };
}

function funcPunto10() {
    writeCons("Hi in Chinese is written as: \u55e8\uff0c\u4f60\u597d\u5417.");
}

function funcPunto12() {
    writeCons("“The program has finished”");
}



//lconsole.clear();
// Punto 1
WriteLineCons();
// Punto 2
funcPunto2();
// Punto 3
WriteLineCons();
// Punto 4
funcPunto4();
// Punto 5
WriteLineCons();
// Punto 6
funcPunto6();
// Punto 7
WriteLineCons();
// Punto 8
funcPunto8();
// Punto 9
WriteLineCons();
// Punto 10
funcPunto10();
// Punto 11
WriteLineCons();
// Punto 12
funcPunto12();