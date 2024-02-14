import { BadRequest } from '@feathersjs/errors';

// eslint-disable-next-line no-unused-vars
export default (options = {}) => {
  return async context => {
    const { data, app, params } = context
    const { title, description } = data
    data.user = params.user._id

    // feild validation
    if (!title) {
      throw new BadRequest('title required')
    }
    if (!description) {
      throw new BadRequest('description required')
    }

    // check wheather the user is trying to create a post is exist or not
    await app.service('user').get(data.user).catch(() => {
      throw new BadRequest('invalid user')
    })
    return context;
  };
};
