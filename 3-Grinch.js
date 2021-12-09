function isValid(letter) {
    // ¡No dejes que el Grinch gane!
    // invalid if includes empty brackets, curly/square brackets 
    if (
        letter.includes("()") ||
        letter.includes("[") ||
        letter.includes("]") ||
        letter.includes("{") ||
        letter.includes("}")
        ) {
            return false;
        }

    // Split by space into individual words and check if any parentheses are closed correctly
    if (letter
        .split(" ")
        .some(
            (word) => word.startsWith("(") && !(word.endsWith(")"))
        )) {
            return false;
        }
    return true;

   }
   // const letter = "bici coche (balón) bici coche peluche"; => true
   // const letter = "(muñeca) consola bici" => true
   // const letter = "bici coche (balón bici coche" => false
   // const letter = "peluche (bici [coche) bici coche balón" => false
   console.log(isValid(letter));

   /*
   El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos:

"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
      
Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!
*/