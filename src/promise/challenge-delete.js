import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'

function deleteData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'DELETE',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return response
}

let productId = 235

deleteData(`${API}/products/${productId}`)
  .then((response) => response.json())
  .catch((err) => console.log(err))
  .finally(() => console.log('Finally'))
