function gruppo(id) {
    var elemento = document.getElementById(id);
    if (elemento.style.display == "none") {
      elemento.style.display = "block";
    }
    else {
      elemento.style.display = "none";
    }
  }