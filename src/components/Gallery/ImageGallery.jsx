import { ImageGalleryItem } from './ImageGalleryItem';
import { ImageGalleryBox } from './ImageGallery.styled';
import PropTypes from 'prop-types';


export const ImageGallery = ({ images, onModal }) => {
    return (
      <ImageGalleryBox>
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} onModal={onModal} />
        ))}
      </ImageGalleryBox>
    );
  };
  
  ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string,
        largeImageURL: PropTypes.string,
        tags: PropTypes.string,
      })
    ),
    onModal: PropTypes.func.isRequired,
  };