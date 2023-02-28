// Saving and Deleting Notes
const saveBtn = document.getElementById("saveBtn");
const deletebtn = document.getElementById("deletebtn");
const notes = document.getElementById("notes");
notes.value = window.localStorage.getItem("notes");
saveBtn.addEventListener("click", () => {
  window.localStorage.setItem("notes", notes.value);
});
deletebtn.addEventListener("click", () => {
  window.localStorage.removeItem("notes", notes.value);
  notes.value = "";
});

// Changing Themes
const button = document.getElementById("btn");
var activeTheme = "dark";
function change_theme() {
  if (activeTheme == "light") {
    document.body.style.backgroundColor = "#F1F1F5";
    notes.style.backgroundColor = "#F1F1F5";
    notes.style.color = "#101018";
    activeTheme = "dark";
  } else {
    document.body.style.backgroundColor = "#101018";
    notes.style.backgroundColor = "#101018";
    notes.style.color = "#F1F1F5";
    activeTheme = "light";
  }
}
button.addEventListener("click", change_theme);
