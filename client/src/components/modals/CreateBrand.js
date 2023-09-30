import { Modal, Button, Form, FormControl } from "react-bootstrap";

const CreateBrand = ({show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Добавить бренд
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <FormControl 
                    placeholder="Введите название бренда"
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button 
                variant='outline-danger' 
                onClick={onHide}
            >
                Закрыть
            </Button>
            <Button 
                variant='outline-success' 
                onClick={onHide}
            >
                Добавить
            </Button>
        </Modal.Footer>
    </Modal>
    )
}

export default CreateBrand;