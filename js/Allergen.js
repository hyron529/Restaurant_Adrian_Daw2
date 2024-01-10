
/**
 * Creación de la clase Allergen, que nos va a permitir almacenar
 * todos los alimentos que sean alérgenos
 */
class Allergen {

    //Primero definimos las propiedades que va a tener Allergen
    #name;
    #description;

    /*
        Definición del constrructor de la clase Allergen
        Pasando el nombre inicialmente, vamos a comprobar si no se introduce un nombre de alérgeno,
        o si el operador new no ha sido utilizado, por lo que lanzamos excepción
        Una vez comprobado, podemos definir nuestras variables
    */
    constructor(name) {

        if (name == undefined || name == "") throw new EmptyElementException("name");

        if (!(new.target == Allergen)) throw new TypeErrorException("Allergen");

        this.#name = name;
        this.#description = null;
    }
}