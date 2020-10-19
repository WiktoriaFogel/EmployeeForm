import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function DropdownMenu(props) {
    const {name, label, value, onChange, options} = props

    return(
            <Autocomplete
                multiple
                limitTags={2}
                id="checkboxes"
                options={options}
                disableCloseOnSelect
                onChange={(e, items) => {
                    onChange(items);
                }}
                getOptionLabel={option => option.name}
                renderOption={(option, state) => {
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
                getOptionSelected={(option, value) => option.id === value.id}
                renderInput={params => (
                    <TextField
                        {...params}
                        label={label}
                    />
                )}
            />
    );
}