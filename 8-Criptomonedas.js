export default function maxProfit(prices) {
    
    const minPrice = Math.min(...prices.slice(0, prices.length - 1)); // returns min price from whole array
    const indexMinPrice = prices.findIndex(price => price === minPrice); 
        
    const maxPrice = Math.max(...prices.slice(indexMinPrice + 1)); // returns max price from part of array to the right of min price

    const result = maxPrice - minPrice;

    return result > 0 ? result : -1;
  }

  // Another solution:
function maxProfit2(prices) {
    while (prices.length > 0) {
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);

        const minPriceIndex = prices.indexOf(minPrice);
        const maxPriceIndex = prices.indexOf(maxPrice);

        if (minPriceIndex < maxPriceIndex) {
            return maxPrice - minPrice;
        }
        if (minPrice === prices.at(-1)) prices.pop();
        if (maxPrice === prices.at(0)) prices.shift();
    }
    return -1;
}

// Another solution, using recursion:
function maxProfit3(prices) {
    
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    const minPriceIndex = prices.indexOf(minPrice);
    const maxPriceIndex = prices.indexOf(maxPrice);

    if (minPriceIndex < maxPriceIndex) {
        return maxPrice - minPrice;
    }
    if (minPrice === prices.at(-1)) prices.pop();
    if (maxPrice === prices.at(0)) prices.shift();
    if (prices.length === 0) return -1;
    return maxProfit3(prices);
}


  /* Invertir en criptomonedas es casi un deporte de riesgo. El otro día hackearon Bitmart y ha hecho que el valor de Bitcoin, y otras monedas, bajase un 25%.

Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día y debemos devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.

La lista de precios es un array de números y representa el tiempo de izquierda a derecha. Por lo que ten en cuenta que no puedes comprar a un precio que esté a la derecha de la venta y no puedes vender a un precio que esté a la izquierda de la compra.

Por ejemplo:

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)
    
Si ese día no se puede sacar ningún beneficio, tenemos que devolver -1 para evitar que hagamos una locura:

const pricesDoge = [18, 15, 12, 11, 9, 7]
maxProfit(pricesDoge) = // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3]
maxProfit(pricesAda) = // -> -1 (no hay ganancia posible)
*/