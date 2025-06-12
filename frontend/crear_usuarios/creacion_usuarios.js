document.querySelector("form").addEventListener("submit", crear_usuario);

function crear_usuario(event) {
  event.preventDefault();

  const campos = document.querySelectorAll('input, select');
  
  const datosUsuario = {
    primer_nombre: campos[0].value,
    segundo_nombre: campos[1].value,
    primer_apellido: campos[2].value,
    segundo_apellido: campos[3].value,
    cedula_ciudadania: campos[4].value,
    nombre_usuario: campos[5].value,
    contraseña_usuario: campos[6].value,
    rol_id: campos[7].value === 'estudiante' ? 2 : 1 
  };

  enviarUsuarioAlBackend(datosUsuario);
}

function enviarUsuarioAlBackend(usuario) {
  fetch('http://127.0.0.1:5000/crear_usuario', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(usuario)
  })
  .then(res => res.json())
  .then(data => {
    if (data.mensaje.includes("Exitosa")) {
      Swal.fire({
        icon: 'success',
        title: '¡Usuario creado!',
        text: data.mensaje
      }).then(() => {
        window.location.href = '../panel_principal/panel_principal.html';
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: data.mensaje
      });
    }
  })
  .catch(err => {
    console.error("Error:", err);
    Swal.fire({
      icon: 'error',
      title: 'Error de servidor',
      text: 'No se pudo conectar con el backend.'
    });
  });
}
