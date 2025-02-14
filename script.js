let $ = document;

const btnShowModal = $.getElementById("btnShowModal");
const myModal = $.getElementById("myModal");
const closeSpan = $.querySelector(".closeSpan");
const closeBtn = $.querySelector(".closeBtn");
const divMain = $.getElementById("divMain");

const pics = [
  "img/1.jpg",
  "img/3.jpg",
  "img/bg.jpg",
  "img/city.jpg",
  "img/free.jpg",
];

// ! set random bg
window.addEventListener("load", () => {
  let randomPic = Math.floor(Math.random() * pics.length);

  divMain.style.backgroundImage = `url(${pics[randomPic]})`;
});

// ! close with ESC key
$.addEventListener("keydown", (e) => {
  // console.log(e)

  if (e.keyCode === 27) {
    closeModal();
  }
});

// ! show/close modal
function showModal() {
  myModal.style.display = "block";
  myModal.style.zIndex = 5;

  divMain.style.filter = "blur(4px)";
}
function closeModal() {
  myModal.style.display = "none";
  myModal.style.zIndex = 0;

  divMain.style.filter = "blur(0)";
}

btnShowModal.addEventListener("click", showModal);
closeBtn.addEventListener("click", closeModal);
closeSpan.addEventListener("click", closeModal);
