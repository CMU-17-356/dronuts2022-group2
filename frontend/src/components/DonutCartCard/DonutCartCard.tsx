import React, { FC, useState } from 'react';
import './DonutCartCard.css';
import { Card, Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import donut from '../../assets/chocolate_glaze.jpg';
import { Donut } from '../../types';

interface DonutCartCardProps {
  donut : Donut
}

const DonutCartCard: FC<DonutCartCardProps> = (props : DonutCartCardProps) => {
  const [quantity, setQuantity] = useState<number>(0);

  const handleDecr = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  }

  return (
  <div className="DonutCartCard">
    <div className = "row">
        <Card style={{ width: '50%' }}>
            <Card.Img src={donut} />
        </Card>
        <Card style={{ width: '50%' }}>
            <Card.Body>
                <Card.Title>{props.donut.name} </Card.Title>
                <Card.Subtitle>${props.donut.price}</Card.Subtitle>
                <Card.Text>
                  {props.donut.description}
                </Card.Text>
            </Card.Body>
            <Form>
                <Form.Label>Quantity</Form.Label>
                <InputGroup className="mb-3">
                  <Button variant="outline-danger" onClick={handleDecr}>-</Button>
                  <FormControl aria-label="Quantity Input" value={quantity} />
                  <Button variant="outline-success" onClick={() => setQuantity(quantity + 1)}>+</Button>
                </InputGroup>
            </Form>
        </Card>
    </div>
  </div>
  )
}

export default DonutCartCard;
