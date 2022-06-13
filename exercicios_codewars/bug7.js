const Spending = {
  revenues: [10001, 2, 3.5], //price
  expenses: [100, 200, 300] //amount
};

function totalCalc(spendingObj) {
  for (value in spendingObj.revenues) {
    let result = calcValues(spendingObj.revenues[value], spendingObj.expenses[value]);
    console.log(result);

    console.log(verifyValues(result));
  }

}

function verifyValues(result) {
  if (result < 0) {
    return `Balance is Negative :(`;
  }
  return "Balance is positive :)";
}

function calcValues(revenue, expense) {
  let keepResult = revenue - expense;
  return keepResult;
}

totalCalc(Spending);
