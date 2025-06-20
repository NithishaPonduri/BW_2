const products = [
  { id: 1, name: "T-Shirt", price: 499, image: "https://via.placeholder.com/200x150" },
  { id: 2, name: "Jeans", price: 999, image: "https://via.placeholder.com/200x150" },
  { id: 3, name: "Shoes", price: 1499, image: "https://via.placeholder.com/200x150" },
  { id: 4, name: "Watch", price: 1999, image: "https://via.placeholder.com/200x150" },
];

let cart = [];

function loadProducts() {
  const container = document.getElementById("product-container");
  container.innerHTML = "";
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>?${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("total");

  cartItems.innerHTML = "";
  let totalPrice = 0;
  cart.forEach((item, index) => {
    totalPrice += item.price;
    const li = document.createElement("li");
    li.innerHTML = `${item.name} - ?${item.price} <button onclick="removeItem(${index})">x</button>`;
    cartItems.appendChild(li);
  });

  total.innerText = totalPrice;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function toggleCart() {
  const cartModal = document.getElementById("cart-modal");
  cartModal.style.display = cartModal.style.display === "block" ? "none" : "block";
}

function checkout() {
  alert("Thank you for your purchase!");
  cart = [];
  updateCart();
  toggleCart();
}

window.onload = loadProducts;
