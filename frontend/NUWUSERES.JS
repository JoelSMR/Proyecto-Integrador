
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const inputs = form.querySelectorAll('input');
      const select = form.querySelector('select');

      const nombre = inputs[0].value;
      const correo = inputs[1].value;
      const contrasena = inputs[2].value;
      const rol = select.value;

      const usuarioData = {
        nombreCompleto: nombre,
        correoElectronico: correo,
        contrasena: contrasena,
        rol: rol
      };

      try {
        const response = await fetch('http://127.0.0.1:5000/crear_usuario', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(usuarioData)
        });

        if (response.ok) {
          const data = await response.json();
          alert('Usuario creado con éxito');
          console.log(data);
          form.reset();
        } else {
          alert('Error al crear el usuario');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('No se pudo conectar con el servidor');
      }
    });
  });

