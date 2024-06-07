import Modal from 'react-modal';
export default function ImageModal({modalIsOpen, onRequestClose, modalUrl}) {
Modal.setAppElement('#root');
    const customStyles = {
        overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
        content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: 0,
            border: 0
  },
};
    return <>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Large Image"
        >
        <img src={modalUrl}></img>
      </Modal>
    </>
}