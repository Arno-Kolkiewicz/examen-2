function ajusterHeader() {
    const hauteurViewport = window.innerHeight;
    const header = document.querySelector(".header")

    header.style.height = hauteurViewport / 2 + "px";
}
ajusterLargeurEnFonctionHauteur();

window.addEventListener("resize", ajusterLargeurEnFonctionHauteur);
