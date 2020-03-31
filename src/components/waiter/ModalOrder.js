import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalOrder = ({show, handleClose, totalPay, orderProduct, clickSaveOrderFirestore}) => {

  return (
    <Modal
      show={show} onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Registro de orden
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label>Cliente:</label>
        <input type="text"></input>
        <p>{totalPay}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => handleClose()}>Regresar</Button>
        <Button onClick={() => clickSaveOrderFirestore()}>Registrar</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default ModalOrder;

  /* function App() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  render(<App />); */
