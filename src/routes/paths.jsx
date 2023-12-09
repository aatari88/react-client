// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_APP = '/app';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  login: '/login',
};

export const PATH_APP = {
  root: ROOTS_APP,
  dashboard: path(ROOTS_APP, '/dashboard'),
  two: path(ROOTS_APP, '/two'),
  three: path(ROOTS_APP, '/three'),
  // user: {
  //   root: path(ROOTS_APP, '/user'),
  //   four: path(ROOTS_APP, '/user/four'),
  //   five: path(ROOTS_APP, '/user/five'),
  //   six: path(ROOTS_APP, '/user/six'),
  // },
};
