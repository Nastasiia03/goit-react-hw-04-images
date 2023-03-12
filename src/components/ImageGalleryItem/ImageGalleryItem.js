import { Image, Item } from "./ImageGalleryItem.styled"
import PropTypes from "prop-types";

export const ImageGalleryItem = ({ image, onImageClick}) => {
    return <Item><Image src={image.webformatURL} alt={image.tags} onClick={() => onImageClick(image.largeImageURL)} /></Item>
    }
  
ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }),
  onImageClick: PropTypes.func.isRequired,
}
