"use strict";
const productName = document.getElementById(`product-name`);
const price = document.getElementById(`price`);
const quantity = document.getElementById(`quantity`);
const addBTN = document.getElementById(`add-btn`);
const products = document.getElementById(`products`);
/////////////////////////

// Add Button
const addProduct = function () {
  if (
    !Number(productName.value) &&
    Number.isInteger(Number(price.value)) &&
    Number.isInteger(Number(quantity.value)) &&
    price.value &&
    quantity.value &&
    productName.value
  ) {
    let total = Number(price.value) * Number(quantity.value);
    products.insertAdjacentHTML(
      `afterbegin`,
      `<tr>
  <th>${productName.value}</th>
  <th>${price.value} USD</th>
  <th>${quantity.value}</th>
  <th>${total} USD</th>
  <th><button class="btn btn-primary delete">Remove</button></th>
</tr>`
    );
  } else {
    alert(`Wrong Or Missing input ,please ty again`);
  }
};
addBTN.addEventListener(`click`, addProduct);

// Remove Button
const removeProduct = function (e) {
  if (e.target.classList.contains(`delete`)) {
    return e.target.parentNode.parentNode.remove()
  }
};
document.addEventListener("click", removeProduct);
