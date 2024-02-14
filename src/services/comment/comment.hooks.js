import * as feathersAuthentication from '@feathersjs/authentication';
const { authenticate } = feathersAuthentication.hooks;
import validate_comment from '../../hooks/validate_comment';
import checkcmtOwnerIdentity from '../../hooks/checkcmtOwnerIdentity';
import { keep } from 'feathers-hooks-common';
export default {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [validate_comment()],
    update: [],
    patch: [keep('comment')],
    remove: [checkcmtOwnerIdentity()]
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
