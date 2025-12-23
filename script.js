const products = [
  { id: 1, name: "Shoes", price: 1500 },
  { id: 2, name: "Cap", price: 300 },
  { id: 3, name: "Bag", price: 1200 },
  { id: 4, name: "Watch", price: 2500 },
  { id: 5, name: "Wallet", price: 700 },
  { id: 6, name: "Sunglasses", price: 900 },
];

const productsEl = document.getElementById("products");
const cartEl = document.getElementById("cart");
const cartItemsEl = document.getElementById("cartItems");
const totalEl = document.getElementById("total");
const cartCountEl = document.getElementById("cartCount");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* RENDER PRODUCTS */
function renderProducts() {
  products.forEach((p) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button>Add to Cart</button>
    `;

    div.querySelector("button").onclick = () => addToCart(p);
    productsEl.appendChild(div);
  });
}

/* ADD TO CART */
function addToCart(product) {
  cart.push(product);
  saveCart();
  renderCart();
}

/* SAVE CART */
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  cartCountEl.textContent = cart.length;
}

/* RENDER CART */
function renderCart() {
  cartItemsEl.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <span>${item.name}</span>
      <button>❌</button>
    `;

    div.querySelector("button").onclick = () => {
      cart.splice(index, 1);
      saveCart();
      renderCart();
    };

    cartItemsEl.appendChild(div);
  });

  totalEl.textContent = total;
}

/* TOGGLE CART */
document.getElementById("cartBtn").onclick = () => {
  cartEl.classList.remove("hidden");
};

document.getElementById("closeCart").onclick = () => {
  cartEl.classList.add("hidden");
};

/* INIT */
renderProducts();
renderCart();
saveCart();
