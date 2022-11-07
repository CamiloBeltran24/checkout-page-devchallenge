const products = [
  {
    name: "Vintage Backbag",
    price: 94.99,
    price_discount: 54.99,
    product_image: "/assets/images/photo1.png",
    amount: 1,
    shipping: 9.5,
  },
  {
    name: "Levi Shoes",
    price: 124.99,
    price_discount: 74.99,
    product_image: "/assets/images/photo2.png",
    amount: 1,
    shipping: 9.5,
  },
];

let productsInCart = [];

function calculateTotal(products) {
  let totalBox = document.querySelector(".total__price");
}

function createElementInCart(product) {
  let element = `
      <div class="product">
        <div class="product-image">
          <figure>
            <img src="${product.product_image}" alt="${product.name}"/>
          </figure>
        </div>
        <div class="product-info">
          <div class="name">${product.name}</div>
          <div class="prices">
            <span class="price-discount">$${product.price_discount}</span>
            <span class="price">$${product.price}</span>
          </div>
          <div class="quantity">
            <div id="less" class='less'>-</div>
            <span class="quantity__number">${product.amount}</span>
            <div class='add'>+</div>
          </div>
        </div>
      </div>`;

  return element;
}

function addContentInCart() {
  const shoppingCartBox = document.querySelector(".shopping-cart");

  products.forEach((product) => {
    let product_cart = createElementInCart(product);

    shoppingCartBox.innerHTML += product_cart;
  });

  // for (let i = 0; i < productsInCart.length; i++) {
  //   product = productsInCart[i];
  //   button_class = product.name.replace(/\s/g, "").toLowerCase();
  //   let row = cart[i];

  //   row.innerHTML = `
  //     <div class="product-image">
  //       <figure>
  //         <img src="${product.product_image}" alt="${product.name}" />
  //       </figure>
  //     </div>
  //     <div class="product-info">
  //       <div class="name">${product.name}</div>
  //       <div class="prices">
  //         <span class="price-discount">$${product.price_discount}</span>
  //         <span class="price">$${product.price}</span>
  //       </div>
  //       <div class="quantity">
  //         <div id="less-${button_class}" class='less '>-</div>
  //         <span class="quantity__number">${product.amount}</span>
  //         <div class='add add-${button_class}'>+</div>
  //       </div>
  //     </div>`;
  // }

  shoppingCartBox.innerHTML += `
  <div class="purchase-info">
    <div class="shipping">
      <span>Shipping</span>
      <span class="shipping__price">$0</span>
    </div>
    <div class="total">
      <span>Total</span>
      <div class="total__price">$0</div>
    </div>
  </div>`;
}

addContentInCart();
