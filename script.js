document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".toggle");
  const btn = toggle.querySelector(".toggle-btn");

  btn.addEventListener("click", () => {
    toggle.classList.toggle("open");
    btn.innerHTML = toggle.classList.contains("open")
      ? "Các chức năng chính ▾"
      : "Các chức năng chính ▸";
  });
});
