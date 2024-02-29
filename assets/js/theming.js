const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
prefersDarkScheme.addEventListener("change", handleMediaQueryChange);

function handleMediaQueryChange(e) {
  const { matches } = e;
  const theme = matches ? "dark" : "light";
  setTheme(theme);
}

const themeButtons = document.querySelectorAll(".theme-button");
themeButtons.forEach(button => {
  button.addEventListener("click", handleThemeButtonClick);
});

function handleThemeButtonClick(event) {
  const button = event.target;
  const value = button.value;
  setTheme(value);
  localStorage.setItem("theme", value);
}

function setTheme(value) {
  if (value === "system") {
    value = prefersDarkScheme.matches ? "dark" : "light";
  }
  document.documentElement.dataset.theme = value;
}

setTheme("system");