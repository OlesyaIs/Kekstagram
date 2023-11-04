import { showAlert } from './alert.js';

const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`Error: ${response.status} ${response.statusText}`);
    })
    .then(onSuccess)
    .catch(() => {
      showAlert('Не удалось загрузить данные, попробуйте перезагрузить страницу');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://23.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
    })
    .catch(() => {
      onFail();
    })
}

export { getData, sendData };
