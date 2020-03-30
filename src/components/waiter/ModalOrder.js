import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function ModalOrder(props) {
    return (
      <Modal
        {...props}
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
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Regresar</Button>
          <Button onClick={props.onHide}>Registrar</Button>
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
