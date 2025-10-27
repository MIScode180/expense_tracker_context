import React, { useContext } from "react";
import { ContextGlobal } from "../../contextapi/ContextGlobal";

export default function Balance() {
  const { transactions } = useContext(ContextGlobal);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <div className=" items-center mx-7 px-7 ">
        <div className=" w-50 text-xl bg-amber-700  rounded-2xl text-center">
          {" "}
          Your Balance
        </div>
        <div className="text-3xl font-bold mx-6 py-4 ">₹{total}</div>
      </div>
    </>
  );
}
