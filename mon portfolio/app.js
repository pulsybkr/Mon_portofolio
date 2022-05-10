const navMenu = document.querySelector("#navMenu");
  const menuNavi = document.querySelector(".menu-navi");

navMenu.addEventListener('click', () => {
    navMenu.classList.toggle("active");
    menuNavi.classList.toggle("menu-active")

})