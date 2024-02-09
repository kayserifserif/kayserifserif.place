const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const themeStylesheet = document.querySelector(".theme-stylesheet");

const themeButtons = document.querySelectorAll(".theme-button");
themeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.value;
    setTheme(value);
    localStorage.setItem("theme", value);
  });
});

function setTheme(value) {
  if (value === "system") {
    value = prefersDarkScheme.matches ? "dark" : "light";
  }
  document.documentElement.dataset.theme = value;
  themeStylesheet.href = `/assets/css/${value}.css`;
}

setTheme("system");