import * as feathersAuthentication from '@feathersjs/authentication';
import valiadate_post from '../../hooks/validate_post';
import checkPostOwnerIdentity from '../../hooks/checkPostOwnerIdentity';
const { authenticate } = feathersAuthentication.hooks;
export default {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [valiadate_post()],
    update: [],
    patch: [checkPostOwnerIdentity()],
    remove: [checkPostOwnerIdentity()]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
