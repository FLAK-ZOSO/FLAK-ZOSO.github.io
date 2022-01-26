/* Rendere visibili elementi */
function show(elemento) {
    document.getElementById(elemento).style.display = 'block';
}

/* Rendere invisibili elementi */
function hide(elemento) {
    document.getElementById(elemento).style.display = 'none';
}

// Cambiare la visibilità
function changeVisibility(elemento) {
    var elemento = document.getElementById(elemento);
    if (elemento.style.display == 'block') {
        elemento.style.display = 'none';
    }
    else {
        elemento.style.display = 'block';
    }
}