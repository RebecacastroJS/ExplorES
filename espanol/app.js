var check = document.querySelector(".check");

// Asegúrate de que el elemento existe
if (check) {
    check.addEventListener('change', idioma);
}

function idioma() {
    // El valor checked indica si el checkbox está marcado
    let id = check.checked;
    if (id == true) {
        // Redirige a la página en español
        location.href = "C:/Users/MINEDUCYT/Documents/EXPO/espanol/contactus.html";
    } else {
        // Redirige a la página en inglés
        location.href = "C:/Users/MINEDUCYT/Documents/EXPO/English/contactus.html";
    }
}

