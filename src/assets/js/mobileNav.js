const BURGER = document.getElementById("sidebarToggle");
const SIDEBAR = document.getElementById("sidebar");
const PAGE = document.getElementById("page");
const BODY = document.body;

BURGER.addEventListener("click", (event) => {
  if (BODY.classList.contains("show-sidebar")) {
    closeSidebar();
    return;
  }
  showSidebar();
});

function showSidebar() {
  let mask = document.createElement("div");
  mask.classList.add("page__mask");
  mask.addEventListener("click", closeSidebar)
  PAGE.appendChild(mask);

  BODY.classList.add('show-sidebar')
}

function closeSidebar() {
  BODY.classList.remove('show-sidebar');
  const mask = document.querySelector(".page__mask");
  mask.remove();
}