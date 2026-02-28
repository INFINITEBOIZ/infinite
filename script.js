// ============================
// FULLSCREEN IMAGE MODAL
// ============================

document.addEventListener("DOMContentLoaded", () => {

  const images = document.querySelectorAll(".gallery img");

  if (images.length === 0) return;

  const modal = document.createElement("div");
  modal.classList.add("img-modal");

  const modalImg = document.createElement("img");
  modal.appendChild(modalImg);

  document.body.appendChild(modal);

  // Open modal
  images.forEach(img => {
    img.addEventListener("click", () => {
      modal.classList.add("show");
      modalImg.src = img.src;
      document.body.style.overflow = "hidden";
    });
  });

  // Close modal on click
  modal.addEventListener("click", () => {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
  });

  // Close with ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.remove("show");
      document.body.style.overflow = "auto";
    }
  });

});
