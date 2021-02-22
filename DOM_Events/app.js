const color = document.querySelector(".color");
const h1 = document.querySelector("h1");

color.addEventListener("click", function () {
    const newColor = randColor();
    h1.innerText = newColor;
    document.body.style.backgroundColor = newColor;
});


const randColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const h1s = document.querySelectorAll("h1");
const buttons = document.querySelectorAll("#button");

for (let h1 of h1s) {
    h1.addEventListener("click", colorise);
}
for (let button of buttons) {
    button.addEventListener("click", colorise);
}

function colorise() {
    this.style.backgroundColor = randColor();
    this.style.color = randColor();
}

// Forms=======================================

const form = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = "";
    tweetInput.value = "";

});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement("li");
    const bTag = document.createElement("b");
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetsContainer.append(newTweet);
}



// ==========================
const input = document.querySelector("#input");
const h3 = document.querySelector("h3")


input.addEventListener("input", () => {
    h3.innerHTML = `Welcome, ${input.value}`;
    if (input.value === "") {
        h3.innerHTML = "Enter Your Username";
    }
});

tweetsContainer.addEventListener("click", function (e) {

    e.target.nodeName === "LI" && e.target.remove();

    // console.dir(e.target);
    // console.log(e);
}) 