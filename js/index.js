const addToCart = () => {
  const productEl = document.getElementById("product-element");
  const quantityEl = document.getElementById("quantity-element");
  const product = productEl.value;
  const quantity = quantityEl.value;
  productEl.value = "";
  quantityEl.value = "";
  //   console.log(product, quantity);
  displayLi(product, quantity);
  saveToLocalStorage(product, quantity);
};

const displayLi = (product, quantity) => {
  const liContainer = document.getElementById("li-container");
  const li = document.createElement("li");
  li.innerText = `${product} : ${quantity}`;
  liContainer.appendChild(li);
};

const getStoredShoppingCart = () => {
  const stordeCart = localStorage.getItem("cart");
  let cart = {};
  if (stordeCart) {
    cart = JSON.parse(stordeCart);
  }
  return cart;
};

const saveToLocalStorage = (product, quantity) => {
  const cart = getStoredShoppingCart();
  cart[product] = quantity;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const displayFromLocalStorage = () => {
  const savedCart = getStoredShoppingCart();
  for (const product in savedCart) {
    const quantity = savedCart[product];
    displayLi(product, quantity);
  }
};
displayFromLocalStorage();
