import  { products }  from './data/products.mjs';

(() => {

  const products_in_cart = [],
        buttons = [];

  const useContext = ({ name, image, price, discount, amount, shipping, standard_name = ""}) => ({
    name: name,
    image: image,
    price: price,
    discount: discount,
    amount: amount,
    shipping: shipping,
    standard_name: standard_name,
  })

  const renderProduct = ( { name, image, price, discount, amount, standard_name, shipping } ) => {
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

  const getMyProduct = ( standard_name ) => {
    const myProduct = products_in_cart.find(( product ) => product.standard_name = standard_name);
    return myProduct;
  }

  const createButtons = ( { standard_name } ) => {
    buttons.push(document.querySelector(`button.add-${standard_name}`));
    buttons.push(document.querySelector(`button.less-${standard_name}`));
  }

  const initializeHtmlEvents = () => {
    console.log(buttons);
    buttons.forEach((button) => {
      console.log(button);
      button.addEventListener("click", () => {
        console.log(button);
      })
    })
  }

  //START APP
  const startApp = () => {
    products.forEach((product) => {
      const newProduct = useContext( product )
      renderProduct( newProduct )
      createButtons( newProduct )
    })

    initializeHtmlEvents();
  }

  startApp();



  //form Validations
  const clearForm = (values) => {
    values.forEach((item) => {
      item.value = ""
    })
  }

  const createAlert = () => {

    let container = document.querySelector(".container")

    let alert_container = document.createElement('div')
    alert_container.classList.add("success-alert")

    let icon_box = document.createElement('figure')
    let icon = document.createElement('img')
    icon_box.classList.add("icon")
    icon.setAttribute("src", "/assets/svg/success.svg")

    container.append(alert_container)
    icon_box.append(icon)
    alert_container.append(icon_box)

    console.log(container);
  }

  // let form = document.querySelector('form');

  // let GDPR = document.getElementById("gdpr");

  // GDPR.addEventListener("change", ()=>{
  //   if(GDPR.classList.contains("empty")){
  //     GDPR.classList.remove("empty")
  //   }
  // })

  // form.addEventListener('submit', (e) => {

  //   let email = document.getElementById("mail");
  //   let phone = document.getElementById("phone");
  //   let full_name = document.getElementById("full-name");
  //   let address = document.getElementById("address");
  //   let city = document.getElementById("city");
  //   let country = document.getElementById("country");
  //   let postal_code = document.getElementById("postal-code");

  //   e.preventDefault()

  //   if(GDPR.checked) {
  //     createAlert()
  //   } else {
  //     GDPR.classList.toggle("empty")
  //   }
  // });

})();