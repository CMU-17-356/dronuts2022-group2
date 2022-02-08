import { userSchema, User } from './user_schema';

test("Username/passwords required field", done => {
    var drone = new User();

    drone.validate(function(err : any) {
        expect(err.errors.username).toBeDefined();
        expect(err.errors.password).toBeDefined();
        done();
    });
});