# Solución Actividad 03: Introducción JavaScript

> [Código en RunKit](https://runkit.com/sivicencio/61b37c7851ee66000952c21e)

Vamos a poner en práctica el uso de los elementos fundamentales de JavaScript. Comenzaremos con lo más básico y luego iremos incrementando la complejidad. Como recomendación, haz todos los ejercicios, a pesar de que tal vez podrían parecerte muy básicos. Recuerda que estamos construyendo la base para todo lo que viene en el resto del curso.

**Nota**: Esta actividad está pensada para ser desarrollada en la plataforma RunKit, que nos permite ejecutar código en un ambiente Node.js, pero en el browser. Además verás que tiene ciertas similitudes con Jupyter Notebook. Para obtener y poder modificar el código base de la actividad, puedes clickear en `"Clone and edit this document"`. Esto te pedirá iniciar sesión en la plataforma. La forma más simple es utilizando una cuenta Github para iniciar sesión. Luego de hacerlo, se te creará una copia del código base (un notebook) asociada a tu cuenta. En este punto verás que ya puedes comenzar a escribir código.

Comenzaremos declarando e inicializando una variable numérica. En este caso utilizaremos `let` para realizar esta acción.

```javascript
let myNumber = 2;
```

El lado derecho de la asignación que acabamos de hacer corresponde a una expresión. En este caso, como sólo estamos asignando un número, corresponde a una expresión literal ("literalmente" es el número 2). Sin embargo, las expresiones pueden crecer en complejidad. Veamos qué pasa si agregamos una pequeña operación.

```javascript
myNumber + 2;
// 4
```

La plataforma RunKit utiliza un intérprete en un ambiente de Node.js, por lo tanto, cada línea que escribamos está siendo ejecutada por este intérprete. No siempre estaremos ejecutando código dentro de un intérprete, por lo que la expresión anterior, a pesar de ser evaluada en RunKit, en otros lados no arrojará un resultado explícito. Para poder ver el resultado de forma explícita, existe la función `console.log` que poseen la mayoría de los ambientes:

```javascript
console.log(myNumber + 2);
```

¿Por qué vemos `undefined`? Tiene que ver con el uso del intérprete que ya fue mencionado, pero por ahora no nos preocupemos de eso.

Lo primero que debes hacer es imprimir en consola "4 es un número". Puedes utilizar la variable ya declarada, y hacer las operaciones necesarias para obtener el resultado deseado.

```javascript
// Consola
// Write your solution here
console.log(`${myNumber + 2} es un número`)
```

Ahora que ya tienes lo anterior, tu tarea será utilizarlo para escribir un loop que imprima los números pares del 2 al 20. Puedes utilizar `while` o `for`.

```javascript
// Números pares
// Write your solution here
for (let i = 0; i < 20; i += 2) {
  console.log(`${myNumber + i} es un número`);
}
```

## FizzBuzz

El siguiente ejercicio es uno conocido por ser realizado en entrevistas de trabajo de software (así que si lo resuelves, estás sumando puntos para cuando tengas que prepararte para entrevistas).

Debes escribir un programa que imprima en consola (utilizando `console.log`) los números del 1 al 100, con las siguientes excepciones:

- Si el número es divisible por 3, imprimir "Fizz"
- Si el número es divisible por 5, imprimir "Buzz"
- Si el número es divisible por 3 y por 5, imprimir sólo "FizzBuzz"

```javascript
// FizzBuzz
// Write your solution here
for (let i = 1; i < 101; i += 1) {
  if (i % 3 === 0 && (i % 5 === 0)) console.log('FizzBuzz');
  else if (i % 3 === 0) console.log('Fizz');
  else if (i % 5 === 0) console.log('Buzz');
  else console.log(i);
}
```

## Comunas Paso a Paso

El plan "Paso a Paso" implementado por el gobierno de Chile para enfrentar la pandemia del COVID-19 consta de 5 pasos graduales que debe cumplir cada comuna del país para "volver a la normalidad". En el siguiente ejercicio tendrás que implementar una visualización simplificada del escenario específico en una ciudad de Chile.

Vamos a suponer que una ciudad está constituida por un número determinado de comunas. Cada comuna puede estar en uno de los 5 pasos o etapas: cuarentena (paso 1), transición (paso 2), preparación (paso 3), apertura inicial (paso 4) y apertura avanzada (paso 5). Para este ejercicio, vamos a utilizar una estructura geográfica simplificada, donde todas las comunas están dispuestas en forma de matriz cuadrada. Por ejemplo, si una ciudad tiene 4 comunas, entonces tendrá 2 filas con 2 columnas, y cada celda corresponderá a una comuna.

Tu tarea será imprimir en consola un solo string que contenga la estructura de matriz cuadrada, colocando el número correspondiente al paso en que se encuentra cada comuna. Para separar cada comuna, puedes agregar un caracter de espacio (`" "`). Para el caso de ejemplo de 4 comunas, si las de la primera fila están en el paso 2, y las de la segunda en el paso 1, el output debiese verse así:

```bash
2 2
1 1
```

Como primer paso, vamos a comenzar con un tamaño fijo de 25 comunas. Tendrás a tu disposición la función `getStep()`, que para una comuna en particular, retorna el paso en el que se encuentra (notar que el paso es determinado de forma aleatoria, por lo tanto, si ejecutas dos veces consecutivas tu código, obtendrás distinto resultado).

```javascript
function getStep() {
  return Math.floor(Math.random() * 5) + 1;
}
```

```javascript
// Comunas Paso a Paso
// Write your solution here
let size = Math.sqrt(25);
let result = '';
for (let i = 0; i < size; i += 1) {
  for (let j = 0; j < size; j += 1) {
    result += `${getStep()} `;
  }
  result += '\n'; 
}
console.log(result);
```

Bien, ya podemos ver el paso en el que se encuentra cada comuna, pero tenemos que detenernos a ver el número para saber si es posible realizar ciertas actividades. ¿Qué pasa si queremos salir el fin de semana? Modifiquemos un poco el código anterior para que veamos de forma más directa si es posible salir el fin de semana en cada comuna o no (tomando las precauciones necesarias, como **salir siempre con mascarilla, no estar a menos de un metro de otras personas, y lavarnos las manos con jabón al volver a casa**). ¡Ya nuestro cuerpo y mente lo pide!

Para esto, vamos a considerar que en todas las comunas que se encuentren en el paso 3 o superior, es posible salir el fin de semana (no estamos considerando la banda horaria deportiva).  Utilizaremos la letra "S" si es posible salir el fin de semana y "X" si aún no lo es. En otras palabras, debes imprimir las letras indicadas en vez de números.

```javascript
// Comunas Paso a Paso: Salir el fin de semana
// Write your solution here
size = Math.sqrt(25);
result = '';
for (let i = 0; i < size; i += 1) {
  for (let j = 0; j < size; j += 1) {
    result += `${getStep() >= 3 ? 'S' : 'X'} `;
  }
  result += '\n'; 
}
console.log(result);
```

Súper, ya es mucho más directo ver si podemos salir el fin de semana o no. Sin embargo, no todas las ciudades están compuestas de 25 comunas, que es el caso fijo que consideramos hasta ahora. Tu trabajo será implementar una función que reciba el número de comunas dentro de una ciudad, y retorne un string como el construido anteriormente. Considera lo siguiente:

- Si el tamaño no es un cuadrado perfecto (4, 9, 16, 25, etc), entonces puedes aproximar hacia abajo (los casos de 2 y 3 comunas se verán como una sola comuna, pero vamos a permitir esto por simplicidad)
- Si la función recibe un número negativo, debe retornar un string que diga "Una ciudad debe tener un número positivo de comunas".

Prueba la implementación de tu función con distintos valores para el total de comunas dentro de una ciudad.

```javascript
function displayCitySteps(total) {
  // Comunas Paso a Paso: Encapsular en función
  // Write your code here
  if (total < 0) return 'Una ciudad debe tener un número positivo de comunas';

  let size = Math.floor(Math.sqrt(total));
  result = '';
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      result += `${displayState(getStep())} `;
    }
    result += '\n'; 
  }
  return result;
}

displayCitySteps(64);
```

Lo que hemos hecho hasta el momento es imprimir el paso en el que se encuentra una determinada comuna, y luego lo modificamos para que nos muestre si es posible salir el fin de semana o no. Si quisiéramos cambiar una vez más qué mostramos para cada comuna, puede ser un poco tedioso tener que modificar la función que imprime el escenario de la ciudad.

Podemos abstraer qué se muestra para cada comuna en una nueva función, que reciba el paso en el que se encuentra esta, y retorne sólo un string compuesto de la letra que indica si es posible o no salir el fin de semana. Debes implementar tal función y luego modificar tu código anterior para que la utilice.

```javascript
// Write your code here
/* Naming scheme
   - Step 2: 'C'
   - Step 3: 'S'
   - Step 4: 'B'
   - Step 5: 'M'
   - Default: 'X'
*/
function displayState(step) {
  let output;
  switch (step) {
    case 2:
      output = 'C';
      break;
    case 3:
      output = 'S';
      break;
    case 4:
      output = 'B';
      break;
    case 5:
      output = 'M';
      break;
    default:
      output = 'X';
  }
  return output;
}
```

Finalmente, si queremos incluir más actividades, como salir a comprar, ir a un bar o ir al cine, sólo debemos modificar esta última función. Haz los cambios que consideres necesarios para que muestre si podemos salir a comprar (paso 2), salir el fin de semana (paso 3), salir a un bar (paso 4) y salir al cine (paso 5). Puedes elegir tu propia nomenclatura.

**Nota**: los escenarios anteriores son ficticios y no necesariamente regidos por lo establecido por el gobierno de Chile.

## Resumen de temas cubiertos

- Expresiones
- Variables
- Operaciones aritméticas y de comparación
- Condicionales
- Loops
- Funciones (definición y encapsulación de código existente)
