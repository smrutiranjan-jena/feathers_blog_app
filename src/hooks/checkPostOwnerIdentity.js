import { BadRequest } from '@feathersjs/errors';

export default (options = {}) => {
  return async context => {
    const { data, app, params, id } = context
    const { user } = params
    const { _id } = user
    await app.service('post').get(id).then((res) => {
      const { user } = res
      if (user.toString() !== _id.toString()) {
        throw new BadRequest('you do not have permission to access the perticular resource')
      }
    }).catch(()=>{
      throw new BadRequest('invalid post')
    })
    return context;
  };
};
