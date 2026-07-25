// ===============================
// MOBILE MENU
// ===============================

const menu = document.querySelector("#menu");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("active");

    if (menu.innerHTML.includes("bars")) {
        menu.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menu.innerHTML = '<i class="fas fa-bars"></i>';
    }
};

// Close menu when a link is clicked
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menu.innerHTML = '<i class="fas fa-bars"></i>';
    });
});


// ===============================
// TYPING EFFECT
// ===============================

const typingElement = document.querySelector(".typing");

const words = [
    "Java Full Stack Developer",
    "Spring Boot Developer",
    "React Developer",
    "Frontend Developer",
    "Backend Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;
            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, deleting ? 70 : 120);

}

typeEffect();


// ===============================
// STICKY HEADER
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {

        header.style.background = "#0f172a";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.5)";

    } else {

        header.style.background = "#111827";
        header.style.boxShadow = "none";

    }

});


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// SCROLL ANIMATION
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

document.querySelectorAll(
".project-box,.skill,.edu-box,.about-container"
).forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "0.8s";

    observer.observe(item);

});


// ===============================
// CONTACT FORM
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const inputs = form.querySelectorAll(
        "input, textarea"
    );

    let valid = true;

    inputs.forEach(input => {

        if(input.value.trim() === ""){

            valid = false;

            input.style.border =
            "2px solid red";

        }else{

            input.style.border =
            "2px solid #00d4ff";

        }

    });

    if(valid){

        alert(
            "Thank you! Your message has been sent."
        );

        form.reset();

    }

});


// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML =
'<i class="fas fa-arrow-up"></i>';

topButton.style.position = "fixed";
topButton.style.bottom = "30px";
topButton.style.right = "30px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#00d4ff";
topButton.style.color = "#000";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topButton.style.display = "block";

    }else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


// ===============================
// LOADING ANIMATION
// ===============================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
        "opacity 1s";

        document.body.style.opacity = "1";

    }, 100);

});


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
"Welcome to Purusothaman's Portfolio 🚀"
);