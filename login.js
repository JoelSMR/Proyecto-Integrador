document.getElementById('button').addEventListener('click', async () => {
  const usuario = document.getElementById('correo').value.trim();
  const contraseña = document.getElementById('contrasena').value;

  if (!usuario || !contraseña) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, completa ambos campos.',
    });
    return;
  }
let retorno;
  try {
      fetch('http://127.0.0.1:5000/comprobar_login', { // Cambia la URL por tu endpoint real
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "usuario":usuario, 
                            "contraseña":contraseña })
    }).then(response=> response.json())
    .then(data =>console.log("Respuesta del servidor:", data ))
    .catch(error => console.log(("fyfuyf"))
    );


    if (data.success) {
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: data.message || 'Inicio de sesión exitoso.',
      });  
       window.location.href = 'interfaz.html'; 
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: data.message || 'Usuario o contraseña incorrectos.',
      });
    }
  } catch (error) {
    console.error('Error en login:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error.message || 'Error al conectar con el servidor.',
    });
  }
});
