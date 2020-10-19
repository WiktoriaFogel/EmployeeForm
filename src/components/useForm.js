import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";

export function useForm(initialValues) {

    const [values, setValues] = useState(initialValues);

    const handleInputChange= e =>{
        const {name,value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    return{
        values,
        setValues,
        handleInputChange
    }
}

const useStyles= makeStyles((theme) => ({
    form:{
        margin: theme.spacing(2),
    },
    formContainer:{
    maxWidth: 650,
    margintop: 30,
},
}))

export function Form(props){
    const classes = useStyles();
    return(
            <form className={classes.root} autoComplete="off">
                {props.children}
            </form>

    )
}