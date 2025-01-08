export function displayBreeds(breeds) {
    const select = document.getElementById('breed-select');
    select.innerHTML = breeds.map(breed => `<option value="${breed.id}">${breed.name}</option>`).join('');
  }
  
  export function displayCatImages(images) {
    const gallery = document.getElementById('cat-gallery');
    gallery.innerHTML = images.map(image => `<img src="${image.url}" alt="Cat image" class="cat-image">`).join('');
  }
  
  export function displayError(message) {
    const errorContainer = document.getElementById('error-container');
    errorContainer.textContent = message;
  }
  