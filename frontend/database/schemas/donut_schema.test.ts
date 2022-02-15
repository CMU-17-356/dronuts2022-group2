import { DonutModel } from './donut_schema';

test('Donut name required field', (done) => {
  const donut = new DonutModel();

  donut.validate(function(err : any) {
    expect(err.errors.name).toBeDefined();
    done();
  });
});

test('No negative prices', (done) => {
  const donut = new DonutModel({ name: 'chocolate', price: -69 });

  donut.validate(function(err : any) {
    expect(err.errors.name).toBeUndefined();
    expect(err.errors.price).toBeDefined();
    done();
  });
});

test('Allow no description', (done) => {
  const donut = new DonutModel({ name: 'chocolate', price: 1.69 });

  donut.validate(function(err : any) {
    expect(err).toBeUndefined();
    done();
  });
});
