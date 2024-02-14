import user from './user/user.service.js';
import post from './post/post.service.js';
import upload from './upload/upload.service.js';
import like from './like/like.service.js'
import comment from './comment/comment.service.js'

// eslint-disable-next-line no-unused-vars
export default function (app) {
  app.configure(user);
  app.configure(post);
  app.configure(upload)
  app.configure(like)
  app.configure(comment)
};
