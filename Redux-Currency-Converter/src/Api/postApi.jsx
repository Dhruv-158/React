/* eslint-disable no-undef */
import axios from "axios";

const api = axios.create({
    baseUrl:"https://v6.exchangerate-api.com/v6/2df3a2d7178dbbdf4359d689",
});


// https://v6.exchangerate-api.com/v6/2df3a2d7178dbbdf4359d689/pair/${fromCurrency}/${toCurrency}/${amount}

// const data = api.get(`${fromCurrency}/${toCurrency}/${amount}`)

export const currencyConverter = async (fromCurrency,toCurrency,amount) => {
    const res = await api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
    console.log(res);
    return res.data.conversion_result;
};
