// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

// Creating a list of images with JS!!!!!!!!!!!!
// Selecting the container/ working on!
const container = document.querySelector("#container");
//  the baseURL, main url that will be followed by images with de name 1.png, 2.png.......................
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
//  loop
for (let i = 1; i <= 151; i++) {
    // creating the div element
    const pokemon = document.createElement("div");
    // add a class to Div
    pokemon.classList.add("pokemon");
    // create a span label
    const label = document.createElement("span");
    // add the text on label
    label.innerText = `#${i}`;
    // creating the Images
    const newImg = document.createElement("img");
    // joining the baseURL and the following images up to 151(loop)
    newImg.src = `${baseURL}${i}.png`
    // appendChilds in order
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}