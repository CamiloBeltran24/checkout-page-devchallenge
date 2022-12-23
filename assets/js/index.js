const original_products = [
  {
    name: 'Vintage Backbag',
    price: 94.99,
    price_discount: 54.99,
    product_image: '/assets/images/photo1.png',
    amount: 1,
    shipping: 9.5,
  },
  {
    name: 'Levi Shoes',
    price: 124.99,
    price_discount: 74.99,
    product_image: '/assets/images/photo2.png',
    amount: 1,
    shipping: 9.5,
  },
];

const products_in_cart = [];

const increase = (product) => {
  product.amount += 1;
};

const decrease = (product) => {
  if (product.amount > 0) {
    product.amount -= 1;
  }
};
const shoppingBag = (products) => {
  products.forEach((product) => {
    const add_button = document.querySelector(`.add-${product.standar_name}`);
    const less_button = document.querySelector(`.less-${product.standar_name}`);
    const quantity = document.querySelector(
      `.quantity-${product.standar_name} .quantity_number`
    );

    add_button.addEventListener('click', () => {
      increase(product);
      quantity.innerText = product.amount;
    });

    less_button.addEventListener('click', () => {
      decrease(product);
      quantity.innerText = product.amount;
    });
  });
};

const renderProducts = (products) => {
  let shoppingCart = document.querySelector('.shopping-cart');

  let standar_name = '';

  products.forEach((product) => {
    standar_name = product.name.replace(' ', '-').toLowerCase();
    let HTML_PRODUCT = `
    <div class='product'>
      <figure class="product__image">
        <img src="${product.product_image}" alt="imagen del producto ${product.name}" aria-label="imagen del producto ${product.name}">
      </figure>
      <div class="product__info">
        <h3 class="name">${product.name}</h3>
        <div class="prices">
          <span class="price-discount">$${product.price_discount}</span>
          <span class="price">$${product.price}</span>
        </div>
        <aside class="quantity quantity-${standar_name}">
          <button class="less less-${standar_name}"> - </button>
          <span class="quantity_number ">${product.amount}</span>
          <button class="add add-${standar_name}"> + </button>
        </aside>
      </div>
    </div>
  `;
    product.standar_name = standar_name;
    products_in_cart.push({ ...product });
    shoppingCart.innerHTML += HTML_PRODUCT;
  });

  shoppingBag(products_in_cart);
};

renderProducts(original_products);

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

let form = document.querySelector('form');
let submit_button = document.querySelector('.submit input');

let gdpr = document.getElementById("gdpr");

let ready_to_send = false

gdpr.addEventListener("change", ()=>{
  if(gdpr.classList.contains("empty")){
    gdpr.classList.remove("empty")
  }
})

form.addEventListener('submit', (e) => {
  
  let email = document.getElementById("mail");
  let phone = document.getElementById("phone");
  let full_name = document.getElementById("full-name");
  let address = document.getElementById("address");
  let city = document.getElementById("city");
  let country = document.getElementById("country");
  let postal_code = document.getElementById("postal-code");

  e.preventDefault()
  
  if(gdpr.checked) {
    createAlert()
  } else {
    gdpr.classList.toggle("empty")
  }
});
