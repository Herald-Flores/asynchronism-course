# Promise JavaScript

El objeto Promise representa la eventual finalización (o falla) de una operación
asincrónica y su valor resultante.

Una Promesa (Promise) es un proxy de un valor que no necesariamente se conoce
cuando se crea la promesa. Le permite asociar controladores con el valor
eventual de éxito o el motivo de falla de una acción asíncrona. Esto permite que
los métodos asíncronos devuelvan valores como los métodos síncronos: en lugar de
devolver inmediatamente el valor final, el método asíncrono devuelve la promesa
de proporcionar el valor en algún momento en el futuro.

```
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

myPromise
  .then(handleResolvedA, handleRejectedA)
  .then(handleResolvedB, handleRejectedB)
  .then(handleResolvedC, handleRejectedC);
```

> Las promesas pueden suceder: Ahora, En el futuro ó Nunca

## Platzi Challenge:

En este desafío debes crear una función la cual produzca una espera en un tiempo
específico y debe funcionar como una promesa.

La función deberá recibir dos parámetros:

> time = el tiempo de espera message = el mensaje que debe imprimir despues del
> tiempo de espera

> Nota: Debes usar la función setTimeout con el namespace window para poder
> monitorear su uso en la ejecución de pruebas, ejemplo:

La solución debería tener un input y output como los siguientes:

> Input

```
delay(2000, "Hello after 2s")
.then((message) => console.log(message))
```

> Output

```
# after 2s
"Hello after 2s"
```

#### Challenge solution:

```
export function delay(time, message) {
  // Tu código aquí 👈
  const miPromesa = new Promise((resolve, reject) => {
    if (time >= 0) {
      window.setTimeout(() => {
        resolve(message)
      }, time)
    } else {
      reject("We can't excecute the function")
    }
  })
  return miPromesa
}
```
