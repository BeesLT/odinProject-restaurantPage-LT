import "./styles.css";
//import loadHome from "./home.js";
//import loadMenu from "./menu.js";
//import loadAbout from "./about.js";

const content = document.getElementById("content");

function clearContent() {
    content.innerHTML = "";
}
//function innerHTML()
document.getElementById("home-btn")
    .addEventListener("click", () => {
        clearContent();
        loadHome();
    });

document.getElementById("menu-btn")
    .addEventListener("click", () => {
        clearContent();
        loadMenu();
    })

document.getElementById("about-btn")
    .addEventListener("click", () => {
        clearContent();
        loadAbout();
    })

const photoWall = document.createElement("div");
photoWall.id = "photo-wall";
content.appendChild(photoWall);

let photoHTML = "";
for (let i = 0; i < 5; i++) {
    photoHTML += `<div class="single-photo"><img src="resturant-page/assets/photo${i + 1}.jpg" alt="Photo ${i + 1}"></div>`;
}
photoWall.innerHTML += photoHTML;

const textWall = document.createElement("div");
textWall.id = "text-wall";
content.appendChild(textWall);

let textHTML = "";
for (let i = 0; i < 3; i++) {
    textHTML += `<div class="single-text"><p> Textetxtetxvihvhrvirhiasrhlbvrfh ${i + 1} </p></div>`;
}
textWall.innerHTML += textHTML;