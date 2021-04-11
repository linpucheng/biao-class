window.biaoForm = {
  getData,
  setData,
}

function getData(form) {
  let data = {};

  let inputs = form.querySelectorAll('[name]');

  inputs.forEach(it => {
    switch (it.type) {
      case 'number':
        data[it.name] = parseFloat(it.value);
        break;
      case 'radio':
        if (!it.checked) {
          return;
        }

        data[it.name] = it.value;
        break;
      case 'checkbox':
        if (!Array.isArray(data[it.name])) {
          data[it.name] = [];
        }

        if (it.checked) {
          data[it.name].push(it.value);
        }
        break;
      default:
        data[it.name] = it.value;
        break;
    }
  });
  return data;
}

/**
 * 
 * @param {Object} data 
 * @param {HTMLElement} form 
 */
function setData(data, form) {
  for (const key in data) {
    let val = data[key];
    let input = form.querySelector(`[name=${key}]`);

    switch (input.type) {
      case 'radio':
        let radio = form.querySelector(`[type=radio][name=${key}][value=${val}]`);
        radio && (radio.checked = true);
        break;
      case 'checkbox':
        val.forEach((it) => {
          let checkbox = form.querySelector(`[type=checkbox][name=${key}][value=${it}]`);
          checkbox && (checkbox.checked = true);
        });
        break;
      default:
        input.value = data[key];
        break;
    }
  }
}