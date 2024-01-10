
/**
 * Creación de la clase Category, que nos va a permitir crear la
 * estructura de todas las categorías de las que vamos a disponer
 */
class Coordinate{

    //Primero definimos las propiedades que va a tener Coordinate

    #latitude;
    #longitude;

    /*
        Definición del constrructor de la clase Coordinate
        En este caso, necesitamos introducir ambas propiedades para tener latitud y longitud
        Antes de definir las variables, hay que comprobar si lo que se ha introducido es un numero,
        y si cumple los valores establecidos 
    */
   constructor(latitude, longitude){

        latitude = typeof latitude !== "undefined" ? Number(latitude).valueOf() : 0;
        longitude = typeof longitude !== "undefined" ? Number(longitude).valueOf() : 0;

        if (latitude <=-180 || latitude >=180 || Number.isNaN(latitude)) {
            throw new IncorrectValueException("latitude");
        }

        if (longitude <=-180 || longitude >=180 || Number.isNaN(longitude)) {
            throw new IncorrectValueException("longitude");
        }

        this.#latitude=latitude;
        this.#longitude=longitude;
   }
}