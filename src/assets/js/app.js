const MODAL_BTNS = document.querySelectorAll("[data-modal]");
const MODAL_CLOSE = document.querySelectorAll(".model__close");
const MODALS = document.querySelectorAll(".modal");
const BODY = document.body;

MODAL_BTNS.forEach((btn) => {
  btn.addEventListener("click", event => {
    let _this = event.currentTarget;
    let modalId = _this.getAttribute('data-modal')
    let modal = document.getElementById(modalId)
    let modelContent = modal.querySelector('.modal__content')

    modelContent.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    modal.classList.add("show");
    BODY.classList.add("no-scroll");

    setTimeout(() => {
      modelContent.style.transform = "none";
      modelContent.style.opacity = 1;
    }, 10);

  });
});

MODAL_CLOSE.forEach((close) => {
  close.addEventListener("click", (event) => {
    let currentModel = event.currentTarget.closest(".modal");
    closeModal(currentModel);
  })
})

MODALS.forEach((close) => {
  close.addEventListener("click", (event) => {
    let currentModel = event.target;
    closeModal(currentModel);
  });
});

function closeModal(modal) {

  let modelContent = modal.querySelector('.modal__content');
  modelContent.removeAttribute("style");

  setTimeout(() => {
    modal.classList.remove("show");
    BODY.classList.remove("no-scroll");
  }, 200);
}

//=================================================

const BURGER = document.getElementById("sidebarToggle");
const SIDEBAR = document.getElementById("sidebar");
const PAGE = document.getElementById("page");

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

//================================================================

const TEXTAREAS = document.querySelectorAll("[data-autoresize]");

TEXTAREAS.forEach((textarea) => {
  const textareaHeight = textarea.offsetHeight;

  textarea.addEventListener("input", (event) => {
    let _this = event.target;

    _this.style.height = `${textareaHeight}px`;
    _this.style.height = `${_this.scrollHeight}px`;
  });
});
