import './preview.js';
import { openPhoto } from './photo.js';

const testPhoto = {
  url: 'photos/7.jpg',
  description: 'test description',
  likes: '5',
  comments: [1, 2, 3, 4],
}

openPhoto(testPhoto);
