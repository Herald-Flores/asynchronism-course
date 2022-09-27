/**
 * En este desafío vas a conectarte a una API que no existe, por ende debes capturar el error haciendo uso de try/catch y lanzar un error con el mensaje API No Found.
 * La solución debería tener un input y output como los siguientes:
 *
 * Input: await runCode();
 *
 * Output: Error: API No Found
 */

export async function runCode() {
  // Tu código aquí 👈
  const url = 'https://domain-api-com'

  const response = await fetch(url)
  try {
    console.log(response.json())
  } catch (error) {
    console.error('Error: ', error)
  }
}
