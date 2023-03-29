
async function main() {
    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    let response = await fetch ('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1min&apikey=653248ba5c2a42f493506e86f79d8cbf')
    let result = await response.json()

let GME = result.GME
let MSFT = result.MSFT
let DIS = result.DIS
let BNTX = result.BNTX

const stocks = [GME, MSFT, DIS, BNTX];

stocks.forEach(stocks => stocks.values.reverse())



// Bonus Note: 
// Another way to write the above lines would to refactor it as:
   // const {GME, MSFT, DIS, BTNX} = result 
// This is an example of "destructuring" an object
// "Destructuring" creates new variables from an object or an array
console.log()

}


main()