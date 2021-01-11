import React from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

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
            </select> */}
            <TextField
                id="outlined-select-currency"
                select
                label="Select"
                value={selectedCurrency}
                onChange={onChangeCurrency}
                helperText="Select your currency"
                variant="outlined"
            >
                {currencies.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
        </div>
    )
}
