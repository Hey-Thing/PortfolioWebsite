// Get all modals
let modals = document.getElementsByClassName("modal");

// Get all the button that opens the modal
let btns = document.getElementsByClassName("showModal");

// Get all the <span> element that closes the modal
let closeBtns = document.getElementsByClassName("close");



Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", (ev) => {
    const id = ev.target.dataset.modalId;
    const el = document.getElementById(id);
    el.style.display = "block";
  });
});

Array.from(closeBtns).forEach((span) => {
  span.addEventListener(`click`, (ev) => {
    ev.preventDefault();
    const modal = ev.target.closest(".modal");
    modal.style.display = "none";
  });
});

// Prevent modal close when clicking inside modal-content
document.querySelectorAll('.modal-content').forEach(modalContent => {
  modalContent.addEventListener('click', function(event) {
    event.stopPropagation();
  });
});

// Update window click handler to close modal only if clicking on modal background
window.addEventListener("click", (ev) => {
  // Only close if clicking directly on the modal background
  if (ev.target.classList.contains("modal")) {
    ev.target.style.display = "none";
  }
});
