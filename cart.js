"use strict";
const productName = document.getElementById(`product-name`);
const price = document.getElementById(`price`);
const quantity = document.getElementById(`quantity`);
const addBTN = document.getElementById(`add-btn`);
const products = document.getElementById(`products`);
/////////////////////////
const addProduct = function () {
  if (
    !Number(productName.value) &&
    Number.isInteger(Number(price.value)) &&
    Number.isInteger(Number(quantity.value))
  ) {
    let total = Number(price.value) * Number(quantity.value);
    products.insertAdjacentHTML(
      `afterbegin`,
      `<tr>
  <th>${productName.value}</th>
  <th>${price.value}</th>
  <th>${quantity.value}</th>
  <th>${total}</th>
  <th><button class="delete">Remove</button></th>
</tr>`
    );
  } else {
    alert(`Wrong Or Missing input ,please ty again`);
  }
};
addBTN.addEventListener(`click`, addProduct);

document.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.className == "delete") {
    console.log(e.target.parentNode.parentNode.remove());
  }
});
