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
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    value = prefersDarkScheme.matches ? "dark" : "light";
  }
  document.documentElement.dataset.theme = value;
}

setTheme("system");