import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import './Modal.css';

function Modal({ children, onClose }) {
	const modalEl = document.createElement('div');
	modalEl.classList.add('modal');

	useEffect(() => {
		const modalRoot = document.getElementById('modal-root');
		modalRoot.appendChild(modalEl);
		return () => {
			modalRoot.removeChild(modalEl);
		};
	}, [modalEl]);

	const handleCloseModal = () => {
		onClose();
	};
	return createPortal(
		<div className='modal-container container'>
			<button onClick={handleCloseModal}>Close</button>
			{children}
		</div>,
		modalEl
	);
}

export default Modal;
