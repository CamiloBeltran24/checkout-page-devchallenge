  //form Validations
export const clearForm = (values) => {
    values.forEach((item) => {
        item.value = ""
    })
}
const getFormValues = () => {
  
}

export const validateForm = () => {
  const formButton = document.getElementById('form_submit');

  formButton.addEventListener('click', (e) => {
    e.preventDefault();

  })
}