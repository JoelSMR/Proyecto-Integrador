export function alertaRedireccion(titulo, mensaje, tiempo, icono) {
  let timerInterval;
  Swal.fire({
    title: titulo,
    html: mensaje + " <b></b>",
    timer: tiempo,
    icon: icono,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
      window.location.href = "./interfaz.html";
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
}

let usuarios = [
  {
    correo: "correo@correo.com",
    contrasena: "123456",
    nombre: "Jaime Zapata",
    id: 1,
  },
  {
    correo: "admin@correo.com",
    contrasena: "123456",
    nombre: "Alejandra Carmona",
    id: 2,
  },
];

export function almacenarLocalStorage() {
  localStorage.setItem("usuarios", JSON.stringify(usuarios))
}

export function consultarLocalStorage() {
// localStorage.getItem(JSON.parse())
return JSON.parse(localStorage.getItem("usuarios")) || [];
}
