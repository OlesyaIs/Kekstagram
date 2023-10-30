import { isEscEvent } from '../util.js';
import { scaleReset } from './scale.js';
import { runEffects, resetEffects } from './effect.js';

const body = document.querySelector('body');
const imgUpload = body.querySelector('.img-upload');
const imgUploadInput = imgUpload.querySelector('#upload-file');
const imgEditForm = imgUpload.querySelector('.img-upload__overlay');
const uploadCancelButton = imgUpload.querySelector('#upload-cancel');

const resetSettings = () => {
  scaleReset();
  resetEffects();
};

const onEscDown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeImgEditForm();
  }
};

const openImgEditForm = () => {
  runEffects();
  body.classList.add('modal-open');
  imgEditForm.classList.remove('hidden');

  document.addEventListener('keydown', onEscDown);
};

const closeImgEditForm = () => {
  body.classList.remove('modal-open');
  imgEditForm.classList.add('hidden');
  document.removeEventListener('keydown', onEscDown);
  imgUploadInput.value = '';
  resetSettings();
};

uploadCancelButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeImgEditForm();
});
imgUploadInput.addEventListener('change', () => { openImgEditForm(); });
