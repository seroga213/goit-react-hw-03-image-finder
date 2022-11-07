import { ImageGalleryItem } from './ImageGalleryItem';
import { ImageGalleryBox } from './ImageGallery.styled';
import PropTypes from 'prop-types';


export const ImageGallery = ({ pictureSearch }) => {

    return (
            <ImageGalleryBox>
                {pictureSearch.hits.map(({ id, webformatURL, tags, largeImageURL }) => <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags} largeImageURL={largeImageURL} ></ImageGalleryItem>)}
            </ImageGalleryBox>

            )
        }


ImageGallery.propTypes = {
    pictureSearch: PropTypes.shape({
        hits: PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        }))
    })
    
}        