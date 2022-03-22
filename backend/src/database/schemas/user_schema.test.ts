import { UserModel } from './user_schema';

test('Username/passwords required field', (done) => {
  const user = new UserModel();

  user.validate(function(err : any) {
    expect(err.errors.username).toBeDefined();
    expect(err.errors.password).toBeDefined();
    done();
  });
});
