## pasos para iniciar el proyecto back 

### creamos la carpeta del proyecto y luego abrimos en la terminal 

```bash 
  npm init -y 
```
### instalamos nodemon de manera global, aqui se instala de modo super usuario para mac o linux

```bash 
  sudo npm i nodemon -g
```
### para windows sin el sudo 

```bash 
  npm i nodemon -g 
```
### agregar en el archivo package.json para ejecutar automatico desde la consola 
```js
// package.json
 "scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js"
  }
```
### para levantar desde producción 
```bash
  npm start
```

### para levantar desde desarrollo
```bash
  npm run dev
```

### ahora instalamos express con version especifica 
```bash
  npm i express@4.17.1
```

### se crea la carpeta public y por dentro dos archivos uno .html y el otro .css 

Escribes cualquier etiqueta en el .html con la base de html5(recuerda conectar con el css) y en .css también 

### creamos un archivo para variables de entorno 
```code 
//.env
PORT=4000
```
### ahora instalamos un paquete para variables de entorno 

```bash
npm i dotenv
```

### ahora creamos una constante dentro del archivo index.js 
```js

```

### instalar un validador 
```bash 
npm i express-validator
```

### para instalar base de datos mongo y compass
```bash
# revisar del tutorial fernando herrera 
# https://www.udemy.com/course/react-cero-experto/learn/lecture/20385145#overview
# crearse la cuenta de mongo
# https://cloud.mongodb.com/v2/61d6370b61111f378a364df7#clusters
# dejar por defecto casi todo 
# tener instalado mongo db compass
# crear un user y contraseña y guardarlo en un archivo text 
# conectar compass con lo que se genero en la web 
# poner el link de que se genera de la web y pegarlo cuando se abre en local mongo compass db
```

### para instalar mongoose revisar su pagina
```bash 
# ingresar al link
# https://mongoosejs.com/

```
### instalar mongoose
```bash
npm i mongoose
```