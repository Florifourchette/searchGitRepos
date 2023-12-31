export const getGitData = (searchTerm) =>
  fetch(
    `https://api.github.com/search/repositories?q=${
      searchTerm || 'hello'
    }&per_page=8`,
    {
      method: 'GET',
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
