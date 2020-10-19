import React from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from "@material-ui/core/Select";
import MenuItem from '@material-ui/core/MenuItem';
import  '../styles/index.css'

export default function CheckboxSelect(props) {

    const {name, label, value, onChange, options} = props;

    return(
        <FormControl className="">
            <InputLabel>{label}</InputLabel>
            <Select
                name={name}
                label={label}
                value={value}
                onChange={onChange}>
                    <MenuItem value="">None</MenuItem>
                {
                    options.map(
                        item => (<MenuItem key={item.id} control={<Checkbox/>} value={item.id}>{item.name}</MenuItem>)
                    )
                }

            </Select>
        </FormControl>

    )

}