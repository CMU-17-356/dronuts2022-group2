import { AddressModel } from './address_schema';

test('Require street', (done) => {
  const address = new AddressModel();

  address.validate(function(err : any) {
    expect(err.errors.street).toBeDefined();
    done();
  });
});
