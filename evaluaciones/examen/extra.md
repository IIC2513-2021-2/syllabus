# Examen Extra IIC2513 2021-2

> **Fecha de Entrega**: miércoles 09 de marzo de 2022 a las 22:00 horas.

# Contexto

En esta oportunidad usted tendrá que implementar nuevas funcionalidades en la plataforma evaluada en el [examen original del curso](https://github.com/IIC2513-2021-2/syllabus/tree/main/evaluaciones/examen), realizado el 14 de diciembre de 2021. Es decir, tendrá que agregar funcionalidades a la plataforma web que permite visualizar y gestionar datos de las diferentes expediciones que han habitado la Estación Espacial Internacional (ISS, por sus siglas en inglés).

Si quiere conocer más del contexto del examen, puede leer el [enunciado del examen original](https://github.com/IIC2513-2021-2/syllabus/tree/main/evaluaciones/examen). Si bien usted debe implementar nuevas funcionalidades, le dará una idea del alcance de la plataforma.

# El proyecto existente

Como la solución del examen original ya se encuentra disponible, la plataforma web ya cuenta con toda la funcionalidad básica evaluada en aquel examen. Esta versión es la que usted deberá utilizar como punto de partida para el desarrollo de este examen extra. En primer lugar, usted debe clonar y modificar los dos proyectos cuyos links se encuentran a continuación:

- [examen-extra-backend](https://github.com/IIC2513-2021-2/examen-extra-backend)
- [examen-extra-frontend](https://github.com/IIC2513-2021-2/examen-extra-frontend)

En cada uno de los repositorios encontrará instrucciones para ejecutarlos. Parte de estos proyectos es lo que usted deberá subir como solución al examen.

A continuación encontrará detalles del estado actual del proyecto, que son necesarios que conozca para poder desarrollar lo requerido en esta evaluación.

## Backend

La aplicación backend corresponde a una API RESTful implementada en el framework koa, utilizando el template del curso.

Además de los modelos mencionados en el examen original, en esta oportunidad existe un nuevo modelo llamado `user`, el cual deberá utilizar más adelante.

Los endpoints disponibles actualmente son los mismos que se encuentran en la [solución del examen original](https://github.com/IIC2513-2021-2/syllabus/blob/main/pautas/examen.md), por lo que se puede dirigir ahí para conocer su especificación. De todas formas, a continuación encontrará una breve descripción de cada uno:

- **Lista de expediciones:** permite obtener la lista de las últimas expediciones de la ISS. Cada elemento dentro de la lista contiene información básica de la expedición.
- **Detalle de una expedición:** permite acceder al detalle de una expedición. Contiene algo más de información en comparación a un ítem de la lista de expediciones
- **Lista de miembros de una expedición:** permite obtener la lista de todos los miembros asociados a una expedición en particular
- **Modificación datos expedición:** permite modificar los datos asociados a una expedición en particular. Las modificaciones son parciales (1 o más atributos)
- **Agregar miembro a expedición:** permite agregar un miembro a una expedición en particular

## Frontend

El frontend de la plataforma corresponde a una single page application implementada en React, utilizando Create React App (CRA). Cuenta con la implementación de las funcionalidades especificadas en el enunciado del examen original, más algunos componentes extra, que usted deberá utilizar más adelante.

A continuación encontrará un resumen de lo que se encuentra implementado. Para mayor detalle, se puede dirigir a la [solución del examen original](https://github.com/IIC2513-2021-2/syllabus/blob/main/pautas/examen.md):

- **Sistema de rutas**: incluye todos los paths ya implementados y también los que deberá implementar
- **Vista “Home”**: corresponde a la página principal de la SPA
- **Vista “Not Found”**: corresponde a la vista desplegada cuando se accede a una ruta no existente
- **Vista “Lista de expediciones”**: permite visualizar la lista de expediciones de la ISS, e incluye un link para ir al detalle de cada expedición
- **Vista “Detalle de expedición”**: muestra información de una expedición en detalle, incluyendo sus miembros
- **Vista “Modificación datos expedición”**: incluye formulario con los campos asociados a una expedición existente, y la lógica de submit correspondiente
- **Vista “Agregar miembro a expedición”**: incluye formulario con los campos necesarios para agregar un miembro a una expedición existente, y la lógica de submit correspondiente

### Componentes semi-implementados

Existen 3 componentes que están parcialmente implementados, y que tendrán que ser completados por usted según lo que se le pedirá más adelante:

- `<TheoryExtra />`
- `<Login />`
- `<NewExpedition />`

Las siguientes secciones describen lo que usted debe implementar específicamente, dividido en 4 partes.

# Parte I: Preguntas teóricas [1.0 pt]

Esta primera parte es la única que no tiene relación con el contexto de la aplicación. A continuación encontrará una serie de preguntas teóricas. Usted debe seleccionar y responder 5 preguntas de las 8 disponibles.

1. ¿Cómo cliente y servidor saben interpretar el body de un mensaje HTTP que reciben? Es decir, ¿cómo saben que el body corresponde a un JSON, HTML, imagen, etc?
2. ¿Cuál es la diferencia entre un método de autenticación por cookies y uno por token?
3. Mencione 2 ventajas de utilizar Node.js en el lado del servidor en vez de alguna otra tecnología backend popular (Rails, Django, etc).
4. Mencione 2 beneficios de tener una suite de tests que cubra la mayor parte del código de un proyecto de software.
5. ¿Qué eventos causan el `render` de un componente React, en el contexto de su ciclo de vida?
6. ¿Cuáles son los descuidos en el código que pueden causar un SQL Injection?
7. Mencione 2 costos de utilizar TLS en un sitio web con el objetivo de hacerlo seguro.
8. ¿Qué es necesario que ocurra en el servidor para que un request `GET` que incluye el header `Authorization` **no sea bloqueado** por la política Same origin de los browsers?

## Implementación

Para esta primera parte utilizará el proyecto `**examen-extra-frontend**`. Debe asegurarse de clonarlo y ejecutarlo como indican las instrucciones del repositorio.

El detalle de las preguntas teóricas lo encontrará también ingresando a la ruta `/theory-extra` de la SPA. Esta ruta está implementada como un componente estático dentro del archivo `src/views/TheoryExtra.jsx`. Dentro del render del componente encontrará una etiqueta `<p></p>` vacía bajo cada pregunta. **Usted debe utilizar estas etiquetas para ingresar sus respuestas**. Para visualizar su implementación, puede refrescar la ruta `/theory-extra` las veces que desee.

## Consideraciones

- Sólo se aceptarán respuestas dentro de las etiquetas de párrafo especificadas
- Se le pide que no se extienda más de 4 líneas considerando un ancho de pantalla normal (puede tomar como referencia un ancho de `920px`)
- Debe rellenar sólo las etiquetas asociadas a las preguntas que usted seleccionó
- Si incluye más de 5 respuestas, sólo se corregirán las 5 primeras. Por lo tanto, tenga cuidado de no agregar una respuesta a una pregunta que no seleccionó
- Todas las preguntas tienen el mismo puntaje

# Parte II: API en koa [2.0 pt]

En esta parte usted deberá implementar 3 funcionalidades en la API hecha en Koa con el template del curso. Utilizará el proyecto **`examen-extra-backend`**. Debe asegurarse de clonarlo y ejecutarlo como indican las instrucciones del repositorio (incluyendo la ejecución de seeds).

## Login de usuario [0.5 pts]

Debe implementar el endpoint de autenticación basado en JSON Web Token (JWT). Dentro del proyecto encontrará instalada la librería `jsonwebtoken`, que le permitirá generar un JWT cuando la autenticación de usuario sea exitosa.

La especificación del endpoint es la siguiente:

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
    - Status code: **`201`**
    - Content-Type: **`application/json`**
    - Body:
        
        ```json
        {
          "access_token": "jwt_token",
          "token_type": "Bearer"
        }
        ```
        

**IMPORTANTE 1**: debe manejar los siguientes errores:

- En caso de ingresar un correo de un usuario no existente, el endpoint debe retornar un **status code 404** (Not Found), con un pequeño mensaje descriptivo a su elección
- En caso de ingresar un password incorrecto, el endpoint debe retornar un **status code 401** (Unauthorized), con un pequeño mensaje descriptivo a su elección

**IMPORTANTE 2**: **debe utilizar** una variable de ambiente para el secret del JWT. Se le recomienda utilizar el nombre **`JWT_SECRET`**.

En las seeds del proyecto existen usuarios válidos para la aplicación, cuyas credenciales se sugiere utilizar para pruebas. Uno de esos usuarios tiene las siguientes credenciales:

- E-mail: user@example.org
- Password: hola.123

## Endpoints protegidos [0.5 pts]

En esta parte usted deberá proteger un par de endpoints, para que sólo usuarios autenticados puedan accederlos. Esto significa que, en caso de que un request a estos endpoints no incluya información de autenticación o que esta sea inválida, debe retornar un **status code 401** (Unauthorized), con un pequeño mensaje descriptivo a su elección.

Los endpoints a proteger son los siguientes:

- **Modificación datos expedición**
- **Agregar miembro a expedición**

Para llevar a cabo esta parte, cuenta con el package `koa-jwt` que ya se encuentra instalado en el proyecto.

## Endpoints CRUD expedición faltantes [1.0 pt]

En este punto usted tendrá implementar un último endpoint en el contexto del CRUD de las expediciones. Para esto dispone de las siguientes dos opciones, y tiene que seleccionar una de las dos. **Esta decisión tendrá repercusiones** para la Parte III (SPA), por lo que piense bien cuál de las dos opciones le parece más atractiva y/o simple:

- Agregar expedición
- Eliminar expedición

### Agregar expedición

Debe implementar un endpoint que permita agregar una nueva expedición. Este endpoint debe estar protegido y sólo podrá ser accedido por usuarios que posean un JWT válido, el cual **debe ser incluido en cada request** que se realice.

La especificación del endpoint es la siguiente:

- Method: **`POST`**
- Path: **`/api/expeditions`**
- Content-Type: **`application/json`**
- Body parameters
    
    ```json
    {
      "name": "Expedition name",
      "startDate": "startDate in YYYY-MM-DD format",
      "endDate": "endDate in YYYY-MM-DD format",
      "patch": "Expedition patch photo URL",
      "description": "Expedition description",
    }
    ```
    
- Response
    - Status code: **`201`**
    - Content-Type: **`application/json`**
    - Body: debe tener la misma estructura que para el detalle de una expedición

**IMPORTANTE 1**: Debe realizar las mismas validaciones que para la modificación de una expedición:

- Campos requeridos: `name`, `startDate`, `description`
- Campos con formato fecha: `startDate`, `endDate`
- Campos con formato URL: `patch`

**IMPORTANTE 2**: debe manejar los siguientes errores:

- En caso de no incluir información de autenticación o que esta sea inválida, el endpoint debe retornar un **status code 401** (Unauthorized), con un pequeño mensaje descriptivo a su elección
- En caso de existir algún error de validación, el endpoint debe retornar un **status code 422** (Unprocessable entity), con un pequeño mensaje asociado al error de validación.

### Eliminar expedición

Debe implementar un endpoint que permita eliminar una expedición existente. Este endpoint debe estar protegido y sólo podrá ser accedido por usuarios que posean un JWT válido, el cual **debe ser incluido en cada request** que se realice.

La especificación del endpoint es la siguiente:

- Method: **`DELETE`**
- Path: **`/api/expeditions/:id`**
- Response
    - Status code: **`204`**
    - Body: no contiene

**IMPORTANTE**: debe manejar los siguientes errores:

- En caso de no incluir información de autenticación o que esta sea inválida, el endpoint debe retornar un **status code 401** (Unauthorized), con un pequeño mensaje descriptivo a su elección
- En caso de no existir la expedición, el endpoint debe retornar un **status code 404** (Not Found), con un pequeño mensaje descriptivo a su elección

# Parte III: Single page application en React [2.0 pt]

En esta parte usted deberá implementar algunas funcionalidades de las expediciones de la ISS, en la SPA asociada a la plataforma web. Utilizará el proyecto **`examen-extra-frontend`**. Debe asegurarse de clonarlo y ejecutarlo como indican las instrucciones del repositorio.

Cabe destacar que los cambios y funcionalidades que usted debe implementar son bien específicos, y se detallará en cada caso qué partes de la aplicación debe intervenir sí o sí (ver sección de consideraciones generales para saber qué más puede modificar). En general, las rutas de la aplicación no requieren intervención, excepto si incluye ahí redirecciones.

## Vista login de usuario [1.0 pts]

Actualmente la vista de login de usuario (en la ruta `/login` implementada en el componente `<Login />`) se encuentra con un título referencial y una implementación estática de un formulario. Su tarea será implementar las acciones de login/logout, el formulario de login y la lógica de submit según las siguientes indicaciones:

- Debe mostrar un link para iniciar sesión en el header de la aplicación, posicionado a la derecha. El link debe llevar a la ruta `/login`
- El formulario dentro de la vista de login de usuario debe incluir los campos `email` y `password`, con su tipo correspondiente (considerar que el password no debe poder visualizarse al tipear)
- No debe incluir validación client-side. En este evaluación sólo bastará con la validación server-side que ya debió haber implementado en el endpoint de autenticación
- Al hacer submit del formulario y mientras se hace el request, debe mostrar el botón de submit con un mensaje o ícono de loading pequeño, y debe estar deshabilitado
- Al hacer submit del formulario, se debe consumir el endpoint "Login de usuario", adjuntando los datos del formulario
- Si existe algún error de validación, debe mostrar un mensaje único sobre el formulario con el mensaje de error proveniente de la API. Puede utilizar la clase `error` ya implementada para destacar el error visualmente
- Si la operación es exitosa, debe redireccionar al home de la aplicación y además utilizar el almacenamiento local del browser (localStorage) para guardar el JWT que recibió como respuesta
- Debe mostrar un botón para cerrar sesión en el header de la aplicación, posicionado a la derecha, y a su lado mostrar el email del usuario. Al presionarlo, debe eliminar el JWT de localStorage y redireccionar al usuario dependiendo de si este se encuentra en una ruta protegida o no (más adelante se encuentra el detalle de cuáles serán las rutas protegidas)
    - Si se encuentra en una ruta protegida, puede redireccionar al login de usuario nuevamente
    - Si no se encuentra en una ruta protegida, debe redireccionar al home de la aplicación
- La sesión del usuario debe mantenerse activa hasta que el JWT expire, o bien, hasta que el usuario presione el botón para cerrar sesión. Debe ser posible cerrar la aplicación (cerrar la pestaña o ventana) y mantener la sesión activa al entrar nuevamente. Para verificar la fecha de expiración del JWT, cuenta con el package `jwt-decode` que ya se encuentra instalado en el proyecto
- Puede utilizar manejo nativo de formulario, o bien, el package `formik` que ya se encuentra instalado en el proyecto

A continuación podrá encontrar un wireframe con parte del flujo recién descrito.

## Acciones CRUD expedición [0.5 pts]

En este punto usted debe implementar uno de los 2 CRUDs asociados a la decisión de implementación de API que tomó anteriormente. Es decir, implementar uno de los siguientes dos casos:

- Agregar expedición
- Eliminar expedición

**IMPORTANTE**: sólo debe implementar la opción que escogió, no ambas.

### Agregar expedición

Actualmente la vista de una nueva expedición (en la ruta `/expeditions/new` implementada en el componente `<NewExpedition />`) se encuentra con un título referencial y una implementación estática de un formulario. Su tarea será implementar el formulario y la lógica de submit según las siguientes indicaciones:

- En el detalle de una expedición, es decir, dentro del componente `<ExpeditionDetail />` , debe incluir un link a la derecha del nombre de la expedición (al lado izquierdo del botón para editar), que lleve a la ruta `/expeditions/new`
- El formulario debe incluir los campos `name`, `startDate`, `endDate`, `patch` y `description`, con su tipo correspondiente (mismos campos que para modificar expedición)
- No debe incluir validación client-side. En este evaluación sólo bastará con la validación server-side que ya debió haber implementado
- Al hacer submit del formulario y mientras se hace el request, debe mostrar el botón de submit con un mensaje o ícono de loading pequeño, y debe estar deshabilitado
- Al hacer submit del formulario, se debe consumir el endpoint "Agregar expedición", adjuntando los datos del formulario
- Si existe algún error de validación, debe mostrar un mensaje único sobre el formulario con el mensaje de error proveniente de la API. Puede utilizar la clase `error` ya implementada para destacar el error visualmente
- Si la operación es exitosa, debe redireccionar a la vista de detalle de la nueva expedición
- Puede utilizar manejo nativo de formulario, o bien, el package `formik` que ya se encuentra instalado en el proyecto

A continuación podrá encontrar un wireframe con parte del flujo recién descrito.

### Eliminar expedición

Para este caso, su tarea será implementar un botón que permita eliminar una expedición en particular. Debe considerar las siguientes indicaciones:

- En el detalle de una expedición, es decir, dentro del componente `<ExpeditionDetail />` , debe incluir un botón a la derecha del nombre de la expedición (al lado derecho del botón para editar), el cual realizará la eliminación
- Al presionar el botón, debe solicitarle confirmación al usuario para eliminar la expedición. Esto puede ser por medio de un confirmation dialog (nativo o custom), que tenga las opciones para confirmar o cancelar. Si el usuario confirma la operación, se procede a la eliminación. De lo contrario, no ocurre nada
- Al confirmar la operación y mientras se hace el request, debe mostrar el botón con un mensaje o ícono de loading pequeño, y debe estar deshabilitado
- Al confirmar la operación, se debe consumir el endpoint "Eliminar expedición"
- Si existe algún error, debe mostrar un mensaje único sobre el nombre de la expedición, con el mensaje de error proveniente de la API. Puede utilizar la clase `error` ya implementada para destacar el error visualmente
- Si la operación es exitosa, debe redireccionar a la vista “Lista de expediciones”

A continuación podrá encontrar un wireframe con parte del flujo recién descrito.

## Rutas protegidas [0.5 pts]

Para finalizar la implementación de la SPA, sólo resta proteger las rutas que requieren que el usuario haya iniciado sesión, y que corresponden al CRUD de expediciones. En concreto debe proteger estas rutas de dos maneras diferentes.

En primer lugar, si el usuario no ha iniciado sesión e ingresa a las siguientes rutas, la aplicación debe redirigir a la vista de login de usuario, impidiéndole acceder a estas rutas:

- Agregar expedición
- Eliminar expedición (en este caso, la redirección debe ocurrir antes de mostrar el confirmation dialog)
- Modificación datos expedición
- Agregar miembro a expedición

En segundo lugar, debe modificar el request realizado en las siguientes vistas, para que incluya el JWT (de lo contrario, recibirá errores 401):

- Modificación datos expedición
- Agregar miembro a expedición

# Parte IV: Calidad de software [1.0 pt]

Ambas aplicaciones (backend y frontend) cuentan con ESLint instalado y ciertas reglas como las que usted ha visto y aplicado durante el desarrollo de su proyecto de curso. En esta parte se le pide lo siguiente:

- Solucionar errores y warnings que podrían lanzar inicialmente los proyectos [0.5 pts]
- Solucionar errores y warnings que puedan surgir producto de las modificaciones que realice en el código de cada proyecto [0.5 pts]

En otras palabras, para obtener el puntaje total en esta parte, el resultado final al ejecutar el linter para cada caso **debe arrojar 0 errores y 0 warnings**.

**IMPORTANTE**: no puede modificar el archivo .eslintrc o .eslintrc.json, ni tampoco ninguna configuración de ESLint. Tampoco puede deshabilitar reglas en el código (comentarios del tipo `eslint-disable`). Su código debe pasar el filtro del linter respetando la configuración original de cada proyecto.

# Consideraciones generales

1. El proyecto `examen-extra-backend` cuenta con todos los packages necesarios para desarrollar el examen. De todas formas, si considera que algún package le ayudará, puede incluir un **archivo README dentro de la carpeta src** indicando cualquier package extra utilizado, y cualquier instrucción que se requiera para ejecutar su solución
2. Del mismo modo, el proyecto `examen-extra-frontend` cuenta con todos los packages necesarios para desarrollar el examen. Puede incluir un **archivo README dentro de la carpeta src** indicando cualquiera package extra utilizados, y cualquier instrucción que se requiera para ejecutar su solución
3. El proyecto `examen-extra-frontend` cuenta con las siguientes librerías instaladas que le pueden ser útiles: **`formik`, `yup`, `axios`, `jsonapi-serializer`, `date-fns`, `jwt-decode`**
4. En general, el enunciado es bastante claro en cuanto a qué archivos usted debe modificar para ambos proyectos. Sin embargo, usted es libre de hacer modificaciones a otros archivos o agregar nuevos si lo estima conveniente o si considera que algo falta para desarrollar el examen, siempre que estén dentro de la carpeta `src` en cada proyecto, exceptuando lo especificado en el siguiente punto
5. Usted no debe modificar los modelos de la aplicación backend. Si hace alguna modificación (alteración de campos, asociaciones, entre otros), las implementaciones que hagan uso de sus cambios no serán válidas
6. Para agregar estilos, puede utilizar el archivo en la ruta **`src/styles/App.css`**. Si prefiere utilizar SASS puede hacerlo, sin embargo, queda bajo su propia responsabilidad la configuración y eventuales packages que requiera (indicándolo debidamente en el README al que hace refrencia el punto 2)
7. No se evaluará lo que no sea posible probar, por lo tanto, asegúrese de que su aplicación corra sin problemas (puede instalarla "desde cero" para asegurarse)

# Aspectos administrativos

## Forma de entrega

Para entregar su solución del examen, debe subir **un solo archivo .zip** al formulario que se adjuntará en el correo que usted recibirá. Este archivo debe contener sólo lo siguiente:

- **Carpeta `src`** del repositorio clonado examen-extra-backend
- **Carpeta `src`** del repositorio clonado examen-extra-frontend

Para poder diferenciar ambas carpetas, puede agregarle un sufijo distintivo como `src-backend` y `src-frontend` o similar.

El nombre del archivo .zip debe seguir el siguiente formato:

```bash
apellidoPaterno_Nombre_numeroAlumno.zip
```

Por ejemplo, el alumno Benjamín Moisés Retamal Palacios entregará un archivo llamado: `Retamal_Benjamin_13191510.zip`

Asegúrese de que el archivo .zip contiene todos los archivos del examen, en sus respectivas carpetas. Para esto se le sugiere descomprimirlo y revisar el contenido antes de enviarlo en el formulario. Lo que se reciba es lo que se corregirá, **sin excepciones**.

## Política de atrasos

Según lo especificado en el programa del curso, **el primer día de atraso descontará un 25% del puntaje total obtenido**. Un día de retraso comienza al segundo siguiente del plazo establecido (como el plazo es a las 22:00:00, entonces entregar a las 22:00:01 ya se considera un día de atraso). En esta oportunidad excepcional, en caso de entregar tarde, se aceptará la entrega atrasada hasta el mediodía (12:00:00) del jueves 10 de marzo de 2022. **Luego de ese plazo, se califica la evaluación con nota 1.0**.

## Consultas

1. Se responderán consultas mediante **correo directo al profesor** (sivicencio@uc.cl), para lo cual usted tendrá una oportunidad única para redactar un solo correo con todas sus dudas acumuladas. Este correo puede enviarlo como **máximo hasta las 16:00 hrs del miércoles 9 de marzo de 2022**. El profesor le responderá sus consultas a la brevedad, en una única respuesta a su correo.

2. **No habrá más instancias para consultas que la especificada en el punto anterior**. Se le sugiere leer con detención el examen completo antes de enviar sus consultas.

¡Éxito! 🙌🏼