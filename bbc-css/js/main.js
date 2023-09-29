document.querySelector('.dropdown-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.dropdown-menu');
    menu.style.display = menu.style.display === "none" ? "block" : "none";
});
