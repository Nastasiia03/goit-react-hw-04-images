import { Component } from 'react'
import { createPortal } from 'react-dom';
import { FullImage, Overlay } from './Modal.styled';
import PropTypes from "prop-types";

const modalRoot = document.querySelector("#modal-root")

export class Modal extends Component {

componentDidMount() {
    window.addEventListener('keydown', this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEsc);
  }

  handleEsc = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };

render() {
return createPortal(<Overlay onClick={this.handleBackdropClick}> 
  <FullImage>{this.props.children}</FullImage>
</Overlay>, modalRoot)
 }   
}

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};