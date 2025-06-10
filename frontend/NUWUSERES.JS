const datosUsuario = {
  primer_nombre: "Juan",
  segundo_nombre: "Carlos",
  primer_apellido: "Pérez",
  segundo_apellido: "Gómez",
  cedula_ciudadania: "12345678",
  nombre_usuario: "juan123",
  contraseña_usuario: "claveSegura123",
  rol_id: 1
};

fetch("http://127.0.0.1:5000/crear_usuario", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(datosUsuario)
})
.then(response => response.json())
.then(data => {
  console.log("Respuesta del servidor:", data);
  if (data.mensaje === "Creacion de usuario Exitosa") {
    alert("¡Usuario creado exitosamente!");
  } else {
    alert("Error: " + data.mensaje);
  }
})
.catch(error => {
  console.error("Error al enviar la solicitud:", error);
});


