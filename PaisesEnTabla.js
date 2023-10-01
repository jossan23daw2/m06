let ciudades = ["Paris", "Londres", "Roma", "Berlin", "Copenhaguen", "Viena", "Lisboa", "WashingtonDC", "Otawa", "LHavana", "Santiago", "Lima", "Montevideo", "Canberra", "Wellington", "Monròvia", "Abuja", "Dakar", "Tunis", "Tokyo", "Seül", "Beijing", "Taipei"];
let paises = ["França", "UK", "Itàlia", "Alemanya", "Dinamarca", "Àustria", "Portugal", "USA", "Canada", "Cuba", "Xile", "Perú", "Uruguay", "Austràlia", "Nova Zelanda", "Libèria", "Nigèria", "Senegal", "Tunísia", "Japó", "Corea_Sud", "Xina", "Taiwan"];
let continentes = ["Europa", "Europa", "Europa", "Europa", "Europa", "Europa", "Europa", "Amèrica", "Amèrica", "Amèrica", "Amèrica", "Amèrica", "Amèrica", "Oceania", "Oceania", "Àfrica", "Àfrica", "Àfrica", "Àfrica", "Àsia", "Àsia", "Àsia"];

function Aleatorio() {
    let ciudadRan = ciudades[Math.floor(Math.random() * ciudades.length)];
    let paisRan = paises[Math.floor(Math.random() * paises.length)];
    let continenteRan = continentes[Math.floor(Math.random() * continentes.length)];

    return [ciudadRan, paisRan, continenteRan];
}
function crearTabla() {
    let paisesNum = document.getElementById("nums");
    let cantidad = (paisesNum.value) * 1;
    let tabla = document.getElementById('tabla');
    tabla.innerHTML = '<tr><th>Capital</th><th>País</th><th>Continente</th></tr>';

    for (let i = 0; i < cantidad; i++) {
        let datos = Aleatorio();
        let fila = tabla.insertRow();
        let celda1 = fila.insertCell(0);
        let celda2 = fila.insertCell(1);
        let celda3 = fila.insertCell(2);
        celda1.textContent = datos[0];
        celda2.textContent = datos[1];
        celda3.textContent = datos[2];
    }
}
function borrar() {
    let tabla = document.getElementById('tabla');
    tabla.innerHTML = '<tr><th>Capital</th><th>País</th><th>Continente</th></tr>';
}
