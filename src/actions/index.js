import getJsonPlaceholderUrl from '../api/jsonPlaceholder';

export const fetchPost = () => async dispatch => {
  const url = getJsonPlaceholderUrl('/posts');
  const posts = await fetch(url)
    .then(res => res.json())
    .then(json => json);

  dispatch({ type: 'FETCH_POSTS', payload: posts });
};
