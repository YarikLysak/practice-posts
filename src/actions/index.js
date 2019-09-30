import _ from 'lodash';
import getJsonPlaceholderUrl from '../api/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPost());

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPost = () => async dispatch => {
  const url = getJsonPlaceholderUrl('/posts');
  const posts = await fetch(url)
    .then(res => res.json())
    .then(json => json);

  dispatch({ type: 'FETCH_POSTS', payload: posts });
};

export const fetchUser = id => async dispatch => {
  const url = getJsonPlaceholderUrl(`/users/${id}`);
  const user = await fetch(url)
    .then(res => res.json())
    .then(json => json);

  dispatch({ type: 'FETCH_USER', payload: user });
};

// export const fetchUser = id => dispatch => _fetchUsers(id, dispatch);
// const _fetchUsers = _.memoize(async (id, dispatch) => {
//   const url = getJsonPlaceholderUrl(`/users/${id}`);
//   const user = await fetch(url)
//     .then(res => res.json())
//     .then(json => json);

//   dispatch({ type: 'FETCH_USER', payload: user });
// });
