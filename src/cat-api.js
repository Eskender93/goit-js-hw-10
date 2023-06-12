const apiKey =
  'live_5bw3BxNA9WpKzB9hOqnhzpYg7lLInJuSkrwVbgEOYBDOXtq4PG9T5120vuhVnpxP';

// Функція для виконання HTTP-запитів
async function request(url) {
  const response = await fetch(url, {
    headers: {
      'x-api-key': apiKey,
    },
  });

  if (!response.ok) {
    throw new Error('Request failed');
  }

  const data = await response.json();
  return data;
}

// Функція для отримання списку порід
export async function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';
  const breeds = await request(url);
  return breeds;
}

// Функція для отримання інформації про кота за породою
export async function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  const [cat] = await request(url);
  return cat;
}
