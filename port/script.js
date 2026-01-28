/* Typing effect */
const text = "Software Developer";
let i = 0;
function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text[i++];
    setTimeout(typing, 100);
  }
}
typing();

/* ✅ TOGGLE THEME – FIXED */
const btn = document.getElementById("toggleBtn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  localStorage.setItem("theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

/* Load saved theme */
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  btn.textContent = "☀️";
}