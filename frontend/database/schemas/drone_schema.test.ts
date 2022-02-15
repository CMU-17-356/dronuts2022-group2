import { DroneModel } from './drone_schema';

test('Drone ID required field', (done) => {
  const drone = new DroneModel();

  drone.validate(function(err : any) {
    expect(err.errors.id).toBeDefined();
    done();
  });
});

test('Drone charge validated', (done) => {
  const drone = new DroneModel({ id: 1, charge: 3 });

  drone.validate(function(err : any) {
    expect(err.errors.charge).toBeDefined();
    done();
  });
});
