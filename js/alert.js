import { isEscEvent, createElement } from './util.js';

const successTemplate = document.querySelector('#success').content;
const successAlertTemplate = successTemplate.querySelector('.success');
const errorTemplate = document.querySelector('#error').content;
const errorAlertTemplate = errorTemplate.querySelector('.error');

const successUploadAlert = successAlertTemplate.cloneNode(true);
const closeSuccessAlertButton = successUploadAlert.querySelector('.success__button');

const errorUploadAlert = errorAlertTemplate.cloneNode(true);
const closeErrorAlertButton = errorUploadAlert.querySelector('.error__button');

// Показ сообщения с ошибкой
const showAlert = (message) => {
  const alertContainer = createElement('section', 'error');
  const alertWrapper = createElement('div', 'error__inner');
  const alertDescription = createElement('h2', 'error__title');
  alertDescription.style.lineHeight = 'normal';
  alertDescription.textContent = message;

  alertWrapper.appendChild(alertDescription);
  alertContainer.appendChild(alertWrapper);
  document.body.appendChild(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

// Upload alerts

const onEscDown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeSuccessUploadAlert();
    closeErrorUploadAlert();
  }
};

const onClick = (evt) => {
  evt.preventDefault();
  closeSuccessUploadAlert();
  closeErrorUploadAlert();
}

const onSuccessButtonClick = () => {
  closeSuccessUploadAlert();
}

const showSuccessUploadAlert = () => {
  document.body.appendChild(successUploadAlert);
  successUploadAlert.querySelector('.success__inner').addEventListener('click', (evt) => {
    evt.stopPropagation();
  });
  closeSuccessAlertButton.addEventListener(('click'), onSuccessButtonClick);
  document.addEventListener('keydown', onEscDown);
  document.body.addEventListener('click', onClick);
};

const closeSuccessUploadAlert = () => {
  successUploadAlert.remove();
  document.removeEventListener('keydown', onEscDown);
  document.body.removeEventListener('click', onClick);
};

const onErrorButtonClick = () => {
  closeErrorUploadAlert();
}

const showErrorUploadAlert = () => {
  document.body.appendChild(errorUploadAlert);
  errorUploadAlert.querySelector('.error__inner').addEventListener('click', (evt) => {
    evt.stopPropagation();
  });
  closeErrorAlertButton.addEventListener(('click'), onErrorButtonClick);
  document.addEventListener('keydown', onEscDown);
  document.body.addEventListener('click', onClick);
};

const closeErrorUploadAlert = () => {
  errorUploadAlert.remove();
  document.removeEventListener('keydown', onEscDown);
  document.body.removeEventListener('click', onClick);
};

export { showAlert, showSuccessUploadAlert, showErrorUploadAlert }
