  //form Validations
export const clearForm = (values) => {
    values.forEach((item) => {
        item.value = ""
    })
}