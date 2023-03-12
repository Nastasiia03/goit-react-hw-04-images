const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "32968431-e7a09705e2056856a618066e0";

export const getImages = (searchText, page) => {
    return fetch(`${BASE_URL}?q=${searchText}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
}