
/**
 * Creación de la clase Restaurant, que nos va a permitir crear la
 * estructura de la cadena de restaurantes que queremos gestionar
 */
class Restaurant{

    //Primero definimos las propiedades que va a tener Restaurant

    #name;
    #description;
    #location;

    /*
        Definición del constrructor de la clase Restaurant
        Pasando el nombre inicialmente, vamos a comprobar si no se introduce un restaurante de forma adecauada
        o si el operador new no ha sido utilizado, por lo que lanzamos excepción
        Una vez comprobado, podemos definir nuestras variables
    */
   constructor(name){

        if(name = "" || name == undefined) throw new EmptyElementException("name");

        if(!(new.target == Restaurant)) throw new TypeErrorException("Restaurant");

        this.#name=name;
        this.#description=null;
        this.#location=null;
   }
}