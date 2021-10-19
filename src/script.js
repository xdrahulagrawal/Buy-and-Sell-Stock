/** Date:13/10/2021
 * Developer : Rahul Agrawal
 * Method-Name -: Buy and Sell
 */

/**
 * step1   = check array length should not be zero
 * step2   = let intial profit is zero
 * step3   = suppose buy is intial is array index
 * step4   = iteration the array element
 * step4.1 = check array element or intial array index is less then update intial array index else
 * step4.2 = check array element - update buy  is greate than your profit update intial profit
 * step4.3 = in the last return
 */

const arry = [7, 1, 5, 4, 6, 2, 10];
const buyAndSellHandler = (params) => {
  if (params.length === 0) {
    return "Input is not valid";
  }
  let buy = params[0];
  let profit = 0;
  for (let i = 0; i < params.length; i++) {
    if (params[i] < buy) {
      buy = params[i];
    } else if (params[i] - buy > profit) {
      profit = params[i] - buy;
    }
  }
  return profit;
};

const buyAndSell = buyAndSellHandler(arry);
console.log("🚀 ~ file: script.js ~ line 30 ~ buyAndSell", buyAndSell);
