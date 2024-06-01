let fcm = '';
let fcr = '';
let fct = '';
let zone0 = 0;
let zone1 = 0;
let zone2 = 0;
let zone3 = 0;
let zone4 = 0;
let zone5 = 0;

function calcular() {
    fcm = document.getElementById('FCM').value;
    fcr = document.getElementById('FCR').value;
    fct = 0;

    if (fcm != '') {
        if (fcr != '') {
            fct = fcm - fcr;
            document.getElementById('FCT').value = fct;
            document.getElementById('lbl_FCT').className = "fct_visible text-sm font-medium text-white";
            document.getElementById('FCT').className = "fct_visible text-center min-w-4 max-w-14 flex-auto rounded-md border-1 bg-white px-1.5 py-2 text-slate-500 font-medium shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6";
            document.getElementById('divfct').className = "items-center text-center px-2 py-2 mx-2 border-2 rounded-md bg-slate-800";

            document.getElementById('perc50').value = 50;
            zone0 = Math.round(Number(fct) * (50/100) + Number(fcr));
            document.getElementById('zone0').value = zone0;
            
            document.getElementById('perc60').value = 60;
            zone1 = Math.round(Number(fct) * (60/100) + Number(fcr));
            document.getElementById('zone1').value = zone1;
            
            document.getElementById('perc70').value = 70;
            zone2 = Math.round(Number(fct) * (70/100) + Number(fcr));
            document.getElementById('zone2').value = zone2;

            document.getElementById('perc80').value = 80;
            zone3 = Math.round(Number(fct) * (80/100) + Number(fcr));
            document.getElementById('zone3').value = zone3;

            document.getElementById('perc90').value = 90;
            zone4 = Math.round(Number(fct) * (90/100) + Number(fcr));
            document.getElementById('zone4').value = zone4;

            document.getElementById('perc100').value = 100;
            zone5 = Math.round(Number(fct) * (100/100) + Number(fcr));
            document.getElementById('zone5').value = zone5;
            
            document.getElementById('percFC').className = "visible text-center text-sm font-medium ml-4 text-white";
            document.getElementById('pulsaciones').className = "visible text-center text-sm font-medium ml-4 text-white";
            document.getElementById('perc50').className = "visible text-center min-w-0 flex-auto rounded-md border-1 bg-white px-3.5 py-2 text-slate-500 font-medium shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6";
            document.getElementById('perc60').className = "visible text-center min-w-0 flex-auto rounded-md border-1 bg-white px-3.5 py-2 text-slate-500 font-medium shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6";
            document.getElementById('perc70').className = "visible text-center min-w-0 flex-auto rounded-md border-1 bg-white px-3.5 py-2 text-slate-500 font-medium shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6";
            document.getElementById('perc80').className = "visible text-center min-w-0 flex-auto rounded-md border-1 bg-white px-3.5 py-2 text-slate-500 font-medium shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6";
            document.getElementById('perc90').className = "visible text-center min-w-0 flex-auto rounded-md border-1 bg-white px-3.5 py-2 text-slate-500 font-medium shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6";
            document.getElementById('perc100').className = "visible text-center min-w-0 flex-auto rounded-md border-1 bg-white px-3.5 py-2 text-slate-500 font-medium shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6";
            document.getElementById('zone0').className = "visible text-center min-w-0 flex-auto rounded-md border-1 bg-white px-3.5 py-2 text-slate-500 font-medium shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6";
            document.getElementById('zone1').className = "visible text-center min-w-0 flex-auto rounded-md border-1 bg-white px-3.5 py-2 text-slate-500 font-medium shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6";
            document.getElementById('zone2').className = "visible text-center min-w-0 flex-auto rounded-md border-1 bg-white px-3.5 py-2 text-slate-500 font-medium shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6";
            document.getElementById('zone3').className = "visible text-center min-w-0 flex-auto rounded-md border-1 bg-white px-3.5 py-2 text-slate-500 font-medium shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6";
            document.getElementById('zone4').className = "visible text-center min-w-0 flex-auto rounded-md border-1 bg-white px-3.5 py-2 text-slate-500 font-medium shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6";
            document.getElementById('zone5').className = "visible text-center min-w-0 flex-auto rounded-md border-1 bg-white px-3.5 py-2 text-slate-500 font-medium shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6";
        } else {window.alert("FCR no puede estar vacío");}
    } else {
        window.alert("FCM no puede estar vacío");
    }
}

function borrar() {
    document.getElementById('FCM').value = "";
    document.getElementById('FCR').value = "";
    document.getElementById('FCT').value = "";
    document.getElementById('lbl_FCT').className = "fct_hidden";
    document.getElementById('FCT').className = "fct_hidden";
    document.getElementById('divfct').className = "hidden block px-2 py-2 mx-2 border-2 rounded-md bg-slate-800";
    document.getElementById('percFC').className = "hidden";
    document.getElementById('pulsaciones').className = "hidden";
    document.getElementById('perc50').value = "";
    document.getElementById('perc60').value = "";
    document.getElementById('perc70').value = "";
    document.getElementById('perc80').value = "";
    document.getElementById('perc90').value = "";
    document.getElementById('perc100').value = "";
    document.getElementById('zone0').value = "";
    document.getElementById('zone1').value = "";
    document.getElementById('zone2').value = "";
    document.getElementById('zone3').value = "";
    document.getElementById('zone4').value = "";
    document.getElementById('zone5').value = "";
    document.getElementById('perc50').className = "hidden";
    document.getElementById('perc60').className = "hidden";
    document.getElementById('perc70').className = "hidden";
    document.getElementById('perc80').className = "hidden";
    document.getElementById('perc90').className = "hidden";
    document.getElementById('perc100').className = "hidden";
    document.getElementById('zone0').className = "hidden";
    document.getElementById('zone1').className = "hidden";
    document.getElementById('zone2').className = "hidden";
    document.getElementById('zone3').className = "hidden";
    document.getElementById('zone4').className = "hidden";
    document.getElementById('zone5').className = "hidden";
}

/*
let nombre = 'Hola Mundo';

let personaje = {
    nombre: "Pikachu",
    tipo:"Pokemon",
    color: "Amarillo"
};

let animales = ['perro','gato','tortuga']


console.log('Tu frecuencia cardíaca de trabajo es ' + fct);
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['color']);
console.log(animales);
console.log(animales[1]);
animales[3] = 'Ornitorrinco'
console.log(animales)
console.log(animales.length)

function saludar() {
    console.log('saluda!');
}
saludar();

function suma(a, b) {
    return a + b;
}
let resultado = suma(2, 3);
console.log(resultado)
*/


