function goToYes() {
  window.location.href = "yes.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  if (noBtn) {
    noBtn.addEventListener("mouseover", () => {
      noBtn.style.position = "absolute";
      noBtn.style.top = Math.random() * window.innerHeight + "px";
      noBtn.style.left = Math.random() * window.innerWidth + "px";
    });
  }
});