import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

// Завантаження списку порід
async function loadBreeds() {
  try {
    // Показуємо завантажувач
    loader.style.display = 'block';
    error.style.display = 'none';

    // Отримуємо список порід
    const breeds = await fetchBreeds();

    // Наповнюємо селект опціями
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });

    // Приховуємо завантажувач після завершення
    loader.style.display = 'none';
  } catch (error) {
    // Показуємо повідомлення про помилку
    error.style.display = 'block';
    console.error(error);
  }
}

// Завантаження інформації про кота за породою
async function loadCatInfo(breedId) {
  try {
    // Показуємо завантажувач
    loader.style.display = 'block';
    error.style.display = 'none';
    catInfo.innerHTML = '';

    // Отримуємо інформацію про кота
    const cat = await fetchCatByBreed(breedId);

    // Створюємо елементи для відображення інформації
    const image = document.createElement('img');
    image.src = cat.url;

    const breedName = document.createElement('h3');
    breedName.textContent = cat.breeds[0].name;

    const description = document.createElement('p');
    description.textContent = cat.breeds[0].description;

    const temperament = document.createElement('p');
    temperament.textContent = `Temperament: ${cat.breeds[0].temperament}`;

    // Додаємо елементи до блоку з інформацією про кота
    catInfo.appendChild(image);
    catInfo.appendChild(breedName);
    catInfo.appendChild(description);
    catInfo.appendChild(temperament);

    // Приховуємо завантажувач після завершення
    loader.style.display = 'none';
  } catch (error) {
    // Показуємо повідомлення про помилку
    error.style.display = 'block';
    console.error(error);
  }
}

// Обробник події вибору породи
breedSelect.addEventListener('change', event => {
  const breedId = event.target.value;
  if (breedId) {
    loadCatInfo(breedId);
  } else {
    catInfo.innerHTML = '';
  }
});

// Завантаження списку порід при завантаженні сторінки
loadBreeds();
