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
scaleValue.value = `${Scale.max}%`;

const setScaleStyle = () => {
  preview.style.transform = `scale(${parseInt(scaleValue.value)/100})`;
}

const scaleReset = () => {
  scaleValue.value = `${Scale.max}%`;
  setScaleStyle();
};

smallerScaleButton.addEventListener('click', () => {
  if ((parseInt(scaleValue.value) - Scale.step) >= Scale.min) {
    scaleValue.value = `${parseInt(scaleValue.value) - Scale.step}%`;
  } else {
    scaleValue.value = `${Scale.min}%`;
  }
  setScaleStyle();
});

biggerScaleButton.addEventListener('click', () => {
  if ((parseInt(scaleValue.value) + Scale.step) <= Scale.max) {
    scaleValue.value = `${parseInt(scaleValue.value) + Scale.step}%`;
  } else {
    scaleValue.value = `${Scale.max}%`;
  }
  setScaleStyle();
});

export { scaleReset };
