# Async Await Function

> La declaración de función async define una función asíncrona, la cual devuelve
> un objeto AsyncFunction. Es posible definir también funciones asíncronas a
> través de una expresión de función async.

```
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();
```

## Description

Cuando se llama a una función `async`, esta devuelve un elemento `Promise`.
Cuando la función `async` devuelve un valor, `Promise` se resolverá con el valor
devuelto. Si la función `async` genera una excepción o algún valor, `Promise` se
rechazará con el valor generado.

Una función `async` puede contener una expresión `await`, la cual pausa la
ejecución de la función asíncrona y espera la resolución de la `Promise` pasada
y, a continuación, reanuda la ejecución de la función `async` y devuelve el
valor resuelto.
