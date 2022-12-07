const menuBtn = document.querySelector('.menu-btn');
const scrollMenu = document.querySelector('.scroll-menu');
const cancelBtn = document.querySelector('.cancel-btn')


menuBtn.onclick = () => {
  scrollMenu.classList.add("show");
}

cancelBtn.onclick = () => {
  scrollMenu.classList.remove("show");
}
