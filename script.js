function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

function navigate(section) {
    alert(`Navigating to ${section}`);
}
document.body.classList.add("fade-in");

links.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetUrl = this.href;

        document.body.classList.add("fade-out");
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 300);
    });
});
