# Callbacks

Un Callback es una una función que se pasa como argumento de otra función y que
será invocada.

## XMLHttpRequest

Es un objeto de JS que permite hacer peticiones hacia servicios en la nube(URLs
o APIs).

#### Existen 5 estados en un llamado XMLHttpRequest:

0 → Se ha inicializado. 1 → Loading (cargando). 2 → Se ha cargado. 3 →
Procesamiento si existe alguna descarga. 4 → Completado.

- `xmlhttp.open()` → Prepara la petición para ser enviada tomando tres
  parámetros: prótocolo, url, asíncrono (true).
- `xmlhttp.readyState` → Retorna el estado de la petición.
- `xmlhttp.onreadystatechange` → Un eventHandler que es llamado cuando la
  propiedad readyState cambia.
- `xmlhttp.status` → Retorna el estado de la respuesta de la petición.
  (200,400,500)
- `xmlhttp.send()` → Envía la petición.

## Call Hell

No es recomendable exceder de 3 callback, para ello se utilizan las promesas o
el Async Away.

## Use Node to execute the challenge

`node .\src\callback\challenge.js`
