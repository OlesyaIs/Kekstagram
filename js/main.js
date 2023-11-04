import './preview.js';
import './new-img/new-img.js';
import { renderPreviews } from './preview.js';

import { getData } from './api.js';

getData((photos) => {
  renderPreviews(photos);
});
