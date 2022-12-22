import { paco, paolo, sre} from "./characters.js";

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
    infoSection.id = "character-info";
  
    const characterDescription = document.createElement("div");
    characterDescription.className = "character-description";
  
    const characterName = document.createElement("h3");
    characterName.innerText = `${character.name}`
  
    const characterStory = document.createElement("p")
    characterStory.innerText = `${character.info}`
  
    const attacksTitle = document.createElement("h4");
    attacksTitle.innerText = "Attacks"
  
    const attacksInfo = document.createElement("p");
    attacksInfo.innerText = `${character.attacksInfo}`
  
    characterDescription.append(characterName, characterStory, attacksTitle, attacksInfo);
  
    const attacksContainer = document.createElement("div")
    attacksContainer.className = "attacks-container"
  
    const btnRock = document.createElement("button")
    btnRock.innerText = "Rock"
    const btnPapper = document.createElement("button")
    btnPapper.innerText = "Papper"
    const btnScissors = document.createElement("button")
    btnScissors.innerText = "Scissors"
    
    const btnRockImg = document.createElement("img")
    btnRockImg.src = "/src/imgs/Cobblestone.webp"
    btnRockImg.alt = "Rock"
    btnRock.appendChild(btnRockImg)
  
    const btnPapperImg = document.createElement("img")
    btnPapperImg.src = "/src/imgs/Papel.webp"
    btnPapperImg.alt = "Papper"
    btnPapper.appendChild(btnPapperImg)
  
    const btnScissorsImg = document.createElement("img")
    btnScissorsImg.src = "/src/imgs/Shear.png"
    btnScissorsImg.alt = "Scissors"
    btnScissors.appendChild(btnScissorsImg)
  
    attacksContainer.append(btnRock, btnPapper, btnScissors)
  
    const startBtn = document.createElement("button")
    startBtn.id = "start-btn"
    startBtn.innerText= "START"
    
    infoSection.append(characterDescription, attacksContainer);
    characterDisplaySection.append(infoSection, startBtn); 
  
    console.log(infoSection);
  } else {
    characterDisplaySection.innerHTML = "";
    infoSection.id = "";
    infoSection.innerHTML = "";
    showDescription(character)
  }
}

pacoInput.addEventListener("click", () => showDescription(paco));
paoloInput.addEventListener("click", () => showDescription(paolo));
sreInput.addEventListener("click", () => showDescription(sre));