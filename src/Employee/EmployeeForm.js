import React, {useState, useEffect, useMemo} from "react";
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
    startDate:new Date(),
    jobs:[],
    locations:[],
    conditions:[],
    employees:[],
}

export default function EmployeeForm() {

    const {
        values,
        setValues,
        handleInputChange
    }=useForm(initialValues);

    const [locations, setLocations] = useState(initialValues.locations);
    const [jobs, setJobs] = useState(initialValues.jobs);
    const [conditions, setConditions] = useState(initialValues.conditions);
    const [employees, setEmployees] = useState(initialValues.employees);
    const [startDate, setStartDate] = useState(initialValues.startDate);

    const employeesOptions = useMemo(() => {
        return locationService
            .getEmployeeCollection()
            .filter(employeeEntity => locations === [] ? true : locations.some(location => employeeEntity.locations.includes(location)))
            .filter(employeeEntity => jobs === [] ? true : jobs.some(job => employeeEntity.jobs.includes(job)))
            .filter(employeeEntity => conditions === [] ? true : conditions.some(condition => employeeEntity.conditions.includes(condition)))
    },[locations, jobs, conditions]);


    return(
        <Form>
        <Container className="formContainer">
            <Card className="formCard">
                <h3 className="formTitle">Wybierz pracowników</h3>
                <FormGroup className="form">

                    <DatePicker
                        name="startDate"
                        label="Data"
                        value={startDate}
                        onChange={handleInputChange}/>

                    <DropdownMenu
                        name="locations"
                        label="Lokalizacje"
                        value={locations}
                        onChange={(item) => setLocations(item)}
                        options={locationService.getLocationCollection()}/>

                    <DropdownMenu
                        name="jobs"
                        label="Stanowiska"
                        value={jobs}
                        onChange={(item) => setJobs(item)}
                        options={locationService.getJobsCollection()}/>

                    <DropdownMenu
                        name="conditions"
                        label="Warunki zatrudnienia"
                        value={conditions}
                        onChange={(item) => setConditions(item)}
                        options={locationService.getConditionsCollection()}/>

                    <DropdownMenu
                        name="employees"
                        label="Pracownicy"
                        value={values.employees}
                        onChange={locationService.getLocationCollection()}
                        options={employeesOptions}/>

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