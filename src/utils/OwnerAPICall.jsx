export const getOwnerDetails = (ownerName) =>
  fetch(`https://api.github.com/users/${ownerName}`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
