import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'

function putData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'PUT',
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

const data = {
  title: 'Macbook Pro M2',
  price: 1999,
  description: 'Computer product example'
}
putData(`${API}/products/${productId}`, data)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log('Finally'))
