import React, {useState,useEffect} from "react";
import Card from "@material-ui/core/Card";
import Container from '@material-ui/core/Container';
import FormGroup from '@material-ui/core/FormGroup';
import DropdownMenu from "../components/DropdownMenu";
import DatePicker from "../components/DatePicker";
import {useForm, Form} from "../components/useForm";
import  '../styles/index.css'
import * as locationService from "../services/locationServices"
import FormButton from "../components/FormButton";

const initialValues = {
    id:0,
    period:'',
    startDate:new Date(),
    jobs:'',
    locations:'',
    employees:'',
    conditions:'',
}

export default function EmployeeForm() {

    const {
        values,
        setValues,
        handleInputChange
    }=useForm(initialValues);

    return(
        <Form>
        <Container className="formContainer">
            <Card className="formCard">
                <h3 className="formTitle">Wybierz pracowników</h3>
                <FormGroup className="form">

                    <DatePicker
                        name="startDate"
                        label="Data"
                        value={values.startDate}
                        onChange={handleInputChange}/>

                    <DropdownMenu
                        name="locations"
                        label="Lokalizacje"
                        value={values.locations}
                        onChange={handleInputChange}
                        options={locationService.getLocationCollection()}/>

                    <DropdownMenu
                        name="jobs"
                        label="Stanowiska"
                        value={values.jobs}
                        onChange={handleInputChange}
                        options={locationService.getJobsCollection()}/>

                    <DropdownMenu
                        name="conditions"
                        label="Warunki zatrudnienia"
                        value={values.conditions}
                        onChange={handleInputChange}
                        options={locationService.getConditionsCollection()}/>

                    <DropdownMenu
                        name="employees"
                        label="Pracownicy"
                        value={values.employees}
                        onChange={handleInputChange}
                        options={locationService.getEmployeeCollection()}/>

                        <div className="formButton">
                        <FormButton
                            type="submit"
                            text="Wyświetl"/>
                        </div>

                </FormGroup>
            </Card>
        </Container>
        </Form>
    )
}