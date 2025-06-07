document.getElementById('button').addEventListener('click', async () => {
  const correo = document.getElementById('correo').value.trim();
  const contrasena = document.getElementById('contrasena').value;

  if (!correo || !contrasena) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, completa ambos campos.',
    });
    return;
  }

  try {
    const response = await fetch('', { // Cambia la URL por tu endpoint real
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ correo, contrasena }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error en la autenticación');
    }

    const data = await response.json();

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
