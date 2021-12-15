function getCoins(change) {
    let response = [0, 0, 0, 0, 0, 0];
    while (change >= 50) {
        change -= 50;
        response[5] ++;
    }
    while (change >= 20) {
        change -= 20;
        response[4] ++;
    }
    while (change >= 10) {
        change -= 10;
        response[3] ++;
    }
    while (change >= 5) {
        change -= 5;
        response[2] ++;
    }
    while (change >= 2) {
        change -= 2;
        response[1] ++;
    }
    while (change >= 1) {
        change -= 1;
        response[0] ++;
    }
    return response;
}

console.log(getCoins(51));
console.log(getCoins(3));
console.log(getCoins(5));
console.log(getCoins(16));
console.log(getCoins(100));


/* Instructions:
Para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña máquina que calcula el mínimo número de monedas que debemos usar para dar el cambio de una compra en metálico.

Las monedas para cambio que puedes usar son estas:

coins[0] = 1 céntimo
coins[1] = 2 céntimos
coins[2] = 5 céntimos
coins[3] = 10 céntimos
coins[4] = 20 céntimos
coins[5] = 50 céntimos
Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y la función nos da un array con la combinación de monedas mínimas que debemos usar para conseguirlo.

getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
La dificultad del reto está en saber utilizar correctamente una estructura que te permita conocer las monedas que tienes disponible para crear el array con la devolución, ya que debes usar siempre el menor número de monedas posible. ¡Suerte 👩‍💻👨‍💻!.
*/