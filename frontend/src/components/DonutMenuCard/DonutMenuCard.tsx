import React, { FC, useState } from 'react';
import './DonutMenuCard.css';
import { Donut } from '../../types';
import { Card, Button, InputGroup, FormControl, Form } from 'react-bootstrap';

interface DonutMenuCardProps {
  donut : Donut
}

const DonutMenuCard: FC<DonutMenuCardProps> = (props : DonutMenuCardProps) => {
  const [quantity, setQuantity] = useState<number>(0);

  const handleDecr = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  }

  const updateQuantity = (val : string) => {
    const parsed = parseInt(val);
    if (isNaN(parsed)) { setQuantity(0); }
    else setQuantity(parsed);
  }

  return (
  <div className="DonutCartCard">
    <div className = "row">
        <Card>
            <Card.Img src={props.donut.imageurl} />
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
                  <FormControl aria-label="Quantity Input" value={quantity} onChange={(event)=>updateQuantity(event.target.value)}/>
                  <Button variant="outline-success" onClick={() => setQuantity(quantity + 1)}>+</Button>
                </InputGroup>
            </Form>
            <Button variant='primary'>
              Add to Cart
            </Button>
        </Card>
    </div>
  </div>
  )
}

export default DonutMenuCard;
