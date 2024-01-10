
/**
 * Creación de la clase Dish, que nos va a permitir almacenar
 * todos los objetos de tipo plato deseados
 */
class Dish{

    //Primero definimos las propiedades que va a tener Dish

    #name;
    #description;
    #ingredients;
    #image;

    /*
        Definición del constrructor de la clase Dish
        Pasando el nombre inicialmente, vamos a comprobar si no se introduce un nombre de plato,
        o si el operador new no ha sido utilizado, por lo que lanzamos excepción
        Una vez comprobado, podemos definir nuestras variables
    */
    constructor(name){

        if (name == undefined || name == "") throw new EmptyElementException("name");

        if (!(new.target == Dish)) throw new TypeErrorException("Dish");

        this.#name = name;
        this.#description = null;
        this.#ingredients = null;
        this.#image = null;
    }
}