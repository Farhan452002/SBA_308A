/*
Requirements:
1.  Use the fetch API or Axios to communicate with an external web API. 
    Use the data provided by this API to populate your application’s content and features. 

2.  Create user interaction with the API through a search feature, paginated gallery, or similar. 
    This feature should use GET requests to retrieve associated data.

3.  Enable user manipulation of data within the API through the use of POST, PUT, or PATCH requests. 
    Ensure your chosen API supports this feature before beginning.

4.  Make use of Promises and async/await syntax as appropriate.

5.  Organize your JavaScript code into at least three (3) different module files, 
    and import functions and data across files as necessary.

6.  Ensure the program runs as expected, without any undesired behavior caused by misunderstanding of the JavaScript event loop 
    (such as race conditions, API calls being handled out of order, etc.).
    
7.  Create an engaging user experience through the use of HTML and CSS.

8.  Ensure that the program runs without errors 
    (comment out things that do not work, and explain your blockers - you can still receive partial credit).

9.  Commit frequently to the git repository.

10. Include a README file that contains a description of your application.

11. Level of effort displayed in creativity, presentation, and user experience.
*/


import { fetchBreeds, fetchCatImages, addCatBreed } from './api.js';
import { displayBreeds, displayCatImages, displayError } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const breeds = await fetchBreeds();
    displayBreeds(breeds);

    document.getElementById('breed-select').addEventListener('change', async (event) => {
      const breedId = event.target.value;
      if (breedId) {
        try {
          const images = await fetchCatImages(breedId);
          displayCatImages(images);
        } catch (error) {
          displayError('Error fetching cat images.');
        }
      }
    });

    document.getElementById('add-breed-form').addEventListener('submit', async (event) => {
      event.preventDefault();
      const breedName = document.getElementById('breed-name').value;
      try {
        await addCatBreed({ name: breedName });
        alert('Breed added successfully!');
      } catch (error) {
        displayError('Error adding new breed.');
      }
    });
  } catch (error) {
    displayError('Error fetching breeds.');
  }
});
