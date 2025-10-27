import React, { useContext } from "react";
import { ContextGlobal } from "../../contextapi/ContextGlobal";

export default function IncomeExpenses() {
  const { transactions } = useContext(ContextGlobal);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

const expense = (amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1
    .toFixed(2));


  return (
    <>
      <div className="flex justify-center mx-5 px-4 py-4 bg-white shadow-lg rounded-lg gap-15">
        <div className="font-bold text-2xl">
          <h4>Income</h4>
          <p className="text-green-500">+₹{income}</p>
        </div>
        <div className=" font-bold text-2xl">
          <h4>Expense</h4>
          <p className="text-red-500">-₹{expense}</p>
        </div>
      </div>
    </>
  );
}
