function fetchImages(name) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '19044793-8d0b89c981ce143090a5b157d';

    return fetch(
        `${BASE_URL}?key=${API_KEY}&page=1&image_type=photo&orientation=horizontal&per_page=12&q=${name}`,
    ).then(response => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(new Error(`${name}Нет такого имени`));
    });
}

const api = {
    fetchImages,
};
export default api;
