import React, {useState,useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Checkbox from '@material-ui/core/Checkbox';
import SearchBar from "./SearchBar"
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


const useStyles= makeStyles({

})

export default function DropdownMenu(props) {
    const {name, label, value, onChange, options} = props
    //const [selectedItem, setSelectedItem] = useState([]);

    const preparedOptions = [{}, ...options]

    // const SearchPage = (props) => {
    //     const [input, setInput] = useState('');
    //     const [countryListDefault, setCountryListDefault] = useState();
    //     const [options, setOptions] = useState();
    //
    // const updateInput = async (input) => {
    //     const filtered = countryListDefault.filter(country => {
    //         return country.name.toLowerCase().includes(input.toLowerCase())
    //     })
    //     setInput(input);
    //     setOptions(filtered);
    // }}
    //console.log(name, selectedItem);
    return(
            <Autocomplete
                multiple
                limitTags={2}
                id="checkboxes"
                options={options}
                disableCloseOnSelect
                onChange={(e, items) => {
                    //setSelectedItem(item);
                    items.includes()
                    onChange(options);
                    onChange(items);
                }}
                getOptionLabel={option => option.name}
                renderOption={(option, state) => {
                    // const selectItemIndex = selectedItem.findIndex(
                    //     item => item.name.toLowerCase() === "zaznacz wszystko"
                    // );
                    // if (selectItemIndex > -1) {
                    //     state.selected = true;
                    // }
                    return (
                        <React.Fragment>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={state.selected}
                            />
                            {option.name}
                        </React.Fragment>
                    );
                }}
                style={{ width: 420, marginTop: 40, marginLeft: 60 }}
                renderInput={params => (
                    <TextField
                        {...params}
                        label={label}
                    />
                )}
            />
    );
}