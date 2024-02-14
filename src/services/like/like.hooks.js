import * as feathersAuthentication from '@feathersjs/authentication';
const { authenticate } = feathersAuthentication.hooks;
import validate_like from '../../hooks/validate_like';
import checkLikeOwnerIdentity from '../../hooks/checkLikeOwnerIdentity';
import { disallow } from 'feathers-hooks-common';
export default {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [validate_like()],
    update: [],
    patch: [disallow()],
    remove: [checkLikeOwnerIdentity()]
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
