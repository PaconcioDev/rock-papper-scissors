import { paco, paolo, sre } from "./characters.js";
let characters = [paco, paolo, sre];

let pacoCard = document.getElementById("paco");
let paoloCard = document.getElementById("paolo");
let sreCard = document.getElementById("sre");

let charactersDisplay = document.getElementById("characters-display");

characters.forEach(function (character) {
  character.addEventListener("change", () => {
    charactersDisplay.innerHTML = `<section id="character-info">
        <div class="character-description">
         <h3>${character.name}</h3>
         <p>
          ${character.info}
        </p>
        <h4>Attacks</h4>
        <p>
        ${character.attacksInfo}
        </p>
        </div>
    <div class="attacks-container">
        <button><img src="imgs/Cobblestone.webp" alt="Rock" />Rock</button>
        <button><img src="imgs/Papel.webp" alt="Papper" />Papper</button>
        <button><img src="imgs/Shear.png" alt="Scissors" />Scissors</button>
    </div>
    </section>
    <button id="start-btn">START</button>`;
  });
});

/* `<section id="character-info">
        <div class="character-description">
            <h3>${character.name}</h3>
            <p>
            ${character.info}
            </p>
            <h4>Attacks</h4>
            <p>
            ${character.attacksInfo}
            </p>
        </div>
        <div class="attacks-container">
            <button><img src="imgs/Cobblestone.webp" alt="Rock" />Rock</button>
            <button><img src="imgs/Papel.webp" alt="Papper" />Papper</button>
            <button><img src="imgs/Shear.png" alt="Scissors" />Scissors</button>
        </div>
        </section>
        <button id="start-btn">START</button>` */
