/* eslint-disable import/prefer-default-export */

export function fetchUser(state = {}, action) {
  switch (action.type) {
    case 'FETCH_USER':
      return {user: action.user};
    default:
      return state;
  }
}

export function setActiveUser(state = {}, action) {
  console.log(action, 'PPPP');
  switch (action.type) {
    case 'ACTIVE_USER':
      return {user: action.userData};
    default:
      return state;
  }
}
