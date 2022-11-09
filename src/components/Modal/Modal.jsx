import { Component } from 'react';
// import { createPortal } from 'react-dom';
import { BakcDrop, ModalWindow } from './Modal.styled';
import PropTypes from 'prop-types';


export class Modal extends Component {
    componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown = e => {
      if (e.code === 'Escape') {
        this.props.closeModal();
      }
    };
    handleBackdropClick = e => {
      if (e.currentTarget === e.target) {
        this.props.closeModal();
      }
    };
    render() {
      return (
        <BakcDrop className onClick={this.handleBackdropClick}>
          <ModalWindow className>
            <img
              src={this.props.largeImage}
              alt="choosed foto"
            />
          </ModalWindow>
        </BakcDrop>
      );
    }
  }
  
  Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    largeImage: PropTypes.string.isRequired,
  };