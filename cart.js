"use strict";
const productName = document.getElementById(`product-name`);
const price = document.getElementById(`price`);
const quantity = document.getElementById(`quantity`);
const addBTN = document.getElementById(`add-btn`);
const products = document.getElementById(`products`);
/////////////////////////
const addProduct = function () {
  if (productName.value && price && quantity) {
    let total = price.value * 1 * quantity.value * 1;
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
    alert(`Please insert Missing values`);
  }
};
addBTN.addEventListener(`click`, addProduct);

document.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.className == "delete") {
    console.log(e.target.parentNode.parentNode.remove());
  }
});
