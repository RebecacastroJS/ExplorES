document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtiene los valores del formulario
    var nombre = document.getElementById('Name').value;
    var correo = document.getElementById('Email').value;
    var mensaje = document.getElementById('Messages').value;

    // Configuración de SMTPJS (reemplaza con tus propias credenciales)
    Email.send({
        Host: "smtp.gmail.com",
        Username : "ricardo.osorio2025@adoc.superate.org.sv",
        Password : "Pan con mantequilla 2",
        To : 'ricardoalejandroosoriojimenez@gmail.com',
        From : correo,
        Subject : "Nuevo mensaje de formulario de contacto",
        Body : "Nombre: " + Name + "<br>Correo electrónico: " + Email + "<br>Mensaje: " + Messages
    }).then(
      message => alert("¡El mensaje se ha enviado correctamente!")
    );
});
