# Examen IIC2513 2021-2

> **Fecha de Entrega**: martes 14 de diciembre de 2021 a las 23:30 horas.

# Contexto

Un hecho que probablemente no es conocido por todo el mundo es que a cerca de 400 kms de altura del suelo terrestre se encuentra orbitando un satélite artificial que tiene como nombre Estación Espacial Internacional (ISS, por sus siglas en inglés). Como su nombre bien indica, es una colaboración internacional entre agencias espaciales de 5 países: Estados Unidos, Rusia, Japón, Europa y Canadá. 

El objetivo de este verdadero laboratorio espacial que orbita nuestro planeta es llevar a cabo investigación científica en diversas áreas, tales como la astrobiología, física, meteorología y astronomía, entre otros. Estas investigaciones pueden ayudar a entender fenómenos que ocurren en condiciones diferentes a las del ambiente terrestre, en preparación para misiones de larga duración a la Luna, Marte y eventualmente a otras partes del Sistema Solar.

Una de las particularidades de este proyecto es que cuenta con una presencia permanente del ser humano desde el año 2000, organizada en expediciones que van renovando periódicamente la tripulación.

El equipo docente del curso IIC2513 ha recibido la tarea de finalizar una plataforma web que permite visualizar y gestionar datos de las diferentes expediciones que han habitado la ISS. Parte de la plataforma ya venía implementada (como código legado), sin embargo, y como usted podrá imaginar, el equipo docente ha estado bastante ocupado corrigiendo la Interrogación y la última entrega del proyecto, por lo que el proyecto ha estado en stand-by.

En términos técnicos, la plataforma consta de dos aplicaciones web: una API construida con el framework Koa (utilizando la configuración del template del curso) y una single page application (SPA) construida en React (utilizando Create React App). Dado que el stack es prácticamente el mismo que hemos visto en el curso, a los ayudantes se les ocurrió, en un impulso creativo, la idea de poner a prueba sus conocimiento del curso encargándole a usted seguir con el proyecto y producir una primera versión funcional de este.

# El proyecto existente

Como la plataforma web ya se encuentra parcialmente implementada, para el desarrollo de este examen usted debe clonar y modificar dos proyectos cuyos links se encuentran a continuación:

