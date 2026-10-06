function saludo() {
    let nombre1 = document.getElementById("nombres").value;
    let apellido1 = document.getElementById("apellidos").value;
    document.getElementById("mensaje").textContent = "Hola " + nombre1 + " " + apellido1 + " Buenas tardes";
}

function calculo_nota() {
    let teoria = parseFloat(document.getElementById("nota_teorica").value) || 0;
    let practica = parseFloat(document.getElementById("nota_practica").value) || 0;
    let suma = teoria + practica;

    let name1 = document.getElementById("nombres").value;
    let ap1 = document.getElementById("apellidos").value;
    
    document.getElementById("nota_sumada").textContent = "El promedio de " + name1 + " " + ap1 + " es " + suma;
}