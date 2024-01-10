
/**
 * Creación de la clase Category, que nos va a permitir crear la
 * estructura de todas las categorías de las que vamos a disponer
 */
class Category{

    //Primero definimos las propiedades que va a tener Dish

    #name;
    #description;

    /*
        Definición del constrructor de la clase Category
        Pasando el nombre inicialmente, vamos a comprobar si no se introduce una categoría
        o si el operador new no ha sido utilizado, por lo que lanzamos excepción
        Una vez comprobado, podemos definir nuestras variables
    */
   constructor(name){

        if(name = "" || name == undefined) throw new EmptyElementException("name");

        if(!(new.target == Category)) throw new TypeErrorException("Category");

        this.#name=name;
        this.#description=null;
   }
}