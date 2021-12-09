function createXmasTree(height) {
    let xmasTree = "";
    xmasTree = xmasTree + createTreeTop(height);
    xmasTree = xmasTree + createTreeBottom(height);
    return xmasTree;
}
function calculateTreeWidth(height) {
    return (2 * height) - 1;
}
function createTreeTop(height) {
    let width = calculateTreeWidth(height);
    let treeTop = "";
    for (let layer = 1; layer <= height; layer++) {
        if (layer > 1) {
            treeTop = treeTop + "\n";
        }
        treeTop = treeTop + createTreeLayer(width, layer);
    }
    return treeTop;
}
function createTreeLayer(width, layer) {
    let greenery = calculateGreenery(layer);
    let air = calculateAir(width, layer);
    let treeLayer = "";
    treeLayer = `${air}${greenery}${air}`;
    return treeLayer;
}
function calculateGreenery(layer) {
    let count = (2 * layer) - 1;
    let greenery = "";
    for (let i = 0; i < count; i++) {
        greenery += "*"
    }
    return greenery;
}
function calculateAir(width, layer) {
    let greenerySpace = (2 * layer) - 1;
    let count = (width - greenerySpace) / 2;
    let air = "";
    for (let i = 0; i < count; i++) {
        air += "_";
    }
    return air;
}
function createTreeBottom(height) {
    let trunk = "#";
    let treeBottom = "";
    let air = ""
    for (let i = 1; i < height; i++) {
        air += "_";
    }
    //console.log(`Air: ${air}`);
    treeBottom = "\n" + air + trunk + air + "\n" + air + trunk + air;
    return treeBottom;
}

//console.log(calculateTreeWidth(4));
// console.log(createTreeTop(10));
// console.log(`createTreeBottom: ${createTreeBottom(5)}`);
//console.log(`createTreeLayer: ${createTreeLayer(5, 3)}`);
//console.log((calculateAir(9, 1)));
const height = 10;
// createXmasTree(height);
console.log(createXmasTree(height));
// console.log(calculateGreenery(4));
//console.log(createTreeLayer(1,1));

/*
¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Si le pasamos el argumento 5, se pintaría esto:

____*____
___***___
__*****__
_*******_
*********
____#____
____#____
Creamos un triángulo de asteríscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

Otro ejemplo con un árbol de altura 3:

__*__
_***_
*****
__#__
__#__
Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.
*/