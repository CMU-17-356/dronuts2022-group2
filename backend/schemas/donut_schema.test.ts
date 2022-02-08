import { Donut } from './donut_schema';

test('Donut name required field', (done) => {
  const donut = new Donut();

  donut.validate(function(err : any) {
    expect(err.errors.name).toBeDefined();
    done();
  });
});

test('No negative prices', (done) => {
  const donut = new Donut({ name: 'chocolate', price: -69 });

  donut.validate(function(err : any) {
    expect(err.errors.name).toBeUndefined();
    expect(err.errors.price).toBeDefined();
    done();
  });
});

test('Allow no description', (done) => {
  const donut = new Donut({ name: 'chocolate', price: 1.69 });

  donut.validate(function(err : any) {
    expect(err).toBeUndefined;
    done();
  });
});
