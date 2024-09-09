const openModalBtn = document.querySelector("#btn-open-modal");
const closeModalBtn = document.querySelector("#btn-close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.querySelector("body").style.overflowY = "hidden";
  document.querySelector("body").style.paddingRight = "16px";
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  document.querySelector("body").style.overflowY = "auto";
  document.querySelector("body").style.paddingRight = "0";
};

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
