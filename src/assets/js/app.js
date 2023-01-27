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