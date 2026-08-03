```javascript
// ==============================
// PORTFOLIO JAVASCRIPT
// ==============================


// 1. WELCOME MESSAGE
// Shows a message when the website loads

window.addEventListener("load", function () {
    console.log("Welcome to Mehak Krishali's Portfolio!");
});


// 2. SMOOTH SCROLLING
// Smoothly scrolls to sections when navigation links are clicked

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const targetId = link.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// 3. CURRENT YEAR IN FOOTER
// Automatically updates the copyright year

const footerText = document.querySelector("footer p");

if (footerText) {
    const currentYear = new Date().getFullYear();

    footerText.innerHTML =
        `© ${currentYear} Mehak Krishali | Portfolio`;
}


// 4. PROJECT CARD ANIMATION
// Adds a simple click effect to project cards

const projectCards = document.querySelectorAll(".project");

projectCards.forEach(function (card) {

    card.addEventListener("click", function () {

        card.style.transform = "scale(1.02)";

        setTimeout(function () {
            card.style.transform = "";
        }, 200);

    });

});


// 5. SKILL CLICK MESSAGE
// Shows the selected skill in the browser console

const skills = document.querySelectorAll(".skill");

skills.forEach(function (skill) {

    skill.addEventListener("click", function () {

        console.log(
            "You selected the skill: " + skill.textContent
        );

    });

});


// 6. CONTACT BUTTON
// Shows a message when Contact Me button is clicked

const contactButton = document.querySelector(".button");

if (contactButton) {

    contactButton.addEventListener("click", function () {

        console.log("Thank you for visiting my portfolio!");

    });

}


// 7. SCROLL ANIMATION
// Adds a visible animation when sections appear on screen

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.2
    }
);


// Initial section styling

sections.forEach(function (section) {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(section);

});
```

