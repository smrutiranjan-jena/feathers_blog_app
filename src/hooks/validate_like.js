import { BadRequest } from '@feathersjs/errors';

// eslint-disable-next-line no-unused-vars
export default (options = {}) => {
  return async context => {
    const { data, app } = context
    const { user, post } = data

    // feild validation
    if (!user) {
      throw new BadRequest('user is required')
    }
    if (!post) {
      throw new BadRequest('post is required')
    }

    //  check the user wants to like the post is exist or not in database
    await app.service('user')._get(user).catch(() => {
      throw new BadRequest('invalid user')
    })
    
    //  the targeted post is exist or not in database
    await app.service('post')._get(post).catch(() => {
      throw new BadRequest('invalid post')
    })

    // the user has already liked or not the same post
    await app.service('like')._find({
      query: {
        user,
        post,
        status: 1
      }
    }).then((res) => {
      if (res.total) {
        throw new BadRequest('you have already liked this post')
      }
    })

    return context;
  };
};
