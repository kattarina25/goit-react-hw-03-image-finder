import axios from 'axios';

const apiKey = '16481099-d7e0a7e618724dd480cf91d94';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchImages = ({ searchQuery = '', currentPage = 1 }) => {
  return axios
    .get(
      `?key=${apiKey}&q=${searchQuery}&page=${currentPage}&per_page=${'12'}&image_type=photo&orientation=horizontal`,
    )
    .then(response => response.data.hits);
};

export default fetchImages;
