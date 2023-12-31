import React from 'react'
import { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    currencyOptions = [],
    className = "",
}) {
    const amountInputId = useId()
  return (
    <div className={`flex bg-white rounded-lg p-3 text-sm ${className}`}>
        <div className='w-1/2'>
            <label htmlFor="amountInputId" className='text-black/40 mb-2 inline-block'>
                {label}
            </label>
            <input type="text"
                id={amountInputId}
                value={amount}
                disabled={amountDisable}
                placeholder="Amount"
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                className='outline-none w-full bg-transparent py-1.5'
            />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/40 mb-2 w-full'>Currency Type</p>
            <select 
                className='rounded-lg outline-none bg-gray-100 cursor-pointer px-1 py-1'
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisable}
            >
                {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox