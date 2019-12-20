/* 
SEE https://javascript.info/number about number precision
used +number.toFixed(2) to address precision problems
*/
function checkCashRegister(price, cash, cid) {
  let changeDue = +(cash - price).toFixed(2);
  console.log(changeDue + " at start");
  let cashAvailable = +cid
                          .flat(2)
                          .filter(val => typeof val === 'number')
                          .reduce((a,b)=>a+b)
                          .toFixed(2);
   let change = [ 
        ["PENNY", 0],
        ["NICKEL", 0], 
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0] 
        ];
        
  //quick checks for insufficient funds and exact match
  if (changeDue > cashAvailable){
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } else if (changeDue == cashAvailable) {
    return {status: "CLOSED", change: cid}
  } else {
      if (changeDue / 100 >= 1 && cid[8][1] >= 100){
        while (cid[8][1] >= 100 && changeDue >= 100) {
          change[8][1] += 100;
          cid[8][1] -= 100;
          changeDue -= 100;
          
          //fix to 2 decimals and coerce into a number
          change[8][1] = +change[8][1].toFixed(2);
          cid[8][1] = +cid[8][1].toFixed(2);
          changeDue = +changeDue.toFixed(2);
        }
      }
      console.log(changeDue + " before 20s");
      if (changeDue / 20 >= 1 && cid[7][1] >= 20){
        while (cid[7][1] >= 20 && changeDue >= 20) {
          change[7][1] += 20;
          cid[7][1] -= 20;
          changeDue -= 20;
          
          //fix to 2 decimals and coerce into a number
          change[7][1] = +change[7][1].toFixed(2);
          cid[7][1] = +cid[7][1].toFixed(2);
          changeDue = +changeDue.toFixed(2);
        }
      }
      console.log(changeDue + " before 10s");
      if (changeDue / 10 >= 1 && cid[6][1] >= 10){
        while (cid[6][1] >= 10 && changeDue >= 10) {
          change[6][1] += 10;
          cid[6][1] -= 10;
          changeDue -= 10;
          console.log(changeDue)

          //fix to 2 decimals and coerce into a number
          change[6][1] = +change[6][1].toFixed(2);
          cid[6][1] = +cid[6][1].toFixed(2);
          changeDue = +changeDue.toFixed(2);
        }
      }
      console.log(changeDue + " before 5s");
      if (changeDue / 5 >= 1 && cid[5][1] >= 5){
        while (cid[5][1] >= 5 && changeDue >= 5) {
          change[5][1] += 5;
          cid[5][1] -= 5;
          changeDue -= 5;

          //fix to 2 decimals and coerce into a number
          change[5][1] = +change[5][1].toFixed(2);
          cid[5][1] = +cid[5][1].toFixed(2);
          changeDue = +changeDue.toFixed(2);
        }
        console.log(changeDue)
      }
      console.log(changeDue + " before 1s");
      if (changeDue / 1 >= 1 && cid[4][1] >= 1){
        while (cid[4][1] >= 1 && changeDue >= 1) {
          change[4][1] += 1;
          cid[4][1] -= 1;
          changeDue -= 1;

          //fix to 2 decimals and coerce into a number
          change[4][1] = +change[4][1].toFixed(2);
          cid[4][1] = +cid[4][1].toFixed(2);
          changeDue = +changeDue.toFixed(2);
        }
      }
      console.log(changeDue + " before 0.25s");
      if (changeDue / 0.25 >= 1 && cid[3][1] >= 0.25){
        while (cid[3][1] >= 0.25 && changeDue >= 0.25) {
          change[3][1] += 0.25;
          cid[3][1] -= 0.25;
          changeDue -= 0.25;

          //fix to 2 decimals and coerce into a number
          change[3][1] = +change[3][1].toFixed(2);
          cid[3][1] = +cid[3][1].toFixed(2);
          changeDue = +changeDue.toFixed(2);
        }
      }
      console.log(changeDue + " before 0.1s");
      if (changeDue / 0.1 >= 1 && cid[2][1] >= 0.1){
        while (cid[2][1] >= 0.1 && changeDue >= 0.1) {
          change[2][1] += 0.1;
          cid[2][1] -= 0.1;
          changeDue -= 0.1;

          //fix to 2 decimals and coerce into a number
          change[2][1] = +change[2][1].toFixed(2);
          cid[2][1] = +cid[2][1].toFixed(2);
          changeDue = +changeDue.toFixed(2);
        }
      }
      console.log(changeDue + " before 0.05s");
      if (changeDue / 0.05 >= 1 && cid[1][1] >= 0.05){
        while (cid[1][1] >= 0.05 && changeDue >= 0.05) {
          change[1][1] += 0.05;
          cid[1][1] -= 0.05;
          changeDue -= 0.05;

          //fix to 2 decimals and coerce into a number
          change[1][1] = +change[1][1].toFixed(2);
          cid[1][1] = +cid[1][1].toFixed(2);
          changeDue = +changeDue.toFixed(2);
        }
      }
      console.log(changeDue + " before 0.01s");
      if (changeDue / 0.01 >= 1 && cid[0][1] >= 0.01){
        while (cid[0][1] >= 0.01 && changeDue >= 0.01) {
          change[0][1] += 0.01;
          cid[0][1] -= 0.01;
          changeDue -= 0.01;

          //fix to 2 decimals and coerce into a number
          change[0][1] = +change[0][1].toFixed(2);
          cid[0][1] = +cid[0][1].toFixed(2);
          changeDue = +changeDue.toFixed(2);
        }
      }
      console.log(changeDue)
      console.log({status: "OPEN", change: change.filter(denom => denom[1] > 0).reverse()})
      if (changeDue === 0){
        return {status: "OPEN", change: change.filter(denom => denom[1] > 0).reverse()}
      } else if (changeDue > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
      }
  }
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])