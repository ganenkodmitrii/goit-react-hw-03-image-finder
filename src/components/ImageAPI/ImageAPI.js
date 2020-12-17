function fetchImages(name, page) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '19044793-8d0b89c981ce143090a5b157d';

    return fetch(
        `${BASE_URL}?key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&per_page=12&q=${name}`,
    ).then(response => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(new Error('Что-то пошло не так'));
    });
}

const api = {
    fetchImages,
};
export default api;
