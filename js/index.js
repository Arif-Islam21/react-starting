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

const saveToLocalStorage = (product, quantity) => {};
