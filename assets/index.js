import { paco, paolo, sre } from "./characters.js";
import { disableBtn } from "./disableBtn.js";
import { randomSelection } from "./randomSelection.js";

let currentCharacter;
let currentEnemyCharacter;

let possibleEnemyCharacter = [paolo, paco, sre];

const pacoInput = document.querySelector("#paco");
const paoloInput = document.querySelector("#paolo");
const sreInput = document.querySelector("#sre");

pacoInput.checked = false;
paoloInput.checked = false;
sreInput.checked = false;

const infoSection = document.createElement("section");
const characterDisplaySection = document.querySelector("#character-display");

const startBtn = document.createElement("button");

function showDescription(character) {
  currentCharacter = character;
  if (infoSection.id !== "character-info") {
    paco.attacks = [];
    paolo.attacks = [];
    sre.attacks = [];
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
    btnRockImg.src = "/src/imgs/cobblestone.webp";
    btnRockImg.alt = "Rock";
    btnRock.appendChild(btnRockImg);

    const btnPapperImg = document.createElement("img");
    btnPapperImg.src = "/src/imgs/papper.webp";
    btnPapperImg.alt = "Papper";
    btnPapper.appendChild(btnPapperImg);

    const btnScissorsImg = document.createElement("img");
    btnScissorsImg.src = "/src/imgs/scissors.png";
    btnScissorsImg.alt = "Scissors";
    btnScissors.appendChild(btnScissorsImg);

    attacksContainer.append(btnRock, btnPapper, btnScissors);

    //* Select Attacks section
    const selectRockAttack = () => {
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
    };

    const selectPapperAttack = () => {
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
    };

    const selectScissorsAttack = () => {
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
    };

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

const lifePoint1 = document.createElement("div");
const lifePoint2 = document.createElement("div");
const lifePoint3 = document.createElement("div");
const lifePoint4 = document.createElement("div");
const lifePoint5 = document.createElement("div");
const enemyLifePoint1 = document.createElement("div");
const enemyLifePoint2 = document.createElement("div");
const enemyLifePoint3 = document.createElement("div");
const enemyLifePoint4 = document.createElement("div");
const enemyLifePoint5 = document.createElement("div");

function playerLoseLifePoint() {
  if (currentCharacter === paolo) {
    if (!lifePoint5.className.includes("lose-life")) {
      lifePoint5.classList.add("lose-life");
    } else if (!lifePoint4.className.includes("lose-life")) {
      lifePoint4.classList.add("lose-life");
    } else if (!lifePoint3.className.includes("lose-life")) {
      lifePoint3.classList.add("lose-life");
    } else if (!lifePoint2.className.includes("lose-life")) {
      lifePoint2.classList.add("lose-life");
    } else {
      lifePoint1.classList.add("lose-life");
    }
  } else if (currentCharacter === paco) {
    if (!lifePoint4.className.includes("lose-life")) {
      lifePoint4.classList.add("lose-life");
    } else if (!lifePoint3.className.includes("lose-life")) {
      lifePoint3.classList.add("lose-life");
    } else if (!lifePoint2.className.includes("lose-life")) {
      lifePoint2.classList.add("lose-life");
    } else {
      lifePoint1.classList.add("lose-life");
    }
  } else {
    if (!lifePoint3.className.includes("lose-life")) {
      lifePoint3.classList.add("lose-life");
    } else if (!lifePoint2.className.includes("lose-life")) {
      lifePoint2.classList.add("lose-life");
    } else {
      lifePoint1.classList.add("lose-life");
    }
  }
}
function enemyLoseLifePoint() {
  if (currentEnemyCharacter === paolo) {
    if (!enemyLifePoint5.className.includes("lose-life")) {
      enemyLifePoint5.classList.add("lose-life");
    } else if (!enemyLifePoint4.className.includes("lose-life")) {
      enemyLifePoint4.classList.add("lose-life");
    } else if (!enemyLifePoint3.className.includes("lose-life")) {
      enemyLifePoint3.classList.add("lose-life");
    } else if (!enemyLifePoint2.className.includes("lose-life")) {
      enemyLifePoint2.classList.add("lose-life");
    } else {
      enemyLifePoint1.classList.add("lose-life");
    }
  } else if (currentEnemyCharacter === paco) {
    if (!enemyLifePoint4.className.includes("lose-life")) {
      enemyLifePoint4.classList.add("lose-life");
    } else if (!enemyLifePoint3.className.includes("lose-life")) {
      enemyLifePoint3.classList.add("lose-life");
    } else if (!enemyLifePoint2.className.includes("lose-life")) {
      enemyLifePoint2.classList.add("lose-life");
    } else {
      enemyLifePoint1.classList.add("lose-life");
    }
  } else {
    if (!enemyLifePoint3.className.includes("lose-life")) {
      enemyLifePoint3.classList.add("lose-life");
    } else if (!enemyLifePoint2.className.includes("lose-life")) {
      enemyLifePoint2.classList.add("lose-life");
    } else {
      enemyLifePoint1.classList.add("lose-life");
    }
  }
}

function startGame() {
  //* Screen cleaning
  if (currentCharacter === sre && sre.attacks.length !== 3) return;
  if (currentCharacter === paco && paco.attacks.length !== 2) return;
  if (currentCharacter === paolo && paolo.attacks.length !== 1) return;
  const body = document.querySelector("body");
  body.innerHTML = "";

  //* Creating battle screen
  const secondScreen = document.createElement("section");
  secondScreen.id = "second-screen";

  const battleMusic = new Audio("/src/audio/spider-dance.mp3");
  battleMusic.play();

  const battleTitle = document.createElement("h1");
  battleTitle.innerText = "FIGHT!!";
  battleTitle.className = "second-title";

  const battleSection = document.createElement("section");
  battleSection.id = "battle-section";

  //* Player Character creation
  const playerCharacter = document.createElement("div");
  playerCharacter.id = "player-character";

  const playerCardsContainer = document.createElement("div");
  playerCardsContainer.className = "character-cards-container";
  playerCharacter.appendChild(playerCardsContainer);

  const playerCharacterStats = document.createElement("div");
  playerCharacterStats.className = "character-stats";

  const life = document.createElement("div");
  life.className = "life";

  if (currentCharacter === paolo) {
    lifePoint1.className = "paolo-life life-point";
    lifePoint2.className = "paolo-life life-point";
    lifePoint3.className = "paolo-life life-point";
    lifePoint4.className = "paolo-life life-point";
    lifePoint5.className = "paolo-life life-point";
    life.append(lifePoint1, lifePoint2, lifePoint3, lifePoint4, lifePoint5);
  } else if (currentCharacter === paco) {
    lifePoint1.className = "paco-life life-point";
    lifePoint2.className = "paco-life life-point";
    lifePoint3.className = "paco-life life-point";
    lifePoint4.className = "paco-life life-point";
    life.append(lifePoint1, lifePoint2, lifePoint3, lifePoint4);
  } else {
    lifePoint1.className = "sre-life life-point";
    lifePoint2.className = "sre-life life-point";
    lifePoint3.className = "sre-life life-point";
    life.append(lifePoint1, lifePoint2, lifePoint3);
  }

  const battleImg = document.createElement("img");
  battleImg.className = "battle-img";
  battleImg.src = currentCharacter.image;

  const playerImageContainer = document.createElement("div");
  playerImageContainer.className = "image-container";

  playerImageContainer.appendChild(battleImg);

  playerCharacterStats.append(life, playerImageContainer);

  const playerCharacterName = document.createElement("h2");
  playerCharacterName.className = "character-name";
  playerCharacterName.innerText = currentCharacter.name;

  const playerAttacksContainer = document.createElement("div");
  playerAttacksContainer.className = "battle-attacks-container";

  const rockAttack = document.createElement("button");
  const papperAttack = document.createElement("button");
  const scissorsAttack = document.createElement("button");

  const rockAttackImg = document.createElement("img");
  rockAttackImg.src = "/src/imgs/cobblestone.webp";
  rockAttack.appendChild(rockAttackImg);

  const papperAttackImg = document.createElement("img");
  papperAttackImg.src = "/src/imgs/papper.webp";
  papperAttack.appendChild(papperAttackImg);

  const scissorsAttackImg = document.createElement("img");
  scissorsAttackImg.src = "/src/imgs/scissors.png";
  scissorsAttack.appendChild(scissorsAttackImg);

  if (currentCharacter === paolo) {
    if (currentCharacter.attacks.includes("rock")) {
      playerAttacksContainer.appendChild(rockAttack);
    } else if (currentCharacter.attacks.includes("papper")) {
      playerAttacksContainer.appendChild(papperAttack);
    } else {
      playerAttacksContainer.appendChild(scissorsAttack);
    }
  } else if (currentCharacter === paco) {
    if (
      currentCharacter.attacks.includes("rock") &&
      currentCharacter.attacks.includes("papper")
    ) {
      playerAttacksContainer.append(rockAttack, papperAttack);
    } else if (
      currentCharacter.attacks.includes("rock") &&
      currentCharacter.attacks.includes("scissors")
    ) {
      playerAttacksContainer.append(rockAttack, scissorsAttack);
    } else if (
      currentCharacter.attacks.includes("scissors") &&
      currentCharacter.attacks.includes("papper")
    ) {
      playerAttacksContainer.append(papperAttack, scissorsAttack);
    }
  } else {
    playerAttacksContainer.append(rockAttack, papperAttack, scissorsAttack);
  }

  playerCardsContainer.append(
    playerCharacterStats,
    playerCharacterName,
    playerAttacksContainer
  );

  //* vs. text
  const vsTitle = document.createElement("p");
  vsTitle.className = "second-title";
  vsTitle.innerText = "VS.";

  //* Enemy Character creation
  currentEnemyCharacter = possibleEnemyCharacter[randomSelection()];

  const enemyCharacter = document.createElement("div");
  enemyCharacter.id = "enemy-character";

  const enemyCardsContainer = document.createElement("div");
  enemyCardsContainer.className = "character-cards-container";
  enemyCharacter.appendChild(enemyCardsContainer);

  const enemyCharacterStats = document.createElement("div");
  enemyCharacterStats.className = "character-stats";

  const enemyLife = document.createElement("div");
  enemyLife.className = "life";

  if (currentEnemyCharacter === paolo) {
    enemyLifePoint1.className = "paolo-life life-point";
    enemyLifePoint2.className = "paolo-life life-point";
    enemyLifePoint3.className = "paolo-life life-point";
    enemyLifePoint4.className = "paolo-life life-point";
    enemyLifePoint5.className = "paolo-life life-point";
    enemyLife.append(
      enemyLifePoint1,
      enemyLifePoint2,
      enemyLifePoint3,
      enemyLifePoint4,
      enemyLifePoint5
    );
  } else if (currentEnemyCharacter === paco) {
    enemyLifePoint1.className = "paco-life life-point";
    enemyLifePoint2.className = "paco-life life-point";
    enemyLifePoint3.className = "paco-life life-point";
    enemyLifePoint4.className = "paco-life life-point";
    enemyLife.append(
      enemyLifePoint1,
      enemyLifePoint2,
      enemyLifePoint3,
      enemyLifePoint4
    );
  } else {
    enemyLifePoint1.className = "sre-life life-point";
    enemyLifePoint2.className = "sre-life life-point";
    enemyLifePoint3.className = "sre-life life-point";
    enemyLife.append(enemyLifePoint1, enemyLifePoint2, enemyLifePoint3);
  }

  const enemyImageContainer = document.createElement("div");
  enemyImageContainer.className = "image-container";

  const enemyBattleImg = document.createElement("img");
  enemyBattleImg.className = "battle-img";
  enemyBattleImg.src = currentEnemyCharacter.image;

  enemyImageContainer.appendChild(enemyBattleImg);

  enemyCharacterStats.append(enemyLife, enemyImageContainer);

  const enemyCharacterName = document.createElement("h2");
  enemyCharacterName.className = "character-name";
  enemyCharacterName.innerText = `Evil ${currentEnemyCharacter.name}`;

  const enemyAttacksContainer = document.createElement("div");
  enemyAttacksContainer.className = "battle-attacks-container";

  const enemyRockAttack = document.createElement("button");
  const enemyPapperAttack = document.createElement("button");
  const enemyScissorsAttack = document.createElement("button");

  enemyRockAttack.style = "cursor: inherit";
  enemyPapperAttack.style = "cursor: inherit";
  enemyScissorsAttack.style = "cursor: inherit";

  const enemyRockAttackImg = document.createElement("img");
  enemyRockAttackImg.src = "/src/imgs/cobblestone.webp";
  enemyRockAttack.appendChild(enemyRockAttackImg);

  const enemyPapperAttackImg = document.createElement("img");
  enemyPapperAttackImg.src = "/src/imgs/papper.webp";
  enemyPapperAttack.appendChild(enemyPapperAttackImg);

  const enemyScissorsAttackImg = document.createElement("img");
  enemyScissorsAttackImg.src = "/src/imgs/scissors.png";
  enemyScissorsAttack.appendChild(enemyScissorsAttackImg);

  enemyAttacksContainer.append(
    enemyRockAttack,
    enemyPapperAttack,
    enemyScissorsAttack
  );
  enemyCardsContainer.append(
    enemyCharacterStats,
    enemyCharacterName,
    enemyAttacksContainer
  );

  //! appending into the battleSection
  battleSection.append(playerCharacter, vsTitle, enemyCharacter);

  //* History section creation
  const historySection = document.createElement("section");
  historySection.id = "history-section";

  const roundResult = document.createElement("h3");
  roundResult.innerText = "ATTACK FIRST!!";

  const attacksHistory = document.createElement("span");
  attacksHistory.id = "attacks-history";

  const playerAttacksHistory = document.createElement("div");
  playerAttacksHistory.id = "attacks-history-player";
  playerAttacksHistory.innerText = "";

  const line = document.createElement("div");
  line.id = "line";

  const enemyAttacksHistory = document.createElement("div");
  enemyAttacksHistory.id = "attacks-history-enemy";
  enemyAttacksHistory.innerText = "";

  attacksHistory.append(playerAttacksHistory, line, enemyAttacksHistory);

  historySection.append(roundResult, attacksHistory);

  //* attack functions

  let playerAttack;
  let enemyAttack;

  const printEnemyAttack = () => {
    enemyAttack = randomSelection();
    if (enemyAttack === 0) {
      enemyAttacksHistory.innerHTML += "<p>Rock</p>";
    } else if (enemyAttack === 1) {
      enemyAttacksHistory.innerHTML += "<p>Papper</p>";
    } else {
      enemyAttacksHistory.innerHTML += "<p>Scissors</p>";
    }
  };

  const checkBattleResult = () => {
    if (playerAttack === enemyAttack) {
      roundResult.innerText = "TIE!";
    } else if (playerAttack === 0) {
      if (enemyAttack === 1) {
        roundResult.innerText = "You lose :(";
        playerLoseLifePoint();
      } else {
        roundResult.innerText = "You win!";
        enemyLoseLifePoint();
      }
    } else if (playerAttack === 1) {
      if (enemyAttack === 0) {
        roundResult.innerText = "You win!";
        enemyLoseLifePoint();
      } else {
        roundResult.innerText = "You lose :(";
        playerLoseLifePoint();
      }
    } else {
      if (enemyAttack === 0) {
        roundResult.innerText = "You lose :(";
        playerLoseLifePoint();
      } else {
        roundResult.innerText = "You win!";
        enemyLoseLifePoint();
      }
    }
  };

  const attackingRock = () => {
    playerAttacksHistory.innerHTML += "<p>Rock</p>";
    playerAttack = 0;
    printEnemyAttack();
    checkBattleResult();
    isDead();
  };
  const attackingPapper = () => {
    playerAttacksHistory.innerHTML += "<p>Papper</p>";
    playerAttack = 1;
    printEnemyAttack();
    checkBattleResult();
    isDead();
  };
  const attackingScissors = () => {
    playerAttacksHistory.innerHTML += "<p>Scissors</p>";
    playerAttack = 2;
    printEnemyAttack();
    checkBattleResult();
    isDead();
  };

  const isDead = () => {
    const restartBtn = document.createElement("button");
    restartBtn.id = "start-btn";
    restartBtn.innerText = "RESTART";
    restartBtn.addEventListener("click", () => window.location.reload());
    if (lifePoint1.classList.contains("lose-life")) {
      playerCharacter.remove();
      vsTitle.remove();
      enemyAttacksContainer.remove();
      roundResult.remove();
      battleTitle.innerText = "💀You lose💀";
      enemyLife.remove();
      secondScreen.appendChild(restartBtn);
    } else if (enemyLifePoint1.classList.contains("lose-life")) {
      enemyCharacter.remove();
      vsTitle.remove();
      playerAttacksContainer.remove();
      roundResult.remove();
      battleTitle.innerText = "🎉You win!🎉";
      life.remove();
      secondScreen.appendChild(restartBtn);
    }
  };

  rockAttack.addEventListener("click", attackingRock);
  papperAttack.addEventListener("click", attackingPapper);
  scissorsAttack.addEventListener("click", attackingScissors);

  secondScreen.append(battleTitle, battleSection, historySection);
  body.appendChild(secondScreen);
}

pacoInput.addEventListener("click", () => showDescription(paco));
paoloInput.addEventListener("click", () => showDescription(paolo));
sreInput.addEventListener("click", () => showDescription(sre));

startBtn.addEventListener("click", startGame);
