const TEXTAREAS = document.querySelectorAll("[data-autoresize]");

TEXTAREAS.forEach((textarea) => {
  const textareaHeight = textarea.offsetHeight;

  textarea.addEventListener("input", (event) => {
    let _this = event.target;

    _this.style.height = `${textareaHeight}px`;
    _this.style.height = `${_this.scrollHeight}px`;
  });
});
