console.log("JS loaded");
const navbar = document.querySelector(".navbar");

const sections = document.querySelectorAll(
    ".main, .html, .css, .javascript, .python, .java,.sql"
);

window.addEventListener("scroll", () => {
    console.log("scrolling");

    const middle=window.innerHeight/2;
    console.log(middle);

    sections.forEach((section) => {

        const rect = section.getBoundingClientRect();
            console.log(section.className);
            console.log(rect.top, rect.bottom);


        if (rect.top <= middle && rect.bottom >= middle) {
            console.log("ACTIVE:", section.className);
            console.log(section.className,rect.top,rect.bottom);
            const color = section.dataset.navbarColor;

            navbar.style.backgroundColor = color;
        }
    });
});