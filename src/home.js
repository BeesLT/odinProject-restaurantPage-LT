export function loadHome() {
    const content = document.getElementById("content");
    
    //const messages = document.createElement("div");
    const newSection = document.createElement("section");
    newSection.innerHTML = `
        <h2>This is the home</h2>
        <p>What do you think about it?</p>`;

    content.appendChild(newSection);

    
}