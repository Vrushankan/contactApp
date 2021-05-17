import {makeGetCall} from '../../common/apiCallFunctions/ApiCall';

export function fetchUsers() {
  return async dispatch => {
    return makeGetCall('https://jsonplaceholder.typicode.com/users').then(
      data => {
        if (data.status === 200) {
          return dispatch({type: 'FETCH_USER', user: data.data});
        } else {
          return dispatch({type: 'FETCH_USER', user: []});
        }
      },
      error => {
        console.log(error);
        dispatch('Unable to load Data');
      },
    );
  };
}

export function activeUser(dataUser) {
  return async dispatch => {
    dispatch({
      type: 'ACTIVE_USER',
      userData: dataUser,
    });
  };
}
