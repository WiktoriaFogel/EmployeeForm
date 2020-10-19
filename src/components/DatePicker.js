import React from 'react'
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import  '../styles/index.css'


export default function DatePicker(props) {

    const {name, label, value, onChange} = props

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

    return(
        <div className="datePicker">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline"
                label={label}
                formate="MMM/dd/yyyy"
                name={name}
                value={value}
                onChange={date => onChange(convertToDefEventPara(name, date))}/>
        </MuiPickersUtilsProvider>
        </div>
    )

}