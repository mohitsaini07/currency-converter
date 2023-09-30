import { useId } from "react";

/* eslint-disable react/prop-types */
function InputField({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`shadow-lg shadow-purple-400 p-3 rounded-lg text-sm flex ${className}`}
    >
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="font-medium mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="font-normal uppercase mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg uppercase px-1 py-1 bg-transparent shadow-md cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => {
            return (
              <option className="uppercase" key={currency} value={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default InputField;
