# Interrogación IIC2513 2021-2
> **Fecha de Entrega**: jueves 25 de noviembre de 2021 a las 22:00 horas.

# Contexto

El pasado domingo 21 de noviembre se realizaron las elecciones presidenciales, parlamentarias y de CORE en el país. Este proceso electoral fue particularmente importante dados los recientes acontecimientos ocurridos en el país, tales como el estallido social de 2019, la pandemia del COVID-19 y el proceso constituyente que comenzó en julio de 2021. El clima político ha estado bastante agitado y las elecciones presidenciales, en particular, han tomado el protagonismo de la agenda nacional en los últimos meses.

Como una forma de poder establecer diferencias entre los diferentes candidatos y sus propuestas, el equipo docente del curso IIC2513 ha construido una pequeña plataforma web que permite visualizar datos concretos sobre cada uno de los presidenciables. La base de esta plataforma ya ha sido implementada, sin embargo, el equipo docente ha estado bastante ocupado corrigiendo las últimas entregas del proyecto del curso, por lo que no lograron finalizarla previo a las elecciones.

Para no dejar la plataforma abandonada, se le ha encargado a usted seguir con el proyecto y producir una primera versión funcional. En términos técnicos, consta de una aplicación web construida con el framework Koa, utilizando la configuración del template del curso. Se divide en 3 partes: una landing page, una API y una vista que consume la API mediante JavaScript.

# El proyecto existente

