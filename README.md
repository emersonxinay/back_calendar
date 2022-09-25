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

