// Initializes the `post` service on path `/post`
import { Post } from './post.class';
import  blogCount  from './events/blogCount';
import createModel from '../../models/post.model';
import hooks from './post.hooks';

export default function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/post', new Post(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('post');
  service.on('created', blogCount)
  service.on('removed', blogCount)
  service.hooks(hooks);
};
