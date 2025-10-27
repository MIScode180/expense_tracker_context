import React, { useContext } from "react";
import { ContextGlobal } from "../../contextapi/ContextGlobal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Transaction({ transaction }) {

  const { deleteTransaction } = useContext(ContextGlobal);



  return (
    <li
      key={transaction.id}
      className="bg-[#2f3848] rounded-2xl p-4 text-white flex justify-between items-center shadow-md"
    >
      {/* Left: Transaction name */}
      <span className="text-sm font-medium flex-1">{transaction.text}</span>

      {/* Middle: Amount */}
      <span
        className={`text-sm font-semibold mx-4 ${
          transaction.amount < 0 ? "text-red-400" : "text-green-400"
        }`}
      >
        {transaction.amount < 0 ? "-" : "+"}₹
        {Math.abs(transaction.amount).toLocaleString()}
      </span>

      {/* Right: Delete button */}
      <button
        className="text-gray-300 hover:text-red-400 transition duration-200"
        title="Delete transaction"
        onClick={() => deleteTransaction(transaction.id)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
}
