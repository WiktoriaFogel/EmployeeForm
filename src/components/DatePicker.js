import React from 'react'
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import  '../styles/index.css'


export default function DatePicker(props) {

    const {name, label, value, onChange} = props
    /*
    jestem zwolennikiem Czystego Kodu, skracanie tak nazw jest antypatternem. Ty wiesz o co chodzi, ja muszę się domyślać od czego to skrót.
    Nie ma co się obawiać długich nazw, one właśnie takie powinny być - aby przekazać wszystkie potrzebne informacje.

    Dodatkowo trochę mnie kłuje w oczy to function. Ładnie korzystasz z dobrodziejstw nowoczesnego JSa, np arrow functions, a sam komponent 
    definiujesz poprzez function. Jak juz się decydujesz na określony styl to trzeba być konsekwentnym. 
    */
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