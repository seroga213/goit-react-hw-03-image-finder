const KEY = '29932087-e3b0323cc5403e154284061d7';

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