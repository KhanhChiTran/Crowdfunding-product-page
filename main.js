const modal = document.getElementById("modal");

const burgerMenu = document.querySelector(".burger-menu");

let state = true;
const closeMenu = document.getElementById("close");
const checkbox = document.getElementById("icon");
const foldOutMenu = document.getElementById("fold-out-menu");
checkbox.onclick = () => {
  if (foldOutMenu.style.display === "block") {
    foldOutMenu.style.display = "none";

    // closeMenu.style.display = "block";
  } else {
    foldOutMenu.style.display = "block";
    closeMenu.style.display = "block";
    checkbox.style.display = "none";
    modal.style.display = "block";
  }
};
closeMenu.onclick = () => {
  if (foldOutMenu.style.display === "block") {
    foldOutMenu.style.display = "none";
    checkbox.style.display = "block";
    closeMenu.style.display = "none";
    modal.style.display = "none";

    // closeMenu.style.display = "block";
  } else {
    foldOutMenu.style.display = "none";
    checkbox.style.display = "block";
  }
};
const modalLayout = document.querySelector(".modal-back");
const backThisProject = document.querySelector(".back-btn");
const mainCards = document.querySelector(".cards");
backThisProject.onclick = () => {
  mainCards.style.display = "none";
  modal.style.display = "block";
  modalLayout.style.display = "block";

  //   state = !state;
};
const modalCheckbox = document.querySelector(".modal-checkbox");
modalCheckbox.onclick = () => {
  modalCheckbox.style.background = "hsl(174, 86%, 45%)";
};

const bookmarkIcon = document.querySelector(".bookmark");
bookmarkIcon.onclick = () => {
  console.log("clicking ....");
};
