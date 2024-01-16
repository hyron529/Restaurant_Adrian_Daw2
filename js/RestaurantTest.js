import {Dish} from "./Dish.js";
import {Allergen} from "./Allergen.js";
import {Category} from "./Category.js";
import {Menu} from "./Menu.js";
import {Restaurant} from "./Restaurant.js";
import {Coordinate} from "./Coordinate.js";
import {Manager} from "./Manager.js";

/*
    Función donde vamos a realizar todas las pruebas necesarias
    con las clases de objetos
*/
function testObjectsRestaurant(){

    console.log("<<<<<REALIZACIÓN DE PRUEBAS CON OBJETOS>>>>>");

    let dish = new Dish("Pizza barbacoa");
    dish.description = "Pizza casera barbacoa hecha en horno de piedra";
    dish.ingredients = ["Salsa barbacoa", "Carne de cerdo"];
    console.log(dish.toString);
    
    let allergen = new Allergen("Gluten");
    allergen.description = "Alérgeno en productos de trigo";
    console.log(allergen.toString);

    let category = new Category("Pizzas");
    category.description = "Sección con todas las pizzas disponibles";
    console.log(category.toString);

    let menu = new Menu("Menú 1");
    menu.description = "Menú que incluya una pizza.";
    console.log(menu.toString);

    let coordinate = new Coordinate(33, 99);

    let restaurant = new Restaurant("Pizza for you");
    restaurant.description = "Pizzería de Ciudad Real";
    restaurant.location = coordinate;
    console.log(restaurant.toString);

    console.log(coordinate.toString);
}

function testManagerRestaurant(){

    console.log("<<<<<REALIZACIÓN DE PRUEBAS EN MANAGER>>>>>");

    const managerRest = Manager.getInstance();

    
}

testObjectsRestaurant();
testManagerRestaurant();