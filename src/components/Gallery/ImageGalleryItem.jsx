
import { ImageGalleryItems, ImageGalleryItemImage } from './ImageGalleryItem.styled';
// import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image, onModal }) => {
    const { largeImageURL, webformatURL, tags } = image;
    return (
      <ImageGalleryItems onClick={() => onModal(largeImageURL)}>
        <ImageGalleryItemImage src={webformatURL} alt={tags} />
      </ImageGalleryItems>
    );
  };
  ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
    onModal: PropTypes.func.isRequired,
  };