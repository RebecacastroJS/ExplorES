<?php

$conexion = mysqli_connect("localhost", "root", "", "register_db");

if (!$conexion) {
    die("Error en la conexión: " . mysqli_connect_error());
}

?>
