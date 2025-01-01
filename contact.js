document.addEventListener("DOMContentLoaded", function () {
    const footer = document.getElementById("footer");
    const goToFooterButton = document.getElementById("goToFooter");

    goToFooterButton.addEventListener("click", function () {
        footer.scrollIntoView({ behavior: "smooth" });
    });
});