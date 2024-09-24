// modal

const modal = document.querySelector(".modal");
if (modal) {
  const openModalBtn = document.querySelector("#btn-open-modal");
  const closeModalBtn = document.querySelector("#btn-close-modal");
  const overlay = document.querySelector(".overlay");

  const openModal = () => {
    modal.classList.add("show-modal");
    overlay.classList.add("show-modal");
    document.querySelector("body").style.overflowY = "hidden";
    document.querySelector("body").style.paddingRight = "16px";
  };

  const closeModal = () => {
    modal.classList.remove("show-modal");
    overlay.classList.remove("show-modal");
    document.querySelector("body").style.overflowY = "auto";
    document.querySelector("body").style.paddingRight = "0";
  };

  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
}

// tabs

const cards = document.querySelectorAll(".card");
if (cards) {
  const tabsMenuButtons = document.querySelectorAll(".filter-btn");

  tabsMenuButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => handleActiveButton(e));
  });

  const handleActiveButton = (e) => {
    const target = e.target;
    tabsMenuButtons.forEach((menuBtn) => {
      menuBtn.classList.remove("filter-btn_active");
    });
    target.classList.add("filter-btn_active");

    const filterType = target.getAttribute("data-card-type");

    if (filterType === "all") {
      cards.forEach((card) => {
        card.classList.remove("hidden");
      });
      return;
    }

    cards.forEach((card) => {
      const cardType = card.getAttribute("data-category");
      card.classList.remove("hidden");
      if (cardType !== filterType) {
        card.classList.add("hidden");
      }
    });
  };
}
