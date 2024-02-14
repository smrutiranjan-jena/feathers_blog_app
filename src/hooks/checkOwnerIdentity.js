import { BadRequest } from '@feathersjs/errors';

export default (options = {}) => {
  return async context => {
    const { data, app, params, id } = context
    const { user } = params
    const { _id } = user
    if (_id.toString() !== id.toString()) {
      throw new BadRequest('you do not have permission to access this route')
    }
    return context;
  };
};
