  //form Validations
export const clearForm = (values) => {
    values.forEach((item) => {
        item.value = ""
    })
}

export const getFormData = (e) => {

  const fields = Object.values(e.srcElement);
  let obj = {};

  fields.forEach((field) => {
    Object.defineProperty(obj, field.id, {
      value: field.value,
      writable: false,
      enumerable: true,
      configurable: true
    });
  });

  return obj;
}