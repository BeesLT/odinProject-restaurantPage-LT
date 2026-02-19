export function loadAbout() {
    const content = document.getElementById("content");
    
    //const messages = document.createElement("div");
    const newSection = document.createElement("section");
    newSection.innerHTML = `
        <h2>This is the about</h2>
        <p>How about you go somewhere else?</p>`;

    content.appendChild(newSection);
}