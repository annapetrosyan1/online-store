import { useContext, useState} from "react";
import { Modal, Button, Form, Dropdown, FormControl, Row, Col } from "react-bootstrap";
import { Context } from '../../index';
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context);
    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
       setInfo(info.filter(i => i.number !== number))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Добавить устройство
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Dropdown className="mt-3 mb-2">
                    <Dropdown.Toggle>
                        Выберите тип устройства
                        <DropdownMenu>
                            {device.types.map(type =>
                                <DropdownItem key={type.id}>{type.name}</DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown.Toggle>
                </Dropdown>
                <Dropdown className="mt-3 mb-2">
                    <Dropdown.Toggle>
                        Выберите бренд
                        <DropdownMenu>
                            {device.brands.map(brand =>
                                <DropdownItem key={brand.id}>{brand.name}</DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown.Toggle>
                </Dropdown>
                <FormControl 
                    className="mt-3"
                    placeholder="Введите название устройства"
                />
                <FormControl 
                    className="mt-3"
                    placeholder="Введите стоимость устройства"
                    type="number"
                />
                <FormControl 
                    className="mt-3"
                    type="file"
                />
                <hr />
                <Button
                    variant="outline-dark"
                    onClick={addInfo}
                >
                    Добавить новое свойство
                </Button>
                {info.map(i =>
                        <Row className="mt-2" key={i.number}>
                            <Col md={4}>
                                <FormControl 
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <FormControl 
                                    placeholder="Введите описание свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Button 
                                    variant="outline-danger"
                                    onClick={() => removeInfo(i.number)}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                )}               
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

export default CreateDevice;