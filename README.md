# Nodo Tecnologico - Fullstack - Cohorte 1 - Equipo 10

## Modulo 3 - Sprint 1 - Trabajo Práctico 4: Implementación de un Servidor con Node.js usando la Arquitectura MVC

### Objetivo del Trabajo Práctico

En este trabajo práctico, vamos a implementar un servidor en Node.js que gestiona información de superhéroes, utilizando la arquitectura Modelo-Vista-Controlador (MVC). El objetivo es crear un sistema modular y organizado que permita realizar operaciones de lectura, creación, actualización y eliminación (CRUD) de datos de superhéroes almacenados en un archivo. Además, implementaremos endpoints especiales que permitirán obtener superhéroes filtrados por diferentes criterios, como la edad, el origen o el número de poderes.
El servidor deberá manejar los siguientes métodos HTTP:

- **GET** para recuperar información de superhéroes.
- **POST** para agregar un nuevo superhéroe.
- **PUT** para actualizar un superhéroe existente.
- **DELETE** para eliminar un superhéroe.
- **GET** con filtros para obtener superhéroes según criterios específicos.

Finalmente, probaremos el funcionamiento del servidor usando Postman, una herramienta que permite realizar pruebas sobre APIs y servidores.

### Requerimientos del Trabajo

1. Levantar un servidor en el puerto 3005.
2. Implementar los siguientes endpoints:
   - **GET /superheroes:** Devuelve todos los superhéroes.
   - **GET /superheroes/id/:id:** Devuelve un superhéroe por su ID.
   - **POST /superheroes:** Agrega un nuevo superhéroe.
   - **PUT /superheroes/:id:** Actualiza un superhéroe por su ID.
   - **DELETE /superheroes/:id:** Elimina un superhéroe por su ID.
   - **GET /superheroes/atributo/:atributo/:valor:** Devuelve una lista de superhéroes que cumplen con un atributo específico (nombre, edad, planeta, etc.).
   - **GET /superheroes/filtros/avanzados:** Devuelve superhéroes mayores de 30 años, que sean de la Tierra y que tengan al menos 2 poderes.

### Notas

Se ha añadido un archivo rest_client.http para facilitar las pruebas en los endpoints utilizando la extensión Rest Client de Visual Studio Code. Esto permite realizar pruebas de manera más eficiente y directa dentro del entorno de desarrollo

https://marketplace.visualstudio.com/items?itemName=humao.rest-client
