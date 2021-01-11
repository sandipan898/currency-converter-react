import React from 'react'
import {TextField} from '@material-ui/core';

export default function CurrencyRow(props) {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        amount,
        onChangeAmount
    } = props

    return (
        <div>
            {/* <input type="number" className="input" value={amount} onChange={onChangeAmount} /> */}
            <TextField id="outlined-basic" type="number" label="Currency" variant="outlined" value={amount} onChange={onChangeAmount} />
            {/* <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (                    
                    <option key={option} value={option}>{option}</option>
                ))}
            </select> 
            // <MenuItem key={option} value={option}>
            //     {option}
            // </MenuItem>
            */}
                {currencies.map((option) => (
                    
                    <select value={selectedCurrency} onChange={onChangeCurrency}>
                    {currencyOptions.map(option => (                    
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
                ))}
        </div>
    )
}
