import { OrderModel } from './order_schema';

test('User required field', (done) => {
  const order = new OrderModel();

  order.validate(function(err : any) {
    expect(err.errors.user).toBeDefined();
    expect(err.errors.order_id).toBeDefined();
    done();
  });
});
