import  { products }  from './data/products.mjs';
import { getFormData } from './forms.mjs';
import { createAlert } from './alerts.mjs';
import  { renderProduct, createButtons, increase, decrease, updateShippingAndTotal, products_in_cart } from './shopingCar.mjs'

(() => {
  let formData = {};

  const useContext = ({ name, image, price, discount, amount, shipping, standard_name = ""}) => ({
    name: name,
    image: image,
    price: price,
    discount: discount,
    amount: amount,
    shipping: shipping,
    standard_name: standard_name
  })

  //START APP
  const startApp = () => {
    products.forEach((product) => {
      const newProduct = useContext( product ); 

      newProduct.createIncreaseButton = function () {
        let increaseButton = document.querySelector(`button.add-${this.standard_name}`)
        if( increaseButton === null ) return null

          increaseButton.addEventListener('click', () => {
            increase(this)
        })
      }

      newProduct.createDecreasebutton = function () {
        let decreaseButton = document.querySelector(`button.less-${this.standard_name}`)
        if( decreaseButton === null ) return null

        decreaseButton.addEventListener('click', () => {
          decrease(this)
        })
      }

      renderProduct( newProduct );
      products_in_cart.push(newProduct);

      window.addEventListener("load", () => {
        createButtons( newProduct );
      })

    });

    updateShippingAndTotal();
  }

  //Form validation
  const FORM = document.getElementById('contact-form');
  
  FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    formData = getFormData(e);

    createAlert(products_in_cart); //send products to alert
  })

  //initialize APP
  startApp();
})();