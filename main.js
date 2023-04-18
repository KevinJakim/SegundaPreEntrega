//Definimos la clase para la tarea//
class Tarea {
    constructor(nombre, descripcion, fechaVencimiento) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.fechaVencimiento = fechaVencimiento;
      this.completada = false;
    }
  
    completar() {
      this.completada = true;
    }
  }
  //Creamos el array vacío para almacenar las tareas//
  const tareas = [];
  
  //Función para agregar una nueva tarea al array mediante 3 prompts//
  function agregarTarea() {
    const nombre = prompt("Tarea a Realizar:");
    const descripcion = prompt("Descripción de la tarea:");
    const fechaVencimiento = prompt("Fecha de vencimiento de la tarea (formato fecha: AAAA-MM-DD):");
    const tarea = new Tarea(nombre, descripcion, fechaVencimiento);
    tareas.push(tarea);
    console.log("Tarea agregada con éxito:", tarea);
  }
  
  //Función para poder buscar tareas por nombre o por la descripción//
  //recibe como parámetro un término de búsqueda y retorna un array con todas las tareas que incluyen ese término en su nombre o en la descripción//
  function buscarTareas(terminoBusqueda) {
    //Utilizando un metodo FILTER en el array para leer las tareas y retornar solo las que cumplan la condicion de busqueda de su nombre o descripción//
    return tareas.filter(tarea => {
      const nombreIncluye = tarea.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase());
      const descripcionIncluye = tarea.descripcion.toLowerCase().includes(terminoBusqueda.toLowerCase());
      return nombreIncluye || descripcionIncluye;
    });
  }
  
//Mientras el usuario elija una de estas 3 opciones mostradas, el programa va seguir con la segunda parte//
  while (true) {
    const opcion = prompt("Ingrese una Opción Numérica: \n 1: Agregar tarea \n 2: Buscar tarea \n 3: Salir");
  
    if (opcion === "1") {
      agregarTarea();
    } else if (opcion === "2") {
      const terminoBusqueda = prompt("Ingrese la descripción de la tarea (Ej: Estudiar) :");
      const tareasEncontradas = buscarTareas(terminoBusqueda);

      //Si la busqueda de condiciones por nombre o descripcion es INVALIDA, va mostrar el mensaje de://
      if (tareasEncontradas.length === 0) {
        console.log("No se encontraron tareas con ese término de búsqueda.");
      } 
      //Sino la busqueda de condiciones va ser VALIDA, mostrando el mensaje de://
      else {
        console.log("Tareas encontradas:");
        tareasEncontradas.forEach(tarea => console.log(tarea));
      }
    } else if (opcion === "3") {
      break;
    } 
//Sino la opcion elegida fuera de las mostradas va ser INVALIDA//
    else {
      console.log("Opción inválida. Por favor, ingrese una opción válida.");
    }
  }
  
  