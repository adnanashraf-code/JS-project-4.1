let img = document.querySelector("img");
let yo = document.querySelector("i");
let h2 = document.querySelector("h2");

let originalText= h2.textContent;
img.addEventListener("dblclick", function () {
  yo.style.opacity = 1;
  h2.textContent = "My love";
  yo.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";
  setTimeout(() => {
    yo.style.transform = "translate(-50%, -300%) scale(1) rotate(60deg)";
  }, 800);
  setTimeout(() => {
    yo.style.opacity = 0;
  }, 1000);
  setTimeout(() => {
    yo.style.transform = "translate(-50%, -50%) scale(0) rotate(-60deg)";
  }, 1200);
  setTimeout(() => {
    h2.textContent = originalText;
  }, 1500);
});
