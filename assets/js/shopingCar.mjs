export const products_in_cart = []

export const renderProduct = ( { name, image, price, discount, amount, standard_name, shipping } ) => {
  const shoppingCart = document.querySelector('.shopping-cart .products'),
        HTML_PRODUCT = `
          <div class='product'>
            <figure class="product__image">
              <img src="${image}" alt="imagen del producto ${name}" aria-label="imagen del producto ${name}">
            </figure>
            <div class="product__info">
              <h3 class="name">${name}</h3>
              <div class="prices">
                <span class="price-discount">$${discount}</span>
                <span class="price">$${price}</span>
              </div>
              <div class="quantity quantity-${standard_name}">
                <button class="less less-${standard_name}"> - </button>
                <span class="quantity_number ">${amount}</span>
                <button class="add add-${standard_name}"> + </button>
              </div>
            </div>
          </div>
            `;
    shoppingCart.innerHTML += HTML_PRODUCT;
};

export const updateShippingAndTotal = () => {
  const shipping_container = document.querySelector('.shopping-cart .shipping .price');
  const total_container = document.querySelector('.shopping-cart .total .price')
  let purchasePrice = 0;
  let purchaseShipping = 0;

  products_in_cart.forEach( ( { amount, shipping, discount }) => {
    const totalPriceProduct = discount * amount;
    purchasePrice += totalPriceProduct;
    shipping > purchaseShipping ? purchaseShipping = shipping : null;
  })

  shipping_container.innerText = `$${purchaseShipping.toFixed(2)}`;
  total_container.innerText = `$${purchasePrice.toFixed(2)}`;
}

export const createButtons = ( productObj ) => {
    productObj.createIncreaseButton();
    productObj.createDecreasebutton();
}

export const increase = (productObj) => {

  let amount_container = document.querySelector(`.quantity-${productObj.standard_name} span`);
  let button = document.querySelector(`.less-${productObj.standard_name}`)

  productObj.amount += 1;
  amount_container.innerText = productObj.amount;

  button.disabled = true ? button.disabled = false : null;

  updateShippingAndTotal();
}

export const decrease = (productObj) => {

  if(productObj.amount > 0) {

    productObj.amount -= 1;
    const amount_container = document.querySelector(`.quantity-${productObj.standard_name} span`)
    amount_container.innerText = productObj.amount

  } else {

    const button = document.querySelector(`.less-${productObj.standard_name}`)
    button.disabled = true;

  }

  updateShippingAndTotal()
}
