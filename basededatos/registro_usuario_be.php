<?php

include 'conexion_be.php';

// Obtener datos del formulario
$name = $_POST['nombre'];
$email = $_POST['correo'];
$password = $_POST['contrasena'];

// Consulta SQL para insertar datos
$query = "INSERT INTO usuarios (nombre, correo, contrasena) VALUES (?, ?, ?)";

// Preparar la consulta
$stmt = mysqli_prepare($conexion, $query);

if ($stmt) {
    // Vincular los parámetros
    mysqli_stmt_bind_param($stmt, "sss", $name, $email, $password);

    // Ejecutar la consulta
    $ejecutar = mysqli_stmt_execute($stmt);

    if ($ejecutar) {
        echo '
            <script>
                alert("Usuario registrado correctamente");
                window.location = "login.html";
            </script>
        ';
    } else {
        echo '
            <script>
                alert("Error al registrar el usuario");
                window.location = "registro.html";
            </script>
        ';
    }

    // Cerrar la declaración
    mysqli_stmt_close($stmt);
} else {
    echo '
        <script>
            alert("Error en la preparación de la consulta");
            window.location = "registro.html";
        </script>
    ';
}

// Cerrar la conexión
mysqli_close($conexion);
?>
