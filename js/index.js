function showDescription() {
  const pacoCard = document.getElementById("paco");
  const paoloCard = document.getElementById("paolo");
  const sreCard = document.getElementById("sre");

  const pacoDisplay = document.getElementById("paco-display");
  const paoloDisplay = document.getElementById("paolo-display");
  const sreDisplay = document.getElementById("sre-display");

  if (pacoCard.checked) {
    pacoDisplay.style.display = "flex";
  } else {
    pacoDisplay.style.display = "none";
  }
  if (paoloCard.checked) {
    paoloDisplay.style.display = "flex";
  } else {
    paoloDisplay.style.display = "none";
  }
  if (sreCard.checked) {
    sreDisplay.style.display = "flex";
  } else {
    sreDisplay.style.display = "none";
  }
}

window.addEventListener('load', showDescription) 