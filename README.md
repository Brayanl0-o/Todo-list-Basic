# Todo-list-Basic
![Alt text](image.png)

Esta es aplicacion web de una pagina, que proporciona una interfaz de lista de tareas esta hecha con Express.js, Node.js, MongoDB y JavaScript


En el archivo index.js se encuentran concatenados las rutas y controlladores de las acciones basicas CRUD.


Se utiliza bodyParser para la recepcion y conversion de los datos enviados desde el archivo ejs, y poder mostrar una view de la lista de tareas, en donde se puede:
  • Agregar una tarea 
  • Observar en una lista las tareas
  • Editar y eliminar las tareas correspondientes de la lista. 


La edicion y la eliminacion se llevan a cabo a traves de las rutas y controlladorse definidos en el index.js, ademas se utilizan dos scripts en index.ejs cada uno capturando el evento de click, uno para mostrar un recuadro donde se pueda definir el cambio que se quiere hacer, y el otro para eliminar la tarea. 


## Basado en:
Esta basado en un tutorial del canal joylearn: https://www.youtube.com/watch?v=bYneEQAQveA
