/* ===============================
   MOBILE NAVIGATION
================================ */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* Close mobile menu after clicking */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* ===============================
   DEMO BUTTON
================================ */

const demoBtn = document.getElementById("demoBtn");

demoBtn.addEventListener("click", () => {

    alert(
        "Welcome to NIRMAN!\n\n" +
        "The interactive approval discovery platform will be available here."
    );

});


/* ===============================
   SCROLL REVEAL
================================ */

const cards = document.querySelectorAll(
    ".problem-card, .step, .feature-card, .dashboard-card"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(25px)";

    card.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(card);

});