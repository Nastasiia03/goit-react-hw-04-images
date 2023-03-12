import { useEffect} from 'react'
import { createPortal } from 'react-dom';
import { FullImage, Overlay } from './Modal.styled';
import PropTypes from "prop-types";

const modalRoot = document.querySelector("#modal-root")

export const Modal = ({...props}) => {


useEffect(() => {
     const handleEsc = evt => {
    if (evt.code === 'Escape') {
      props.onClose();
    }
  };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc)
    };
}, [props]);


 const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      props.onClose();
    }
  };

return createPortal(<Overlay onClick={handleBackdropClick}> 
  <FullImage>{props.children}</FullImage>
</Overlay>, modalRoot)
 }   


Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

