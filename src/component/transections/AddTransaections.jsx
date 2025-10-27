import React, { useState , useContext} from "react";
import { ContextGlobal } from "../../contextapi/ContextGlobal";

export default function AddTransactions() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(ContextGlobal);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  }


  return (
    <div className="flex justify-center items-start bg-gray-50 py-6">
      <form onSubmit={onSubmit}  className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md space-y-5" >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Add New Transaction
        </h2>

        <div>
          <label
            htmlFor="text"
            className="block text-gray-700 font-medium mb-2 text-center"
          >
            What is the transaction for?
          </label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Enter text here"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 text-center focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div>
          <label
            htmlFor="amount"
            className="block text-gray-700 font-medium mb-1 text-center"
          >
            Amount
          </label>
          <p className="text-sm text-gray-500 text-center mb-2">
            (Negative - Expense, Positive - Income)
          </p>  
          <p className="text-sm text-gray-500 text-center mb-2 font-black">
            (e.g., -500 for expense, 500 for income)
          </p>  
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="Enter amount"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 text-center focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div className="text-center">
          <button
          onSubmit={onSubmit}
            type="submit"
            className="bg-amber-800 hover:bg-amber-700 text-white font-medium rounded-xl px-6 py-2 transition duration-200"
            
          >
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
}
