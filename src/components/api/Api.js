// import axios from 'axios';
// export default function Pixabay(page, q) {
//   const API_KEY = '29932087-e3b0323cc5403e154284061d7';

//   const BASE_URL = 'https://pixabay.com/api';
//   const urlSearchParams = new URLSearchParams({
//     key: API_KEY,
//     q: q,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     per_page: 12,
//     page: page,
//   });
//   return axios.get(`${BASE_URL}/?${urlSearchParams}`);
// }


const KEY = '29210178-99963cb2fa4a70f711806a762';

function FechCSerchImages(searchPictures, page, perPage) {
    
    return (fetch(`https://pixabay.com/api/?key=${KEY}&q=${searchPictures}&image_type=photo&orientation=horizontal&page=${page}&per_page=${perPage}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(
                new Error(`Sorry, but we can't find ${this.props.searchPictures}. Try more`)
            );
        }))
};


export { FechCSerchImages };