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

    // console.log(container);
}