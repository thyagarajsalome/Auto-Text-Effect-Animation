const containerE1 = document.querySelector(".container");

const careers = ["3d Artist", "Web Developer", "Freelancer", "Designer"];

let careerIndex = 0;
let characterIndex = 0;

function updateText() {
  characterIndex++;
  containerE1.innerHTML = `<h1>I am a ${careers[careerIndex].slice(0, characterIndex)}</h1>`;
  if (characterIndex === careers[careerIndex].length) {
    characterIndex = 0;
    careerIndex++;
    if (careerIndex === careers.length) {
      careerIndex = 0; // Resetting to loop back
    }
  }
  setTimeout(updateText, 300);
}

// Start updating text
updateText();
