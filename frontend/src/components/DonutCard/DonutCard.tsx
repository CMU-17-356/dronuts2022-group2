import { FC, Dispatch, useState } from 'react';
import './DonutCard.css';
import { Card, Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import { Donut } from '../../../database/schemas/donut_schema';
import { CartReducerAction } from '../../types/userCart';

interface DonutCartCardProps {
  donut: Donut
  initalQuantity: number
  updateCart: Dispatch<CartReducerAction>,
}

const DonutCartCard: FC<DonutCartCardProps> = (props : DonutCartCardProps) => {
  const [quantity, setQuantity] = useState(props.initalQuantity);

  const updateQuantity = (input: string | number) => {
    let new_quantity = 0;
    if (typeof input == 'string') {
      new_quantity = parseInt(input);
    } else {
      new_quantity = input
    }
    if (isNaN(new_quantity) || new_quantity < 0) {
      new_quantity = 0
    }
    props.updateCart({ name: 'set', donut: props.donut, quantity: new_quantity })
    setQuantity(new_quantity)
  }

  const handleDecr = () => {
    if (quantity > 0) updateQuantity(quantity - 1);
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
                  <Button variant="outline-success" onClick={() => updateQuantity(quantity + 1)}>+</Button>
                </InputGroup>
            </Form>
        </Card>
    </div>
  </div>
  )
}

export default DonutCartCard;
