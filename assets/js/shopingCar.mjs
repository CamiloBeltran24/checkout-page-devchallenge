export const renderProduct = ( { name, image, price, discount, amount, standard_name, shipping } ) => {
    const shoppingCart = document.querySelector('.shopping-cart'),
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

export const createButtons = ( productObj ) => {
    productObj.createIncreaseButton();
    productObj.createDecreasebutton();
  }

export const increase = (productObj) => {
    let amount_container = document.querySelector(`.quantity-${productObj.standard_name} span`)
    productObj.amount += 1;
    amount_container.innerText = productObj.amount
  }

export const decrease = (productObj) => {
    let amount_container = document.querySelector(`.quantity-${productObj.standard_name} span`)
    if(productObj.amount >= 1) {
        productObj.amount -= 1;
    }
    amount_container.innerText = productObj.amount
}
