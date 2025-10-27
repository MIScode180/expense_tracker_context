import React, { useContext } from "react";
import { ContextGlobal } from "../../contextapi/ContextGlobal";
import Transactions from "../transections/transections";

export default function TransectionList() {
  const { transactions } = useContext(ContextGlobal);

  return (
   <>
  <div className="p-4 bg-white rounded-lg shadow-md">
    <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
      History of Expenses & Income
    </h2>

    <ul className="space-y-3">
      {transactions.map((transaction) => (
      <Transactions key={transaction.id} transaction={transaction}/>
      ))}
    </ul>
  </div>
</>

  );
}
