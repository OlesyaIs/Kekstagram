import _ from 'lodash';

import './preview.js';
import './new-img/new-img.js';
import { renderPreviews } from './preview.js';
import { getData } from './api.js';
import { showFilters, setFilterClick } from './filter.js';

const DEBOUNCE_DELAY = 500;

getData((photos) => {
  renderPreviews(photos);
  showFilters();
  setFilterClick(photos, _.debounce(renderPreviews, DEBOUNCE_DELAY));
});
