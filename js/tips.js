const btnTip = document.getElementById("btn-tip");
const tipContainer = document.getElementById("tip-container");

const colorPalette = ["#C2E7D9", "#CDC7E5", "#E0E0E2", "#FFCAB1", "#EA638C"];
const tips = tipContainer.querySelectorAll(".tip");

let isClicked = false;
let tipElement = null;
let currentTip = 0;

btnTip.addEventListener("mouseenter", () => {
  currentTip = 1 - currentTip; //? only temporarily, because currently has only two tips
  tipElement = tips[currentTip];
  tipElement.style.right = -30 + "px";
  tipElement.style.background =
    colorPalette[Math.round(Math.random() * 10) % colorPalette.length];
});

btnTip.addEventListener("mouseleave", () => {
  if (isClicked) return;
  tipElement.style.right = 0 + "px";
});

btnTip.addEventListener("click", () => {
  const tipElmCopy = tipElement;
  if (isClicked) return;
  tipElement.style.right = -330 + "px";
  isClicked = true;
  setTimeout(() => {
    isClicked = false;
    tipElmCopy.style.right = 0 + "px";
  }, 4000);
});
