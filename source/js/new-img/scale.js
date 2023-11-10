const Scale = {
  min: 25,
  max: 100,
  step: 25,
};

const imgEditForm = document.querySelector('.img-upload__overlay');
const scaler = imgEditForm.querySelector('.scale');
const smallerScaleButton = scaler.querySelector('.scale__control--smaller');
const biggerScaleButton = scaler.querySelector('.scale__control--bigger');
const scaleValue = scaler.querySelector('.scale__control--value');
const preview = imgEditForm.querySelector('.img-upload__preview').children[0];

const setScaleStyle = () => {
  preview.style.transform = `scale(${parseInt(scaleValue.value)/100})`;
}

const onSmallerClick = () => {

  if ((parseInt(scaleValue.value) - Scale.step) >= Scale.min) {
    scaleValue.value = `${parseInt(scaleValue.value) - Scale.step}%`;
  } else {
    scaleValue.value = `${Scale.min}%`;
  }
  setScaleStyle();
};

const onBiggerClick = () => {

  if ((parseInt(scaleValue.value) + Scale.step) <= Scale.max) {
    scaleValue.value = `${parseInt(scaleValue.value) + Scale.step}%`;
  } else {
    scaleValue.value = `${Scale.max}%`;
  }
  setScaleStyle();
}

const setScale = () => {
  scaleValue.value = `${Scale.max}%`;
  setScaleStyle();
  smallerScaleButton.addEventListener('click', onSmallerClick);
  biggerScaleButton.addEventListener('click', onBiggerClick);
}

const resetScale = () => {
  smallerScaleButton.removeEventListener('click', onSmallerClick);
  biggerScaleButton.removeEventListener('click', onBiggerClick);
  scaleValue.value = `${Scale.max}%`;
  setScaleStyle();
}

export { setScale, resetScale };
