import './edit-form.js';
import { closeImgEditForm } from './edit-form.js';
import './scale.js';
import './effect.js';
import './description.js';
import { showSuccessUploadAlert, showErrorUploadAlert } from '../alert.js';
import { sendData } from '../api.js';

const newImgForm = document.querySelector('.img-upload__form');
newImgForm.addEventListener(('submit'), (evt) => {
  evt.preventDefault();

  sendData(
    () => {
      closeImgEditForm();
      showSuccessUploadAlert();
    },
    () => {
      closeImgEditForm();
      showErrorUploadAlert();
    },
    new FormData(evt.target),
  )
})
