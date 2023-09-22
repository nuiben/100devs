document.querySelector('.dropdown-toggle').addEventListener('click', function() {
    var menu = document.querySelector('.dropdown-menu');
    menu.style.display = menu.style.display === "none" ? "block" : "none";
});
