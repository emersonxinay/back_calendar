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