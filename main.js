const modal = document.getElementById("modal");

const burgerMenu = document.querySelector(".burger-menu");

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
};
const modalCheckbox1 = document.getElementById("checkbox1");
let state1 = true;
modalCheckbox1.onclick = () => {
  state1 = !state1;
  if (!state1) {
    // modalCheckbox2.onclick();
    return (modalCheckbox1.style.background = "hsl(174, 86%, 45%)");
  }

  modalCheckbox1.style.background = "";
};
const modalCheckbox2 = document.getElementById("checkbox2");
let state2 = true;
modalCheckbox2.onclick = () => {
  state2 = !state2;
  if (!state2) {
    return (modalCheckbox2.style.background = "hsl(174, 86%, 45%)");
  }

  modalCheckbox2.style.background = "";
};
const modalCheckbox3 = document.getElementById("checkbox3");
let state3 = true;
modalCheckbox3.onclick = () => {
  state3 = !state3;
  if (!state3) {
    return (modalCheckbox3.style.background = "hsl(174, 86%, 45%)");
  }

  modalCheckbox3.style.background = "";
};
const modalClose = document.querySelector(".close");
modalClose.onclick = () => {
  modalLayout.style.display = "none";
  modal.style.display = "none";
  mainCards.style.display = "block";
};
const bookmarkIcon = document.querySelector(".bookmark");
bookmarkIcon.onclick = () => {
  console.log("clicking ....");
};
