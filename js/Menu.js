
/**
 * Creación de la clase Menu, que nos va a permitir agregar los platos
 * que necesitemos
 */
class Menu{

    //Primero definimos las propiedades que va a tener Menu

    #name;
    #description;

    /*
        Definición del constrructor de la clase Menu
        Pasando el nombre inicialmente, vamos a comprobar si no se introduce una categoríael menú correctamente
        Una vez comprobado, podemos definir nuestras variables
    */
   constructor(name){

        if(name = "" || name == undefined) throw new EmptyElementException("name");

        if(!(new.target == Menu)) throw new TypeErrorException("Menu");

        this.#name=name;
        this.#description=null;
   }
}