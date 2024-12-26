/* eslint-disable no-unused-vars */


import { useState } from 'react';
import './index.css'
import { useQuery } from '@tanstack/react-query';
import { currencyConverter } from './Api/postApi';

function App() {


  const [amount, setAmount] = useState(0);
  const [frommcurrency, setFromcurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  // to fetch the data
  const { data: convertedAmount, isloading, error ,refetch } = useQuery({
    queryKey: ['currency'],
    queryFn: () => currencyConverter(frommcurrency, toCurrency, amount),
    enabled: false,
  });

  const handleCurrecyConverter = () => {
    if (amount > 0){
    refetch();
  }};

  return (
    <>
      <section className="currency-converter">
        <div className="currency-div">
          <h1>Currency Converter</h1>
          <div>
            <label htmlFor="currency_amount">
              Amount:
              <input
                type="number"
                id="currency_amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </label>
          </div>
          <div className="currency-selector">
            <div>
              <label>
                From:
                <select value={frommcurrency} onChange={(e) => { e.target.value }}>
                  {["INR", "USD", "EUR", "GBP", "AUD"].map((currency) => {
                    return (
                      <>
                        <option key={currency} value={currency}>{currency}</option>
                      </>
                    );
                  })}
                </select>
              </label>
            </div>
            <div>
              <label>
                To:
                <select value={toCurrency} onChange={(e) => { e.target.value }}>
                  {["INR", "USD", "EUR", "GBP", "AUD"].map((currency) => {
                    return (
                      <option key={currency} value={currency}> {currency} </option>
                    );
                  })}
                </select>
              </label>
            </div>
          </div>
          <button disabled={isloading || amount <= 0}
            onClick={handleCurrecyConverter}
          >
            {isloading ? "Converting.." : "Convert"}
          </button>
          <hr />
          {
            convertedAmount && (
              <h2>
                {amount} {frommcurrency} = {convertedAmount.toFixed(2)} {toCurrency}
              </h2>
            )}
            {error && <p>An error occurred : {error.message}</p>}
        </div>
      </section>
    </>
  )
}

export default App
