let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeCount = 0;
let guestCount = 0;

function resetGame() {
  homeCount = homeScore.textContent = 0;
  guestCount = guestScore.textContent = 0;
}
function addOneHome() {
  homeCount += 1;
  homeScore.textContent = homeCount;
}
function addTwoHome() {
  homeCount += 2;
  homeScore.textContent = homeCount;
}
function addThreeHome() {
  homeCount += 3;
  homeScore.textContent = homeCount;
}

function addOneGuest() {
  guestCount += 1;
  guestScore.textContent = guestCount;
}
function addTwoGuest() {
  guestCount += 2;
  guestScore.textContent = guestCount;
}
function addThreeGuest() {
  guestCount += 3;
  guestScore.textContent = guestCount;
}