Como la plataforma web ya se encuentra parcialmente implementada, para el desarrollo usted debe clonar y modificar el proyecto cuyo link [puede obtener desde acá](https://github.com/IIC2513-2021-2/interrogacion). En este repositorio encontrará instrucciones para ejecutar la aplicación.

El modelo de datos consta solamente de dos modelos: `candidate` y `proposal`. Puede revisar en el código cómo están asociados.

Nota: usted **NO DEBE** modificar la implementación de estos modelos

Las siguientes secciones describen lo que usted debe implementar específicamente, dividido en 3 partes.

# Parte I: Preguntas teóricas [1.0 pt]

Esta primera parte es la única que no tiene relación con el contexto de la aplicación. A continuación encontrará una serie de preguntas teóricas. Usted debe seleccionar y responder 5 preguntas de las 10 disponibles. 

1. ¿Cuál es la diferencia entre los métodos HTTP `PUT` y `PATCH`?
2. Explique qué significa el status code 422 del protocolo HTTP.
3. Un documento HTML escrito con etiquetas semánticas (header, article, section, etc) es correcto a diferencia de uno que no incluye este tipo de etiquetas. Comente esta afirmación presentando argumentos.
4. En relación a CSS, mencione 2 diferencias entre las técnicas de disposición de elementos Flexbox y Grid.
5. Considere el siguiente trozo de código JavaScript.
    
    ```jsx
    const person1 = {
      name: 'Foo',
      address: {
        street: 'Vicuña Mackenna',
        city: 'Santiago',
      }
    };
    
    const person2 = {
      name: 'Bar',
      address: person1.address,
    }
    person2.address.city = 'Berlín';
    
    console.log(person1.address);
    ```
    
    ¿Por qué vemos que se imprime una dirección de `person1` algo diferente a lo definido originalmente?
    
6. Considerando que ambas funcionalidades de JavaScript nos permiten ejecutar código asíncrono, ¿cuál es la diferencia entre callbacks y promesas?
7. ¿A qué nos referimos cuando decimos que Node.js permite realizar operaciones I/O no-bloqueantes?
8. ¿Por qué una herramienta como ESLint puede ser útil para un proyecto de software hecho en JavaScript? Mencione al menos 2 razones.
9. En relación a la arquitectura REST definida por Roy Fielding, ¿a qué se refiere el principio de "mensajes auto-descriptivos" dentro del principio general de "interfaz uniforme"?
10. ¿Cuál es la importancia del componente "signature" dentro del formato de un JSON Web Token (JWT)?

## Implementación

El detalle de las preguntas lo encontrará también ingresando a la ruta `/preguntas-teoricas` de la aplicación web. Esta ruta está implementada como una vista estática dentro del archivo `src/views/static/preguntas-teoricas.html.ejs`. Dentro de esta vista encontrará una etiqueta `<p></p>` vacía bajo cada pregunta. **Usted debe utilizar estas etiquetas para ingresar sus respuestas**. Para visualizar su implementación como parte de la vista HTML, puede refrescar la ruta `/preguntas-teoricas` las veces que desee.

## Consideraciones

- Sólo se aceptarán respuestas dentro de las etiquetas de párrafo especificadas
- Se le pide que intente no extenderse más de 3 líneas considerando un ancho de pantalla normal (puede tomar como referencia un ancho de `920px`)
- Debe rellenar sólo las etiquetas asociadas a las preguntas que usted seleccionó
- Si incluye más de 5 respuestas, sólo se corregirán las 5 primeras. Por lo tanto, tenga cuidado de no agregar una respuesta a una pregunta que no seleccionó
- Todas las preguntas tienen el mismo puntaje

# Parte II: Landing estático [1.5 pts]

En esta parte usted debe implementar la landing page de la plataforma. Si ingresa a la ruta raíz de la aplicación, podrá ver que, además de un pequeño layout que incluye un header (el cual es compartido en toda la aplicación), la vista asociada a esta ruta está en blanco.

A continuación encontrará dos wireframes de posibles landing pages. Usted debe seleccionar una de las dos opciones e implementar una vista basada en el wireframe, utilizando solamente HTML y CSS.

## Wireframe 1

## Wireframe 2

## Consideraciones para ambas opciones

- Puede utilizar cualquier estrategia que conozca para disposición de elementos (Flex, Grid, float, etc)
- No es necesario que utilice etiquetas HTML semánticas
- Lo que se muestra en azul son enlaces. Puede utilizar el enlace que desee o colocar un placeholder como "#"
- Las cajas con dos líneas diagonales son imágenes. Puede seleccionar la imagen que sea de su preferencia. Para asegurarse de que sea visualizada en la corrección, puede agregar la imagen al proyecto dentro de `src/assets/images` (no olvide en ese caso agregar la referencia a `src/assets/js/assets.js`)
- No debe utilizar estilos inlines. Si lo hace, tendrá un descuento de 0.3 pts
- La sintaxis del HTML implementado debe estar correcta. Cualquier error significará un descuento de 0.2 pts

# Parte III: API en koa [3.5 pts]

En esta última parte usted debe implementar 3 endpoints desde cero, detallados en las siguientes secciones.

## Lista de candidatos [1.0 pt]

Debe implementar un endpoint que permita listar los candidatos presidenciales. La especificación del endpoint es la siguiente:

- Method: `GET`
- Path: `/api/candidates`
- Response
    - Status code: `200`
    - Content-Type: `application/json`

El cuerpo del response no está especificado intencionalmente en este documento, ya que usted debe deducirlo a partir de una implementación existente en la aplicación. Esto se detalle a continuación.

Si usted ingresa a la ruta `/candidates` en el browser podrá ver una vista que muestra inicialmente que no hay información disponible para candidatos. Sin embargo, al revisar el detalle de la vista EJS asociada, no encontrará lo mismo que se visualiza en el browser, sino que sólo verá un elemento HTML vacío con id `root`. El resto está implementado mediante una pequeña aplicación frontend montada sobre este elemento del DOM, cuya implementación se encuentra dentro de `src/assets/js/app.jsx`.

Para poder conocer el cuerpo del response del endpoint para listar candidatos, deberá revisar el código frontend mencionado en el párrafo anterior. Ahí encontrará que se consume el endpoint de la API asociado a esta lista, y se utilizan ciertos campos del response para renderizar el resultado. **Esos campos son los mínimos que usted debe incluir el cuerpo del response**. Tenga en consideración que uno de los campos hace referencia a la edad de los candidatos. Puede utilizar JavaScript nativo o bien la librería `date-fns` (ya instalada) para obtener este campo.

**Nota**: La aplicación frontend hace uso del DOM con la API nativa del browser (no utiliza React en absoluto).

## Programas de candidatos [1.0 pt]

Debe implementar un endpoint que permita obtener los principales puntos del programa de un candidato en particular. La especificación del endpoint es la siguiente:

- Method: `GET`
- Path: `/api/candidates/:id/proposals`
- Response
    - Status code: `200`
    - Content-Type: `application/json`

Para el cuerpo del response, tendrá que elegir entre dos alternativas, que presentan la información del programa de gobierno de forma diferente, y las cuales se detallan a continuación.

### Opción 1

```json
[
  {
    "topic1": "content",
    "candidateLastName": "Last name of candidate",
    "createdAt": "November 25th, 2021"
  },
{
    "topic2": "content",
    "candidateLastName": "Last name of candidate",
    "createdAt": "November 25th, 2021"
  }
]
```

Cada elemento del response debe tener sólo esas keys (ni más ni menos). Además, puede suponer que "createdAt" es la fecha en que se creó esa propuesta de gobierno (aunque sea el "createdAt" predeterminado de Sequelize). Este campo tiene que tener el formato "November 25th, 2021". El proyecto tiene instalado el package `date-fns`, que puede ser utilizado para conseguir ese formato, por lo que se sugiere buscar en la [documentación de este package](https://date-fns.org/docs/Getting-Started). Puede suponer que el candidato siempre tendrá su apellido al final e ignorar apellidos compuestos.

### Opción 2

```json
{
  "topic1-slug": {
    "topic": "topic value",
    "content": "content value",
    "candidate": "Name of candidate"
  },
  "topic2-slug": {
    "topic": "topic value",
    "content": "content value",
    "candidate": "Name of candidate"
  }
}
```

Donde `topic-slug` es el `topic` procesado de tal forma que tenga sólo minúsculas, ninguna letra con tilde y que los espacios hayan sido reemplazados por `-`. Puede suponer que un tópico nunca vendrá que otros caracteres "extraños" fuera de los mencionados. Por ejemplo, si el tópico es "Planificación urbana", el topic slug sería "planificacion-urbana".

Errores

- En caso de no existir el candidato, el endpoint debe retornar un **status code 404** (Not Found), con un pequeño mensaje descriptivo a su elección

## Acción sobre candidatos [1.0 pt]

El último endpoint que debe implementar será nuevamente seleccionado por usted entre dos opciones. En ambos casos, eso sí, el endpoint estará protegido y sólo podrá ser accedido por usuarios que posean un JSON Web Token (JWT) válido, el cual **debe ser incluido en cada request** que se realice.

Lo anterior significa que un usuario deberá inicialmente iniciar sesión para poder acceder a este endpoint. El endpoint de autenticación ya se encuentra implementado, y su especificación es:

- Method: **`POST`**
- Path: **`/api/auth`**
- Content-Type: **`application/json`**
- Body parameters:
    
    ```json
    {
      "email": "user_email",
      "password": "user_password"
    }
    ```
    
- Response
    - Status code: `201`
    - Content-Type: `application/json`
    - Body:
        
        ```json
        {
          "access_token": "jwt_token",
          "token_type": "Bearer"
        }
        ```
        

**IMPORTANTE**: no olvide agregar la variable de ambiente **JWT_SECRET** para que la generación del token funcione sin problemas

En las seeds del proyecto existen usuarios válidos para la aplicación, cuyas credenciales se sugiere utilizar para pruebas. Uno de esos usuarios tiene las siguientes credenciales:

- E-mail: user@example.org
- Password: hola.123

A continuación, entonces encontrará el detalle de ambas opciones de endpoints. Recuerde que debe seleccionar uno solo e implementarlo.

### Votar por candidato

Este endpoint permite votar por un candidato en particular. La cantidad de votos se encuentra reflejada en el campo `votes` del modelo `candidate`. Usted debe incrementar en 1 el valor de este campo por cada vez que se llame a este endpoint. La especificación del endpoint es la siguiente:

- Method: **`POST`**
- Path: **`/api/candidates/:id/votes`**
- Content-Type: **`application/json`**
- Body parameters: no requiere
- Response
    - Status code: `201`
    - Content-Type: `application/json`
    - Body: debe incluir la información del candidato utilizando los mismos campos incluidos en un elemento del endpoint para listar candidatos

Errores

- En caso de no incluir información de autenticación o que esta sea inválida, el endpoint debe retornar un **status code 401** (Unauthorized), con un pequeño mensaje descriptivo a su elección
- En caso de no existir el candidato, el endpoint debe retornar un **status code 404** (Not Found), con un pequeño mensaje descriptivo a su elección

### Modificar descripción de candidato

Este endpoint permite modificar la descripción asociada a un candidato en particular. Debe sólo permitir modificar este campo y no otros. La especificación del endpoint es la siguiente:

- Method: **`PATCH`**
- Path: **`/api/candidates/:id`**
- Content-Type: **`application/json`**
- Body parameters
    
    ```json
    {
      "description": "Modified description"
    }
    ```
    
- Response
    - Status code: `200`
    - Content-Type: `application/json`
    - Body: debe incluir la información del candidato utilizando los mismos campos incluidos en un elemento del endpoint para listar candidatos

Errores

- En caso de no incluir información de autenticación o que esta sea inválida, el endpoint debe retornar un **status code 401** (Unauthorized), con un pequeño mensaje descriptivo a su elección
- En caso de no existir el candidato, el endpoint debe retornar un **status code 404** (Not Found), con un pequeño mensaje descriptivo a su elección
- En caso de ingresar una descripción vacía o nula, el endpoint debe retornar un **status code 422** (Unprocessable entity), con un pequeño mensaje asociado a la falta de este campo
- En caso de ingresar algún campo diferente a `description`, el endpoint debe retornar un **status code 400** (Bad request), con un pequeño mensaje explicando que sólo se permite modificar la descripción

## Calidad de software: análisis estático de código [0.5 pt]

El resultado final debe permitir ejecutar ESLint sin que arroje errores.

# Consideraciones generales

- El proyecto cuenta con todos los packages necesarios para desarrollar la Interrogación. De todas formas, si considera que algún package le ayudará, puede incluir un archivo README dentro de la carpeta src indicando cualquier package extra utilizado, y cualquier instrucción que el ayudante requiera conocer para ejecutar su solución
- En general, el enunciado es bastante claro en cuanto a qué archivos usted debe modificar. Sin embargo, usted es libre de hacer modificaciones a otros archivos o agregar nuevos si lo estima conveniente, siempre que estén dentro de la carpeta “src” en cada proyecto, exceptuando los relacionados a los siguientes 2 puntos
- Usted no debe modificar el código JavaScript client-side. Sólo lo necesita utilizar para identificar algunas especificaciones de los endpoints de la API, y para testear que su implementación está correcta. Si lo modifica para ajustar su implementación de la API, este último ítem no será válido
- Usted no debe modificar los modelos de la aplicación. Si lo hace, las implementaciones que hagan uso de sus cambios no serán válidas
- Para agregar estilos, puede utilizar el archivo en la ruta `src/assets/styles/app.scss`
- No se evaluará lo que no sea posible probar, por lo tanto, asegúrese de que su
aplicación corra sin problemas (puede instalarla "desde cero" para asegurarse)

# Aspectos administrativos

## Forma de entrega

Para entregar la solución de su Interrogación, debe subir **un solo archivo .zip** al formulario que se publicará en un anuncio. Este archivo debe contener sólo lo siguiente: carpeta `src` del repositorio clonado y que contenga la implementación de todas las respuestas.

El nombre del archivo .zip debe seguir el siguiente formato:
```
apellidoPaterno_Nombre_numeroAlumno.zip
```

Por ejemplo, el alumno Benjamín Moisés Retamal Palacios entregará un archivo llamado: `Retamal_Benjamin_13191510.zip`

Asegúrese de que el archivo .zip contiene todos los archivos de la interrogación. Para esto se le sugiere descomprimirlo y revisar el contenido antes de enviarlo en el formulario. Lo que se reciba es lo que se corregirá, **sin excepciones**.

## Política de atrasos

Según lo especificado en el programa del curso, **el primer día de atraso descontará un 25% del puntaje total obtenido**. Un día de retraso comienza al segundo siguiente del plazo establecido (como el plazo es a las 22:00:00, entonces entregar a las 22:00:01 ya se considera un día de atraso). **Al segundo día de atraso, se califica la evaluación con nota 1.0**.

## Consultas

1. Se responderán consultas (dudas estrictamente de enunciado) en la primera hora del módulo de clases (de 10:00 hrs - 11:00 hrs), en la misma sesión Zoom de las cátedras. De este modo, usted alcanza a leer el enunciado antes y llegar a plantear dudas. De todas maneras, se publicará un resumen de las dudas [en una issue del repositorio **`syllabus`**](https://github.com/IIC2513-2021-2/syllabus/issues).
2. **No habrá preguntas por medio de issues**, por lo que se sugiere encarecidamente asistir a la sesión por Zoom y/o revisar el video issue asociado.

¡Éxito!