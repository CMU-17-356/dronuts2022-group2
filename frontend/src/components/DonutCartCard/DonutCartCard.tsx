import { FC, useState } from 'react';
import './DonutCartCard.css';
import { Card, Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import { Donut } from '../../types';

interface DonutCartCardProps {
  donut : Donut
}

const DonutCartCard: FC<DonutCartCardProps> = (props : DonutCartCardProps) => {
  const [quantity, setQuantity] = useState<number>(1);

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
        <Card style={{ width: '50%' }}>
            <Card.Img src={props.donut.imageurl} />
        </Card>
        <Card style={{ width: '50%' }}>
            <Card.Body>
                <Card.Title>{props.donut.name} </Card.Title>
                <Card.Subtitle>${props.donut.price}</Card.Subtitle>
            </Card.Body>
            <Form>
                <Form.Label>Quantity</Form.Label>
                <InputGroup className="mb-3">
                  <Button variant="outline-danger" onClick={handleDecr}>-</Button>
                  <FormControl aria-label="Quantity Input" value={quantity} onChange={(event)=>updateQuantity(event.target.value)}/>
                  <Button variant="outline-success" onClick={() => setQuantity(quantity + 1)}>+</Button>
                </InputGroup>
            </Form>
        </Card>
    </div>
  </div>
  )
}

export default DonutCartCard;
