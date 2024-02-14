import { BadRequest } from '@feathersjs/errors';

export default (options = {}) => {
  return async context => {
    const { app, params, data, id } = context
    const { user } = params
    const { _id } = user
    await app.service('comment')._get(id).then((res) => {
      const { user } = res
      if (_id.toString() !== user.toString()) {
        throw new BadRequest('you do not have perticular permission to unlike this post')
      }
    })
    return context;
  };
};
