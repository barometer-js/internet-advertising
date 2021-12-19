const BASE_URL = 'https://61ac9194d228a9001703ab46.mockapi.io/api/v1/users';

export function getFetch(value) {
  return fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify(value),
  })
    .then(response => {
      return response.json();
    })
    .then(data => data)
    .catch(error => console.log(error));
}
