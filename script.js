// Botones "Copiar": copian el texto del ejemplo al portapapeles
document.querySelectorAll(".copiar").forEach(function (boton) {
  boton.addEventListener("click", function () {
    const texto = boton.previousElementSibling.textContent.replace(/"/g, "");
    navigator.clipboard.writeText(texto);
    boton.textContent = "¡Copiado!";
    boton.classList.add("listo");
    setTimeout(function () {
      boton.textContent = "Copiar";
      boton.classList.remove("listo");
    }, 1500);
  });
});
