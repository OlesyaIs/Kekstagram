/* global noUiSlider:readonly */

const effects = [
  {
    filterName: 'chrome',
    filter: 'grayscale',
    filterUnit: '',
    min: 0,
    max: 1,
    step: 0.1,
  },
  {
    filterName: 'sepia',
    filter: 'sepia',
    filterUnit: '',
    min: 0,
    max: 1,
    step: 0.1,
  },
  {
    filterName: 'marvin',
    filter: 'invert',
    filterUnit: '%',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    filterName: 'phobos',
    filter: 'blur',
    filterUnit: 'px',
    min: 0,
    max: 3,
    step: 0.1,
  },
  {
    filterName: 'heat',
    filter: 'brightness',
    filterUnit: '',
    min: 1,
    max: 3,
    step: 0.1,
  },
]

const imgEditForm = document.querySelector('.img-upload__overlay');
const preview = imgEditForm.querySelector('.img-upload__preview').children[0];
const effectsList = imgEditForm.querySelector('.effects__list');
const origin = effectsList.querySelector('#effect-none');
const effectLevel = imgEditForm.querySelector('.effect-level');
const effectLevelValue = effectLevel.querySelector('.effect-level__value');
const sliderElement = effectLevel.querySelector('.effect-level__slider');

let currentEffect;

noUiSlider.create(sliderElement, {
  start: 100,
  step: 1,
  tooltips: true,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
  range: {
    min: 0,
    max: 100,
  },
});

const updateSlider = ({min, max, step}) => {
  sliderElement.noUiSlider.updateOptions({
    start: max,
    step: step,
    range: {
      min: min,
      max: max,
    },
  });
};

const updatePreviewStyle = (effect, handle) => {
  sliderElement.noUiSlider.on('update', (value) => {
    effectLevelValue.value = value[handle];
    preview.style.filter = `${effect.filter}(${effectLevelValue.value}${effect.filterUnit}`;
  });
};

const runEffects = () => {
  origin.checked = 'true';
  effectLevel.classList.add('hidden');

  effectsList.addEventListener('change', (evt) => {
    preview.classList.remove(currentEffect);
    const effectSettings = effects.find((effect) => { return effect.filterName === evt.target.value});

    if (effectSettings) {
      effectLevel.classList.remove('hidden');
      preview.classList.add(`effects__preview--${evt.target.value}`);
      updateSlider(effectSettings);
      updatePreviewStyle(effectSettings, 0);
    } else {
      effectLevel.classList.add('hidden');
      resetEffects();
    }

    currentEffect = `effects__preview--${evt.target.value}`;
  });
};

const resetEffects = () => {
  preview.classList.remove(currentEffect);
  sliderElement.noUiSlider.off('update');
  sliderElement.noUiSlider.updateOptions({
    start: 100,
    step: 1,
    range: {
      min: 0,
      max: 100,
    },
  });
  preview.style.filter = '';
  effectLevelValue.value = 100;
};

export { runEffects,  resetEffects };
