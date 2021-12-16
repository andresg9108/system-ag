# Construir #

1. Recuerde hacer una copia de los archivos de desarrollo para seguir los siguientes pasos y obtener los archivos de producción.

2. Comenzaremos instalando las dependencias usando el siguiente comando en la raíz del proyecto.

~~~
npm i
~~~

3. Vaya al archivo "./electron/settings.js" en la raíz del proyecto y elimine la siguiente línea.

~~~
oBrowserWindow.webContents.openDevTools();
~~~

4. Modificaremos los archivos javascript u otros que necesiten realizar un cambio para la producción.

5. Ahora ejecutaremos el siguiente comando que se encargará de preparar los archivos para producción.

~~~
npm run prepare
~~~

6. Eliminamos la carpeta “node_modules” y ejecutamos el siguiente comando que se encargará de cargar esta misma carpeta pero solo con las dependencias de producción. 

~~~
npm i --production
~~~

6. En la raíz del proyecto nos quedamos con siguientes archivos.

* main.js
* package.json
* package-lock.json"

7. En cuanto a los directorios nos quedaremos con los siguientes. 

* web/
* src/
* node_modules/
* electron/
* electron-builder/

8. También borraremos "src/sass" y dentro de "src/js" y "src/template" solo quedará la carpeta "dist".

9. Con esto ahora podemos ejecutar el siguiente comando que creará una carpeta llamada dist y que contendrá los archivos de producción de nuestro proyecto.

~~~
npm run dist
~~~