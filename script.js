/* =========================
   PORTFOLIO - NGUYỄN DUY THÙY
========================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Portfolio Loaded Successfully!");

    /* Smooth Reveal Animation */

    const elements = document.querySelectorAll(
        ".card, .profile-card, .project-card"
    );

    const observer = new IntersectionObserver(
        (entries) => {

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

    elements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(50px)";
        el.style.transition = "all 0.8s ease";

        observer.observe(el);

    });

});

/* =========================
   SCROLL TO TOP BUTTON
========================= */

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "25px";
scrollBtn.style.right = "25px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.background = "#00bfff";
scrollBtn.style.color = "#fff";
scrollBtn.style.fontSize = "22px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";
scrollBtn.style.boxShadow = "0 0 15px #00bfff";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/* =========================
   CURRENT YEAR FOOTER
========================= */

const yearElements = document.querySelectorAll(".year");

yearElements.forEach(el => {

    el.textContent = new Date().getFullYear();

});

/* =========================
   PROJECT CARD HOVER EFFECT
========================= */

const projects = document.querySelectorAll(".project-card");

projects.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

/* =========================
   CONSOLE MESSAGE
========================= */

console.log(`
====================================
Portfolio Nguyễn Duy Thùy
MSSV: 25023534
Network Engineering Student
====================================
`);
