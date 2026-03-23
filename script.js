const screens = Array.from(document.querySelectorAll(".screen"));
const nextButtons = Array.from(document.querySelectorAll("[data-next]"));
const tapCards = Array.from(document.querySelectorAll("[data-tap]"));
const revealCard = document.getElementById("revealCard");

let currentStep = 0;

function showStep(step) {
  currentStep = step;
  screens.forEach((screen, index) => {
    screen.classList.toggle("is-active", index === step);
  });
}

nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentStep < screens.length - 1) {
      showStep(currentStep + 1);
    }
  });
});

tapCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("is-open");
  });
});

if (revealCard) {
  revealCard.addEventListener("click", () => {
    const isOpen = revealCard.classList.toggle("is-open");
    revealCard.setAttribute("aria-expanded", String(isOpen));
  });
}
