import s from './Modal.module.css';
import { createPortal } from 'react-dom';
import React, { Component } from 'react';

const modalRoot = document.querySelector('#modalRoot');
// export default function Modal({ children, styleName }) {
//   const test = React.Children.map(children, elem => {
//     if (elem.type === 'button') {
//       return (
//         <button {...elem.props} className={s[styleName]}>
//           {elem.props.children}
//         </button>
//       );
//     }
//     return elem;
//   });
//   return createPortal(<div className={s.container}>{test}</div>, modalRoot);

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('asdasd');

      this.props.togleModal();
    }
  };
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { children, styleName } = this.props;
    const test = React.Children.map(children, elem => {
      if (elem.type === 'button') {
        return (
          <button {...elem.props} className={s[styleName]}>
            {elem.props.children}
          </button>
        );
      }
      return elem;
    });
    return createPortal(<div className={s.container}>{test}</div>, modalRoot);
  }
}

export default Modal;
