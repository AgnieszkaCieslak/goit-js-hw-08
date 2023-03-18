import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryMarker = document.querySelector('ul.gallery');

galleryItems.forEach(item => {
  const galleryItem = `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
</a>`;
  galleryMarker.insertAdjacentHTML('beforeend', galleryItem);
});

const handleClick = e => {
  e.preventDefault();
  e.stopPropagation();
  new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
  });
};

galleryMarker.addEventListener('click', handleClick);
