import { shuffleArray } from './util.js';
const RANDOM_PHOTO_COUNT = 10;

const filtersContainer = document.querySelector('.img-filters');
const filtersForm = filtersContainer.querySelector('.img-filters__form');
const defaultFilter = filtersForm.querySelector('#filter-default');

const showFilters = () => {
  filtersContainer.classList.remove('img-filters--inactive');
}

const comparePhotos = (currentPhoto, nextPhoto) => {
  return nextPhoto.comments.length - currentPhoto.comments.length;
};

const setFilterClick = (photos, cb) => {
  let currentFilter = defaultFilter;
  filtersForm.addEventListener('click', (evt) => {

    if (currentFilter === defaultFilter && evt.target === defaultFilter) {
      return // Не требует перерисовки
    }

    if (currentFilter.id === 'filter-discussed' && evt.target.id === 'filter-discussed') {
      return // Не требует перерисовки
    }

    currentFilter.classList.remove('img-filters__button--active');
    currentFilter = evt.target;
    currentFilter.classList.add('img-filters__button--active');

    if (currentFilter.id === 'filter-default') {
      cb(photos);
    }

    if (currentFilter.id === 'filter-random') {
      let shuffledPhotos = photos.slice();
      shuffledPhotos = shuffleArray(shuffledPhotos).slice(0, RANDOM_PHOTO_COUNT);
      cb(shuffledPhotos);
    }

    if (currentFilter.id === 'filter-discussed') {
      const sortedPhotos = photos.slice().sort(comparePhotos);
      cb(sortedPhotos);
    }
  });
};

export { showFilters, setFilterClick };
