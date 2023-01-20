const createProductRow = (products_in_cart) => {
    let customHTML = ``;

    products_in_cart.forEach( (product) => {
        customHTML += `<li>${product.name} <span>${product.amount}</span></li>`
    });

    return customHTML;
}
const getAlertHTML = ({ totalPrice, shipping, products_in_cart }) => {
    let products_rows = createProductRow(products_in_cart);
    const alertHTML = `
        <div class="alert-box">
            <span class="icon close js-close"></span>
            <figure>
                <img src="./assets/svg/success.svg" alt="success">
            </figure>
            <h3>purchase successfully generated</h3>
            <div class="text">
                <p>products in this purchase:</p>
                <ul>
                    ${products_rows}
                </ul>
            </div>
            <div class="total">
                <div class="total-info total">
                    <p>Total:</p>
                    <p>${totalPrice}</p>
                </div>
                <div class="total-info shipping">
                    <p>Shipping:</p>
                    <p>${shipping}</p>
                </div>
            </div>
        </div>
    `

    return alertHTML;
}

export const createAlert = (products_in_cart) => {
    let totalPrice = document.querySelector(".purchase-info .total .price").innerText;
    let shipping = document.querySelector(".purchase-info .shipping .price").innerText;
    let container = document.querySelector(".container")

    let alert_overlay = document.createElement('div')
    alert_overlay.classList.add("alert-overlay")

    container.append(alert_overlay);
    let customHTML = getAlertHTML({ totalPrice, shipping, products_in_cart })
    alert_overlay.innerHTML += customHTML;

    let closer_alert = document.querySelector('.js-close')
    closer_alert.addEventListener("click", () => {
        container.removeChild(alert_overlay)
    })
}
