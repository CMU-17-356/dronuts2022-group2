import { orderSchema, Order } from './order_schema';

test("User required field", done => {
    var order = new Order();

    order.validate(function(err : any) {
        expect(err.errors.user).toBeDefined();
        done();
    });
});