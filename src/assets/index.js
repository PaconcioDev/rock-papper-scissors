import { paco, paolo, sre } from "./characters.js";
import { disableBtn } from "./disableBtn.js";

const pacoInput = document.querySelector("#paco");
const paoloInput = document.querySelector("#paolo");
const sreInput = document.querySelector("#sre");

pacoInput.checked = false;
paoloInput.checked = false;
sreInput.checked = false;

const infoSection = document.createElement("section");
const characterDisplaySection = document.querySelector("#character-display");

function showDescription(character) {
  if (infoSection.id !== "character-info") {
    character.attacks = [];
    characterDisplaySection.id = `${character.name
      .replace(/\./g, "")
      .replace(/ /g, "")
      .toLowerCase()}-display-id`;
    infoSection.id = "character-info";

    const characterDescription = document.createElement("div");
    characterDescription.className = "character-description";

    const characterName = document.createElement("h3");
    characterName.innerText = `${character.name}`;

    const characterStory = document.createElement("p");
    characterStory.innerText = `${character.info}`;

    const attacksTitle = document.createElement("h4");
    attacksTitle.innerText = "Attacks";

    const attacksInfo = document.createElement("p");
    attacksInfo.innerText = `${character.attacksInfo}`;

    characterDescription.append(
      characterName,
      characterStory,
      attacksTitle,
      attacksInfo
    );

    const btnRock = document.createElement("button");
    const btnPapper = document.createElement("button");
    const btnScissors = document.createElement("button");

    const attacksContainer = document.createElement("div");
    attacksContainer.className = "attacks-container";
    btnRock.innerText = "Rock";
    btnPapper.innerText = "Papper";
    btnScissors.innerText = "Scissors";

    const btnRockImg = document.createElement("img");
    btnRockImg.src = "/src/imgs/Cobblestone.webp";
    btnRockImg.alt = "Rock";
    btnRock.appendChild(btnRockImg);

    const btnPapperImg = document.createElement("img");
    btnPapperImg.src = "/src/imgs/Papel.webp";
    btnPapperImg.alt = "Papper";
    btnPapper.appendChild(btnPapperImg);

    const btnScissorsImg = document.createElement("img");
    btnScissorsImg.src = "/src/imgs/Shear.png";
    btnScissorsImg.alt = "Scissors";
    btnScissors.appendChild(btnScissorsImg);

    attacksContainer.append(btnRock, btnPapper, btnScissors);

    //* Select Attacks section
    function selectRockAttack() {
      disableBtn(btnRock);
      character.attacks.push("rock");
      if (character === paolo) {
        disableBtn(btnPapper);
        disableBtn(btnScissors);
      } else if (character === paco) {
        if (paco.attacks.includes("papper")) {
          disableBtn(btnScissors);
        } else if (paco.attacks.includes("scissors")) {
          disableBtn(btnPapper);
        }
      }
    }

    function selectPapperAttack() {
      disableBtn(btnPapper);
      character.attacks.push("papper");
      if (character === paolo) {
        disableBtn(btnRock);
        disableBtn(btnScissors);
      } else if (character === paco) {
        if (paco.attacks.includes("rock")) {
          disableBtn(btnScissors);
        } else if (paco.attacks.includes("scissors")) {
          disableBtn(btnRock);
        }
      }
    }

    function selectScissorsAttack() {
      disableBtn(btnScissors);
      character.attacks.push("scissors");
      if (character === paolo) {
        disableBtn(btnPapper);
        disableBtn(btnRock);
      } else if (character === paco) {
        if (paco.attacks.includes("rock")) {
          disableBtn(btnPapper);
        } else if (paco.attacks.includes("papper")) {
          disableBtn(btnRock);
        }
      }
    }

    if (character === paolo || character === paco) {
      btnRock.addEventListener("click", selectRockAttack);
      btnPapper.addEventListener("click", selectPapperAttack);
      btnScissors.addEventListener("click", selectScissorsAttack);
    } else {
      character.attacks.push("rock");
      character.attacks.push("papper");
      character.attacks.push("scissors");

      btnPapper.style = "cursor: inherit";
      btnRock.style = "cursor: inherit";
      btnScissors.style = "cursor: inherit";
    }

    //* Start Button
    const startBtn = document.createElement("button");
    startBtn.id = "start-btn";
    startBtn.innerText = "START";

    infoSection.append(characterDescription, attacksContainer);
    characterDisplaySection.append(infoSection, startBtn);
  } else {
    characterDisplaySection.innerHTML = "";
    infoSection.id = "";
    infoSection.innerHTML = "";
    showDescription(character);
  }
}

pacoInput.addEventListener("click", () => showDescription(paco));
paoloInput.addEventListener("click", () => showDescription(paolo));
sreInput.addEventListener("click", () => showDescription(sre));
