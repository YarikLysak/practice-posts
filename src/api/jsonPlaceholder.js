const getJsonPlaceholderUrl = query => {
  const baseUrl = 'https://jsonplaceholder.typicode.com/';
  return new URL(query, baseUrl);
};

export default getJsonPlaceholderUrl;
