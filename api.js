const API_BASE_URL = 'https://api.thecatapi.com/v1';

export async function fetchBreeds() {
  const response = await fetch(`${API_BASE_URL}/breeds`);
  if (!response.ok) throw new Error('Failed to fetch breeds.');
  return response.json();
}

export async function fetchCatImages(breedId) {
  const response = await fetch(`${API_BASE_URL}/images/search?breed_ids=${breedId}&limit=3`);
  if (!response.ok) throw new Error('Failed to fetch cat images.');
  return response.json();
}

export async function addCatBreed(breedData) {
  const response = await fetch(`${API_BASE_URL}/breeds`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(breedData),
  });
  if (!response.ok) throw new Error('Failed to add cat breed.');
  return response.json();
}
