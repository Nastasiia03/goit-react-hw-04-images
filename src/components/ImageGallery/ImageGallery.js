
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { List } from './ImageGallery.styled';
import PropTypes from "prop-types";


export const  ImageGallery = ({images, onImageClick}) => {
        return (
        <>
        <List>
        {images.map(image => (<ImageGalleryItem key={image.id} image={image} onImageClick={onImageClick} />))}
        </List>
        </>      
    )}

ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
    onImageClick: PropTypes.func.isRequired
    }