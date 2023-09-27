import React, { useContext } from "react";
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { Card, Col, Row } from 'react-bootstrap';

const TypeBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Col className='d-flex'>
            {device.brands.map(brand =>
                <Card
                    style={{cursor: 'pointer'}}
                    key={brand.id}
                    className='p-2'
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Col>
    )

})

export default TypeBar