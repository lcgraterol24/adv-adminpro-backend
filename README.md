#Este back-end utiliza Express
https://expressjs.com/es/starter/installing.html
npm install express --save

#instalamos el nodemon js para que actualice los cambios en el momento del back
npm install -g nodemon
#sino, habría que usar: () pero hay que bajarlo y volverlo a subir para que actualice (no es optimo)

#en el package.json que creamos con npm init -y en la parte de scripts colocamos:
"start:dev": "nodemon index.js"

#tiramos nodemon index.js para referenciar el archivo

#Como levantar el back-end con Express
npm run start:dev

#en el archivo index.js definimos la conexión y el puerto

#link a la base de MONGO https://www.mongodb.com/es/cloud/atlas/efficiency

##AdminPro - Back end
ejecutar node_modules
