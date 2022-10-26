// Fetch API
async function fetchData(urlApi) {
  const options = {
    method: 'GET'
  }

  const response = await fetch(urlApi, options)
  const data = await response.json()
  return data
}

export async function runCode(url) {
  // Tu código aquí 👈
  // URL Verification
  try {
    new URL(url)
  } catch (e) {
    throw new Error('Invalid URL')
    return
  }

  // Return data or error in the promise
  try {
    const data = await fetchData(url)
    return data
  } catch {
    throw new Error('Something was wrong')
  }
}
