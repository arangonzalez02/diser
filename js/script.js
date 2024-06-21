//Select

let mapa = new Map([
    ["Nevera", "entre 0.250-0.350 kW"],
    ["Vitroceramica", "entre 0.900-2.000 kW"],
    ["Microondas", "entre 0.900-1.500 kW"],
    ["Horno", "entre 1.200-2.200 kW"],
    ["Lavavajillas", "entre 1.500-2.200 kW"],
    ["Lavadora", "entre 1.500-2.200 kW"],
    ["Televisión", "entre 0.150-0.400 kW"],
    ["Aire acondicionado", "entre 0.900-2.000 kW"],
    ["Calefaccion", "entre 1.000-2.500 kW"],
]);

let select=document.querySelector("#electrodomestico");
for (let [electro, potencia] of mapa) {
    let electroOp = document.createElement("option");
    electroOp.textContent=electro;
    electroOp.setAttribute("id", electro); //poner un id
    electroOp.value = electro; // añadir valor a cada opción
    select.appendChild(electroOp); //para crear opciones
}

document.querySelector("#mostrar-potencia").addEventListener("click", () => {
    let electro = select.value; // obtener el valor seleccionado
    let potenciaS = mapa.get(select.value);//indice valor
    document.querySelector("#potencia").textContent = `La potencia de ${electro} es de ${potenciaS}`;
});



