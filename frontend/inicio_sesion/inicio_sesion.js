// function inicio_sesion(){
//     fetch('http://127.0.0.1:5000/comprobar_login')
//     .then(Response => Response.json())
// } 

// Al hacer clic en el botón, se ejecuta la función inicio_sesion
document.getElementById("button").addEventListener("click", inicio_sesion);

function inicio_sesion() {
  const usuario = document.getElementById("correo").value;
  const contraseña = document.getElementById("contrasena").value;
  comprobarLogin(usuario, contraseña);
}

function comprobarLogin(usuario, contraseña) {
  fetch('http://127.0.0.1:5000/comprobar_login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ usuario, contraseña })
  })
  .then(res => res.json())
  .then(data => {
    if (data.loguea) {
      Swal.fire({ icon: 'success', title: '¡Bienvenido!', text: data.mensaje })
        .then(() => window.location.href = '../panel_principal/panel_principal.html');
    } else {
      Swal.fire({ icon: 'error', title: 'Acceso denegado', text: data.mensaje });
    }
  })
  .catch(err => {
    console.error("Error:", err);
    Swal.fire({ icon: 'error', title: 'Error del servidor', text: 'No se pudo conectar al servidor.' });
  });
}

