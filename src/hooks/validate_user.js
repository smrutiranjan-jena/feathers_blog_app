import { BadRequest } from '@feathersjs/errors';
import validator from 'validator';

// eslint-disable-next-line no-unused-vars
export default (options = {}) => {
  return async context => {
    const { data, app } = context
    const { username, email, password } = data
    // feild validation
    if (!username) {
      throw new BadRequest('username required')
    }
    if (!email) {
      throw new BadRequest('email required')
    }
    if (!password) {
      throw new BadRequest('password required')
    }

    // email and password validation
    if (!validator.isEmail(email)) {
      throw new BadRequest('invalid email format')
    }
    if (!validator.isStrongPassword(password)) {
      throw new BadRequest('invalid password format')
    }

    // username or email already exist or not
    await app.service('user').find({
      query: {
        username
      }
    }).then((res) => {
      if (res.total) {
        throw new BadRequest('username alredy exist')
      }
    })
    return context;
  };
};
