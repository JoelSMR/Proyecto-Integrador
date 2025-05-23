import {usuarios,almacenarLocalStorage,consultarLocalStorage} from "./data.js";

almacenarLocalStorage(usuarios)
let almacenamientoActual = consultarLocalStorage()
console.log(almacenamientoActual)

let contenedor = document.getElementById("tabla")
//Consultar la cantidad de usuarios registrados
for( let i=0;i<almacenamientoActual.length;i++){
    const trUser = document.createElement("tr")
    const tdUser = document.createElement("td")
    const tdUserDate = document.createElement("td")
    tdUser.textContent= `${almacenamientoActual[i]["nombre"]}`
    tdUserDate.textContent= `${almacenamientoActual[i]["fechaIngreso"]}`
    console.trace(almacenamientoActual[i]["fechaIngreso"])
    trUser.appendChild(tdUser)
    trUser.appendChild(tdUserDate)
    contenedor.appendChild(trUser)
}