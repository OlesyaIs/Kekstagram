import './edit-form.js';
import { openImgEditForm, closeImgEditForm } from './edit-form.js';
import './scale.js';
import './effect.js';
import { showSuccessUploadAlert, showErrorUploadAlert } from '../alert.js';
import { sendData } from '../api.js';

const newImgForm = document.querySelector('.img-upload__form');
const imgUpload = document.querySelector('.img-upload');
const imgUploadInput = imgUpload.querySelector('#upload-file');
const previewImg = document.querySelector('.img-upload__preview').children[0];
const previews = document.querySelectorAll('.effects__preview');

imgUploadInput.addEventListener('change', () => {
  const file = imgUploadInput.files[0];
  if (file.type.startsWith('image/')) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      previewImg.src = reader.result;
      previews.forEach((filter) => {
        filter.style.backgroundImage = `url(${reader.result})`;
      })
    });

    reader.readAsDataURL(file);
  }
  openImgEditForm();
});

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
