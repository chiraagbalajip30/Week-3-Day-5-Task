// const countEl = document.querySelector("#count");
// const incrementBtn = document.querySelector("#increment");
// const decrementBtn = document.querySelector("#decrement");

// // STEP 1: Get value from LocalStorage OR default to 0
// let count = JSON.parse(localStorage.getItem("count")) || 0;

// // STEP 2: Show value on page
// countEl.textContent = count;

// // STEP 3: Increment
// incrementBtn.addEventListener("click", () => {
//   count++;
//   updateCounter();
// });

// // STEP 4: Decrement
// decrementBtn.addEventListener("click", () => {
//   count--;
//   updateCounter();
// });

// // STEP 5: Update UI + LocalStorage
// function updateCounter() {
//   countEl.textContent = count;
//   localStorage.setItem("count", JSON.stringify(count));
// }

// ---------------------------------------------------

// const toggleBtn = document.getElementById("themeToggle");

// // STEP 1: Load saved theme
// const savedTheme = localStorage.getItem("theme");

// if (savedTheme === "dark") {
//   document.body.classList.add("dark");
// }

// // STEP 2: Toggle + save
// toggleBtn.addEventListener("click", () => {
//   document.body.classList.toggle("dark");

//   if (document.body.classList.contains("dark")) {
//     localStorage.setItem("theme", "dark");
//   } else {
//     localStorage.setItem("theme", "light");
//   }
// });

// ------------------------------------------------

// const form = document.querySelector(".form");
// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const messageInput = document.querySelector("#message");

// // STEP 1: Load saved data
// nameInput.value= localStorage.getItem("name") || "";
// emailInput.value= localStorage.getItem("email") || "";
// messageInput.value= localStorage.getItem("message") || "";

// // STEP 2: Save on input
// nameInput.addEventListener("input", () => {
//     localStorage.setItem("name", nameInput.value);
// });

// emailInput.addEventListener("input", () => {
//     localStorage.setItem("email", emailInput.value);
// });

// --------------------------------------------------

const items = ["Shoes", "Bag", "Watch", "Cap", "Wallet"];
const itemList = document.getElementById("itemList");

// STEP 1: Load favorites from LocalStorage
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// STEP 2: Render items
function renderItems() {
  itemList.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");

    const isFav = favorites.includes(item);

    li.innerHTML = `
      <span>${item}</span>
      <button>${isFav ? "❤️" : "🤍"}</button>
    `;

    li.querySelector("button").addEventListener("click", () => {
      toggleFavorite(item);
    });

    itemList.appendChild(li);
  });
}

// STEP 3: Toggle favorite
function toggleFavorite(item) {
  if (favorites.includes(item)) {
    favorites = favorites.filter((fav) => fav !== item);
  } else {
    favorites.push(item);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderItems();
}

// Initial render
renderItems();