- [examen-backend](https://github.com/IIC2513-2021-2/examen-backend)
- [examen-frontend](https://github.com/IIC2513-2021-2/examen-frontend)

En cada uno de los repositorios encontrará instrucciones para ejecutarlos. Parte de estos proyectos es lo que usted deberá subir como solución al examen.

A continuación encontrará detalles del estado actual del proyecto, que son necesarios que conozca para poder desarrollar lo requerido en esta evaluación.

## Backend

La aplicación backend corresponde a una API RESTful implementada en el framework koa, utilizando el template del curso.

El modelo de datos consta solamente de dos modelos: `expedition` y `member`. Puede revisar en el código cómo están asociados. El proyecto cuenta con seeds, cuyos datos fueron obtenidos de la [API pública Launch Library 2](https://thespacedevs.com/llapi), de The Space Devs.

La API **no incluye autenticación**, por lo tanto, usted no debe tener esto en consideración al implementar su solución.

### Lista de expediciones

Actualmente la API cuenta sólo con un endpoint, que permite obtener la lista de las últimas expediciones de la ISS. Cada elemento dentro de la lista tiene información básica de la expedición.

La especificación del endpoint es la siguiente:

- Method: `GET`
- Path: `/api/expeditions`
- Response
    - Status code: `200`
    - Content-Type: `application/json`
    - Body (en formato JSON API):
        
        ```json
        {
            "data": [
                {
                    "type": "expeditions",
                    "id": "1",
                    "attributes": {
                        "name": "Soyuz MS-20",
                        "startDate": "2021-12-08",
                        "endDate": "2021-12-20",
                        "patch": null
                    }
                },
                // Array with more objects like the above
            ]
        }
        ```
        

## Frontend

El frontend de la plataforma corresponde a una single page application implementada en React, utilizando Create React App (CRA). Cuenta con las siguientes funcionalidades ya implementadas:

### Sistema de rutas

Las rutas están implementadas con el package **react-router-dom**, y corresponden a las siguientes:

- Path **`/`** para home de la aplicación
- Path **`/theory`** para preguntas teóricas (detalle más adelante en Parte I)
- Path **`/expeditions`** para visualizar la lista de expediciones
- Path **`/expeditions/:id`** para el detalle de una expedición
- Path **`/expeditions/:id/edit`** para editar los datos de una expedición
- Path **`/expeditions/:id/members/new`** para ingresar un nuevo miembro a una expedición

### Componentes esqueleto

Existen 3 componentes esqueleto, que prácticamente están vacíos, pues sólo incluyen un título referencial. Más adelante se le pedirá implementar estos componentes:

- `<Expeditions />`
- `<EditExpedition />`
- `<NewMember />`

### Componentes semi-implementados

Existen 2 componentes que están parcialmente implementados y son funcionales, pero que tendrán que ser completados por usted según lo que se le pedirá más adelante:

- `<Theory />`
- `<ExpeditionDetail />`

### Componentes implementados

Por último, existen 2 componentes que ya están implementados y usted no debiera modificarlos, pues no es parte de la evaluación (con una pequeña excepción que será explicada en la Parte IV)

- `<Home />`
- `<MemberCard />`
- `<NotFound />`

Las siguientes secciones describen lo que usted debe implementar específicamente, dividido en 5 partes.

# Parte I: Preguntas teóricas [1.0 pt]

Esta primera parte es la única que no tiene relación con el contexto de la aplicación. A continuación encontrará una serie de preguntas teóricas. Usted debe seleccionar y responder 5 preguntas de las 10 disponibles. 

1. ¿Para qué sirven los headers HTTP?
2. Supongamos que usted tiene una API RESTful construida y funcionando en producción desde hace un tiempo. Hoy le llega el requerimiento de migrar las URLs existentes a un nuevo esquema (por ejemplo, agregarles un identificador como sufijo). ¿Qué debería hacer para que quienes consumen activamente su API no se vean perjudicados y puedan seguir consumiéndola sin tener que cambiar sus requests? 
3. ¿A qué se refiere el concepto "Single page application"?
4. Mencione 2 beneficios de llevar a cabo un flujo de desarrollo que incluya Code Review
5. El hook `useEffect` de React nos sirve sólo para ejecutar un side effect cuando se monta un componente. Comente esta afirmación presentando argumentos
6. En el contexto del desarrollo de un componente React, ¿sería buena idea utilizar `document.createElement`? Fundamente su respuesta.
7. Las vulnerabilidad de tipo XSS son de las más comunes en la Web. ¿Por qué un ataque XSS persistente puede llegar a afectar a más personas que uno reflejado?
8. ¿Cuál es la función de un certificado TLS?
9. ¿Cuál es el propósito de un request preflight, en el contexto de CORS?
10. Una persona promedio en su día a día, ¿accede la Web sólo desde un browser? Fundamente su respuesta.

## Implementación

Para esta primera parte utilizará el proyecto `examen-frontend`. Debe asegurarse de clonarlo y ejecutarlo como indican las instrucciones del repositorio.

El detalle de las preguntas teóricas lo encontrará también ingresando a la ruta `/theory` de la SPA. Esta ruta está implementada como un componente estático dentro del archivo `src/views/Theory.jsx`. Dentro del render del componente encontrará una etiqueta `<p></p>` vacía bajo cada pregunta. **Usted debe utilizar estas etiquetas para ingresar sus respuestas**. Para visualizar su implementación, puede refrescar la ruta `/theory` las veces que desee.

## Consideraciones

- Sólo se aceptarán respuestas dentro de las etiquetas de párrafo especificadas
- Se le pide que no se extienda más de 4 líneas considerando un ancho de pantalla normal (puede tomar como referencia un ancho de `920px`)
- Debe rellenar sólo las etiquetas asociadas a las preguntas que usted seleccionó
- Si incluye más de 5 respuestas, sólo se corregirán las 5 primeras. Por lo tanto, tenga cuidado de no agregar una respuesta a una pregunta que no seleccionó
- Todas las preguntas tienen el mismo puntaje

# Parte II: API en koa [2.0 pt]

En esta parte usted deberá implementar 3 endpoints de la API hecha en Koa con el template del curso. Utilizará el proyecto **examen-backend**. Debe asegurarse de clonarlo y ejecutarlo como indican las instrucciones del repositorio (incluyendo la ejecución de seeds).

## Detalle de una expedición [0.5 pt]

Debe implementar un endpoint que permita acceder al detalle de una expedición (que tendrá más información que la contenida en la lista de expediciones).

La especificación del endpoint es la siguiente:

- Method: **`GET`**
- Path: **`/api/expeditions/:id`**
- Response
    - Status code: `200`
    - Content-Type: `application/json`
    - Body: debe venir en formato JSON API, e incluir todos los atributos que el componente `<ExpeditionDetail />` del proyecto `examen-frontend` utiliza (pues es quien consume este endpoint)

## Lista de miembros de una expedición [0.5 pt]

Debe implementar un endpoint que permita obtener la lista de todos los miembros asociados a una expedición en particular. El orden en que se encuentren los resultados no es relevante.

La especificación del endpoint es la siguiente:

- Method: **`GET`**
- Path: **`/api/expeditions/:id/members`**
- Response
    - Status code: `200`
    - Content-Type: `application/json`
    - Body (en formato JSON API):
        
        ```json
        {
            "data": [
                {
                    "type": "members",
                    "id": "1",
                    "attributes": {
                        "name": "Alexander Misurkin",
                        "agency": "Russian Federal Space Agency (ROSCOSMOS)",
                        "nationality": "",
                        "bio": "",
                        "photo": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/alexander_misur_image_20211102151859.jpg",
                        "role": "Commander"
                    }
                },
                // Array with more objects like the above
            ]
        }
        ```
        

## Acción sobre datos [1.0 pt]

En este punto usted tendrá implementar un último endpoint que modificará los datos de la aplicación. Para esto dispone de las siguientes dos opciones, y tiene que seleccionar una de las dos. **Esta decisión tendrá repercusiones** para la Parte III (SPA), por lo que piense bien cuál de las dos opciones le parece más atractiva:

- Modificación datos expedición
- Agregar miembro a expedición

### Modificación datos expedición

Debe implementar un endpoint que permita modificar los datos asociados a una expedición en particular. Debe permitir realizar modificaciones parciales (1 o más atributos)

La especificación del endpoint es la siguiente:

- Method: **`PATCH`**
- Path: **`/api/expeditions/:id`**
- Content-Type: **`application/json`**
- Body parameters
    
    ```json
    {
      "name": "Modified name",
      "startDate": "Modified startDate in YYYY-MM-DD format",
      "endDate": "Modified endDate in YYYY-MM-DD format",
      "patch": "Modified patch photo URL",
      "description": "Modified description",
    }
    ```
    
- Response
    - Status code: `200`
    - Content-Type: `application/json`
    - Body: debe tener la misma estructura que para el detalle de una expedición

**IMPORTANTE**: Debe incluir validación server-side de acuerdo a lo siguiente:

- Campos requeridos: `name`, `startDate`, `description`
- Campos con formato fecha: `startDate`, `endDate`
- Campos con formato URL: `patch`

### Agregar miembro a expedición

Debe implementar un endpoint que permita agregar un miembro a una expedición en particular.

La especificación del endpoint es la siguiente:

- Method: **`POST`**
- Path: **`/api/expeditions/:id/members`**
- Content-Type: **`application/json`**
- Body parameters
    
    ```json
    {
      "name": "Member name",
      "agency": "Member agency",
      "nationality": "Member nationality",
      "bio": "Member bio",
      "photo": "Member photo URL",
      "role": "Member role",
    }
    ```
    
- Response
    - Status code: `201`
    - Content-Type: `application/json`
    - Body (en formato JSON API):
        
        ```json
        {
            "data": {
                {
                    "type": "members",
                    "id": "1",
                    "attributes": {
                        "name": "Alexander Misurkin",
                        "agency": "Russian Federal Space Agency (ROSCOSMOS)",
                        "nationality": "",
                        "bio": "",
                        "photo": "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/alexander_misur_image_20211102151859.jpg",
                        "role": "Commander"
                    }
                }
            }
        }
        ```
        

**IMPORTANTE**: Debe incluir validación server-side de acuerdo a lo siguiente:

- Campos requeridos: `name`, `agency`, `nationality`, `bio`, `role`
- Campos con formato URL: `photo`

### Errores

Para ambos casos, debe manejar los siguientes errores:

- En caso de no existir la expedición, el endpoint debe retornar un **status code 404** (Not Found), con un pequeño mensaje descriptivo a su elección
- En caso de existir algún error de validación, el endpoint debe retornar un **status code 422** (Unprocessable entity), con un pequeño mensaje asociado al error de validación.

# Parte III: Single page application en React [2.0 pt]

En esta parte usted deberá implementar la visualización de las expediciones de la ISS, en la SPA asociada a la plataforma web. Utilizará el proyecto **examen-frontend**. Debe asegurarse de clonarlo y ejecutarlo como indican las instrucciones del repositorio.

Cabe destacar que los cambios y funcionalidades que usted debe implementar son **bien específicos**, y se detallará en cada caso qué partes de la aplicación debe intervenir sí o sí (ver sección de consideraciones generales para saber qué más puede modificar). En general, las rutas de la aplicación no requieren intervención.

## Vista lista de expediciones

Actualmente la vista para visualizar las expediciones (en la ruta `/expeditions` implementada en el componente `<Expeditions />`) se encuentra con título referencial y un ícono de loading. Su tarea será implementar cambios en el componente `<Expeditions />` de forma que el flujo sea el siguiente:

1. Al ingresar a la ruta `/expeditions` debe mostrarse el título “ISS recent expeditions” y un ícono de loading grande.
2. La vista debe comenzar cargando la información correspondiente al endpoint “Lista de expediciones”
3. Una vez que la información de la lista de expediciones se encuentre disponible, se debe mostrar el nombre, fecha de inicio, fecha de fin y foto del parche (en caso de existir) para cada caso. Si no existe foto del parche, puede mostrar una foto predeterminada de su elección (debe agregarla al proyecto)
4. Además, deberá incluir un botón con el texto “More” para cada expedición, que al presionarlo lleve a la ruta `/expeditions/:id`, con el id correspondiente a la expedición
5. Con lo anterior implementado, el flujo asociado a esta vista quedará completo

A continuación podrá encontrar wireframes con el flujo recién descrito.

![Wireframes Examen-CompaniesList](https://user-images.githubusercontent.com/421739/146000220-b6afad46-716c-49e2-a8cc-64f8c03ec536.jpg)

![Wireframes Examen-CompaniesList (1)](https://user-images.githubusercontent.com/421739/146000233-43e9b64c-c5a7-4800-be70-20f91a1387fd.jpg)


## Miembros de una expedición

Actualmente la vista de detalle de una expedición (en la ruta `/expeditions/:id` implementada en el componente `<ExpeditionDetail />`) se encuentra parcialmente implementada y es funcional: muestra todos los datos de la expedición. Sin embargo, en la parte inferior, asociada a la sección de miembros de una expedición, se encontrará con un loading "infinito".

Su tarea será implementar cambios en el componente `<ExpeditionDetail />` de forma que el flujo sea el siguiente:

1. Al ingresar a la ruta `/expeditions/:id`, se muestre un ícono de loading grande mientras se cargan los datos de la expedición, y una vez que estos se encuentren disponibles, se despliegan incluyendo un ícono de loading en la parte inferior. **Esto ya sucede y no requiere intervención suya**.
2. En este punto la vista debe cargar la información correspondiente al endpoint "Lista de miembros de una expedición"
3. Una vez que la información del endpoint del punto anterior se encuentre disponible, se debe desplegar según el wireframe presentado más adelante. En este punto **debe utilizar el componente** `<MemberCard />` para desplegar los datos de cada miembro de la expedición. Este componente ya se encuentra implementado y usted sólo debe integrarlo a este flujo
4. Con lo anterior implementado, el flujo asociado a esta vista quedará completo

A continuación podrá encontrar wireframes con el flujo recién descrito.

![Wireframes Examen-CompanyDetail](https://user-images.githubusercontent.com/421739/146000296-92a6e522-72ef-41f8-9578-d1e3ac798a6c.jpg)

![Wireframes Examen-CompanyDetail (1)](https://user-images.githubusercontent.com/421739/146000317-97671fda-f794-4be0-ad59-34a077a517db.jpg)


## Formulario de acción sobre datos

En este punto usted debe implementar un formulario asociado a la decisión de implementación de API que tomó anteriormente. Es decir, implementar un formulario para alguno de los siguientes dos casos:

- Modificación datos expedición
- Agregar miembro a expedición

**IMPORTANTE**: sólo debe implementar el formulario asociado a la opción que escogió.

### Modificación datos expedición

Actualmente la vista de edición de una expedición (en la ruta `/expeditions/:id/edit` implementada en el componente `<EditExpedition />`) se encuentra con un título referencial y una implementación estática de un formulario. Su tarea será implementar el formulario y la lógica de submit según las siguientes indicaciones:

- El formulario debe incluir los campos `name`, `startDate`, `endDate`, `patch` y `description`, con su tipo correspondiente (puede deducirlo a partir del tipo de dato en el backend)
- En la carga inicial de la vista, se debe consumir el endpoint "Detalle de una expedición" y pre-llenar los campos del formulario con la respuesta. Opcionalmente, mientras carga los datos puede mostrar un ícono de loading
- No debe incluir validación client-side. En este evaluación sólo bastará con la validación server-side que ya debió haber implementado
- Al hacer submit del formulario, debe mostrar el botón de submit con un mensaje o ícono de loading pequeño, y deshabilitarlo
- Al hacer submit del formulario, se debe consumir el endpoint "Modificación datos expedición", adjuntando los datos del formulario
- Si existe algún error de validación, debe mostrar un mensaje único sobre el formulario con el mensaje de error proveniente de la API. Puede utilizar la clase `error` ya implementada para destacar el error visualmente
- Si la operación es exitosa, debe redireccionar a la vista de detalle de la expedición
- Puede utilizar manejo nativo de formulario, o bien, el package `formik` que ya se encuentra instalado en el proyecto

A continuación podrá encontrar un wireframe con parte del flujo recién descrito.

![Wireframes Examen-CompanyDetail (2)](https://user-images.githubusercontent.com/421739/146000350-e9807a69-d129-4ee8-a339-9652ed90a14a.jpg)


### Agregar miembro a expedición

Actualmente la vista para agregar un miembro a una expedición (en la ruta `/expeditions/:id/members/new` implementada en el componente `<NewMember />`) se encuentra con un título referencial y una implementación estática de un formulario. Su tarea será implementar el formulario y la lógica de submit según las siguientes indicaciones:

- El formulario debe incluir los campos `name`, `agency`, `nationality`, `bio`, `photo` y`role`, con su tipo correspondiente (puede deducirlo a partir del tipo de dato en el backend)
- No debe incluir validación client-side. En este evaluación sólo bastará con la validación server-side que ya debió haber implementado
- Al hacer submit del formulario, debe mostrar el botón de submit con un mensaje o ícono de loading pequeño, y deshabilitarlo
- Al hacer submit del formulario, se debe consumir el endpoint "Agregar miembro a expedición", adjuntando los datos del formulario
- Si existe algún error de validación, debe mostrar un mensaje único sobre el formulario con el mensaje de error proveniente de la API. Puede utilizar la clase `error` ya implementada para destacar el error visualmente
- Si la operación es exitosa, debe redireccionar a la vista de detalle de la expedición
- Puede utilizar manejo nativo de formulario, o bien, el package `formik` que ya se encuentra instalado en el proyecto

A continuación podrá encontrar un wireframe con parte del flujo recién descrito.

![Wireframes Examen-CompanyDetail (3)](https://user-images.githubusercontent.com/421739/146000392-1ed6f784-df7e-4cc5-bc33-0716a180de6f.jpg)


# Parte IV: Seguridad web [0.5 pt]

La SPA permite la posibilidad de incluir HTML en campos descriptivos, como por ejemplo, la descripción de una expedición o la bio de un miembro de una de ellas. Para esto, el proyecto incluye un curioso uso de React, llamado `dangerouslySetInnerHTML`. Si mira el detalle de los componentes `<ExpeditionDetail />` y `<MemberCard />`, encontrará este tipo de implementación. Según su decisión de implementación del formulario, puede modificar una expedición o agregar un nuevo miembro, e incluir en los campos mencionados alguna etiqueta HTML, y verá que el resultado se procesa visualmente como HTML.

Sin embargo, si usted ingresa lo siguiente en esos mismos campos mencionados, ocurrirá algo diferente:

```html
<script>
  document.addEventListener('DOMContentLoaded', function() {
    document.body.innerHTML = 'You\'ve been pwned :)';
  document.body.style = 'background-color:#444;color:white;display:flex;justify-content:center;align-items:center;font-size:48px;height:100vh';
  });
</script>
```

Ha descubierto una **vulnerabilidad XSS** en la aplicación. Su tarea será solucionar esta vulnerabilidad, sin importar si se pierde la posibilidad de mostrar HTML. Es mejor protegerse de este tipo de ataques que estar expuesto.

**Nota**: si no ve nada diferente, no se preocupe. Identifique igualmente cómo se está manejando el output de los campos mencionados y busque la forma más simple de mostrar lo mismo.

Sólo basta con solucionar la vulnerabilidad o en `<ExpeditionDetail />` o en `<MemberCard />`, dependiendo de su decisión previa de implementación del formulario.

# Parte V: Calidad de software [0.5 pt]

Ambas aplicaciones (backend y frontend) cuentan con ESLint instalado y ciertas reglas como las que usted ha visto y aplicado durante el desarrollo de su proyecto de curso. En esta parte se le pide que el resultado final al ejecutar el linter para cada caso **debe arrojar 0 errores y 0 warnings**.

**IMPORTANTE**: no puede modificar el archivo **.eslintrc** o **.eslintrc.json**, ni tampoco ninguna configuración de ESLint. Tampoco puede deshabilitar reglas en el código (comentarios del tipo `eslint-disable`). Su código debe pasar el filtro del linter respetando la configuración original de cada proyecto.

# Consideraciones generales

1. El proyecto `examen-backend` cuenta con todos los packages necesarios para desarrollar el examen. De todas formas, si considera que algún package le ayudará, puede incluir un **archivo README dentro de la carpeta src** indicando cualquier package extra utilizado, y cualquier instrucción que el ayudante requiera conocer para ejecutar su solución
2. Del mismo modo, el proyecto `examen-frontend` cuenta con todos los packages necesarios para desarrollar el examen. Puede incluir un **archivo README dentro de la carpeta src** indicando cualquiera package extra utilizados, y cualquier instrucción que el ayudante requiera conocer para ejecutar su solución
3. El proyecto `examen-frontend` cuenta con las siguientes librerías instaladas que le pueden ser útiles: **`formik`, `yup`, `axios`, `jsonapi-serializer`, `date-fns`**
4. En general, el enunciado es bastante claro en cuanto a qué archivos usted debe modificar para ambos proyectos. Sin embargo, usted es libre de hacer modificaciones a otros archivos o agregar nuevos si lo estima conveniente, siempre que estén dentro de la carpeta `src` en cada proyecto, exceptuando los relacionados a los siguientes 2 puntos
5. Usted no debe modificar los modelos de la aplicación backend, a excepción de lo que tenga relación con validaciones server-side. Si hace alguna modificación de otro tipo (alteración de campos, asociaciones, entre otros), las implementaciones que hagan uso de sus cambios no serán válidas
6. Usted no debe modificar el componente `MemberCard` de la SPA fuera de lo especificado en la Parte IV, pues la idea es que integre este componente ya existente a su solución
7. Para agregar estilos, puede utilizar el archivo en la ruta **`src/styles/App.css`**. Si prefiere utilizar SASS puede hacerlo, sin embargo, queda bajo su propia responsabilidad la configuración y eventuales packages que requiera (indicándolo debidamente en el README al que hace refrencia el punto 2)
8. No se evaluará lo que no sea posible probar, por lo tanto, asegúrese de que su aplicación corra sin problemas (puede instalarla "desde cero" para asegurarse)

# Aspectos administrativos

## Forma de entrega

Para entregar su solución del examen, debe subir **un solo archivo .zip** al formulario que se publicará en un anuncio. Este archivo debe contener sólo lo siguiente:

- **Carpeta `src`** del repositorio clonado examen-backend
- **Carpeta `src`** del repositorio clonado examen-frontend

Para poder diferenciar ambas carpetas, puede agregarle un sufijo distintivo como `src-backend` y `src-frontend` o similar.

El nombre del archivo .zip debe seguir el siguiente formato:

```
apellidoPaterno_Nombre_numeroAlumno.zip
```

Por ejemplo, el alumno Benjamín Moisés Retamal Palacios entregará un archivo llamado: `Retamal_Benjamin_13191510.zip`

Asegúrese de que el archivo .zip contiene todos los archivos del examen, en sus respectivas carpetas. Para esto se le sugiere descomprimirlo y revisar el contenido antes de enviarlo en el formulario. Lo que se reciba es lo que se corregirá, **sin excepciones**.

## Política de atrasos

Según lo especificado en el programa del curso, **el primer día de atraso descontará un 25% del puntaje total obtenido**. Un día de retraso comienza al segundo siguiente del plazo establecido (como el plazo es a las 23:30:00, entonces entregar a las 23:30:01 ya se considera un día de atraso). **Al segundo día de atraso, se califica la evaluación con nota 1.0**.

## Consultas

1. Se responderán consultas y dudas estrictamente de enunciado de 10:30 a 11:30 hrs, en [esta sesión Zoom](https://zoom.us/j/95904044450?pwd=cm5UM2VwVWNrejhkeDRURjEvNUgvdz09), la cual será grabada y subida para que la tenga a disposición durante el día. De este modo, usted alcanza a leer el enunciado antes y llegar a plantear dudas. De todas maneras, se publicará un resumen de las dudas [en una issue del repositorio **`syllabus`**](https://github.com/IIC2513-2021-2/syllabus/issues).
2. **No habrá preguntas por medio de issues**, por lo que se sugiere encarecidamente asistir a la sesión por Zoom y/o revisar el video asociado.

¡Éxito! 🙌🏼
