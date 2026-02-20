export default function loadMenu() {
    const content = document.getElementById("content");
    
    //const messages = document.createElement("div");
    const newSection = document.createElement("section");
    newSection.innerHTML = `
        <h2>This is the menu</h2>
        <p>We have nothing to eat...</p>`;

    content.appendChild(newSection);
}