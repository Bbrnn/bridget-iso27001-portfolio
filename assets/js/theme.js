const toggleButton =document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme") || "light";

document.body.setAttribute('data-theme', currentTheme);

toggleButton.addEvetntListener('click', () => {
let newTheme = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
document.body.setAttribute("data-theme", newTheme);
localStorage.setItem("theme", newTheme);


});