export function fetchUser(state = {}, action) {
  switch (action.type) {
    case 'FETCH_USER':
      return {user: action.user};
    default:
      return state;
  }
}

export function setActiveUser(state = {}, action) {
  switch (action.type) {
    case 'ACTIVE_USER':
      return {user: action.userData};
    default:
      return state;
  }
}

export function deleteUser(state = {}, action) {
  switch (action.type) {
    case 'DELETE_USER':
      return {user: action.updatedUser};
    default:
      return state;
  }
}
