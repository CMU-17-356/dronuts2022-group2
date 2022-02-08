import { droneSchema, Drone } from './drone_schema';

test("Drone ID required field", done => {
    var drone = new Drone();

    drone.validate(function(err : any) {
        expect(err.errors.id).toBeDefined();
        done();
    });
});

test("Drone charge validated", done => {
    var drone = new Drone({id: 1, charge: 3});

    drone.validate(function(err : any) {
        expect(err.errors.charge).toBeDefined();
        done();
    });
});