import { BadRequest } from '@feathersjs/errors';
// eslint-disable-next-line no-unused-vars
export default (options = {}) => {
  return async context => {
    const { data, app } = context
    const { user, post, comment } = data
    
    // feild validation
    if (!user) {
      throw new BadRequest('user is required')
    }
    if (!post) {
      throw new BadRequest('post is required')
    }
    if (!comment) {
      throw new BadRequest('comment is required')
    }

    // check wheather the user is trying to create a post is exist or not
    await app.service('user').get(user).catch(() => {
      throw new BadRequest('invalid user')
    })
    //  the targeted post is exist or not in database
    await app.service('post')._get(post).catch(() => {
      throw new BadRequest('invalid post')
    })
    return context;
  };
};
