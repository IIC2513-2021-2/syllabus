# Diseño Todo List API

## Requerimientos

- [Listar items](#listar-items)
- [Detalle de un item](#detalle-de-un-item)
- [Crear item](#crear-item)
- [Modificar item](#modificar-item)
- [Eliminar item](#eliminar-item)

## Listar items

### Request

```
GET /todos
```

### Response

```
Status code: 200
```

#### Response Headers
```
Content-Type: application/json
```

#### Response Body
```json
[
  {
    "id": 1,
    "title": "First todo item",
    "completed": false
  }
]
```


## Detalle de un item

### Request

```
GET /todos/:id
```

### Response

```
Status code: 200
```

#### Response Headers
```
Content-Type: application/json
```

#### Response Body
```json
{
  "id": 1,
  "title": "First todo item",
  "completed": false
}
```

### Errores

#### Todo no existente

```
Status code: 404
```

```json
{
  "message": "Could not find todo item with id :id"
}
```


## Crear item

### Request

```
POST /todos
```

#### Request Headers
```
Content-Type: application/json
```

#### Request Body
```json
{
  "title": "Second todo item"
}
```

### Response

```
Status code: 201
```

#### Response Headers
```
Content-Type: application/json
```

#### Response Body
```json
{
  "id": 2,
  "title": "Second todo item",
  "completed": false
}
```

### Errors

#### Validación

```
Status code: 422
```

```json
{
  "message": "Title can't be blank"
}
```


## Modificar item

### Request

```
PATCH /todos/:id
```

#### Request Headers
```
Content-Type: application/json
```

#### Request Body
```json
{
  "title": "First todo item modified",
  "completed": true
}
```

### Response

```
Status code: 200
```

#### Response Headers
```
Content-Type: application/json
```

#### Response Body
```json
{
  "id": 1,
  "title": "First todo item modified",
  "completed": true
}
```

### Errores

#### Todo no existente

```
Status code: 404
```

```json
{
  "message": "Could not find todo item with id :id"
}
```

#### Validación

```
Status code: 422
```

```json
{
  "message": "Title can't be blank"
}
```

```json
{
  "message": "Completed must be either true or false"
}
```


## Eliminar item

### Request

```
DELETE /todos/:id
```

### Response

```
Status code: 204
```

#### Response Body
Sin cuerpo

### Errores

#### Todo no existente

```
Status code: 404
```

```json
{
  "message": "Could not find todo item with id :id"
}
```
