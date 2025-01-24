// Dynamic Text for Welcome Message
const textMessages = ["Hello and welcome!", "Welcome to my portfolio!"];
let welcomeIndex = 0;

const roles = ["Full-Stack Developer", "Java Developer", "Creative Thinker"];
let roleIndex = 0;

// Change Welcome Text
function updateWelcomeText() {
  const textDisplay = document.getElementById("textDisplay");
  textDisplay.textContent = textMessages[welcomeIndex];
  welcomeIndex = (welcomeIndex + 1) % textMessages.length;
}

// Change Role Text
function updateRoleText() {
  const textDisplay1 = document.getElementById("textDisplay1");
  textDisplay1.textContent = roles[roleIndex];
  roleIndex = (roleIndex + 1) % roles.length;
}

// Update Text at Intervals
setInterval(updateWelcomeText, 3000);
setInterval(updateRoleText, 2000);
