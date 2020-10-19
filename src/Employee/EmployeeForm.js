import React, {useState, useMemo} from "react";
import Card from "@material-ui/core/Card";
import Container from '@material-ui/core/Container';
import FormGroup from '@material-ui/core/FormGroup';
import DropdownMenu from "../components/DropdownMenu";
import DatePicker from "../components/DatePicker";
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

    const [locations, setLocations] = useState(initialValues.locations);
    const [jobs, setJobs] = useState(initialValues.jobs);
    const [conditions, setConditions] = useState(initialValues.conditions);
    const [employees, setEmployees] = useState(initialValues.employees);
    const [startDate, setStartDate] = useState(initialValues.startDate);

    const employeesOptions = useMemo(() => {
        return locationService
            .getEmployeeCollection()
            .filter(employeeEntity => locations.length === 0 ? true : locations.some(({ id }) => employeeEntity.locations.includes(id)))
            .filter(employeeEntity => jobs.length === 0? true : jobs.some(({ id }) => id === employeeEntity.job))
            .filter(employeeEntity => conditions.length === 0 ? true : conditions.some(({ id }) => id === employeeEntity.condition))
    },[locations, jobs, conditions]);

    return(
        <Container className="formContainer">
            <Card className="formCard">
                <h3 className="formTitle">Wybierz pracowników</h3>
                <FormGroup>

                    <DatePicker
                        name="startDate"
                        label="Data"
                        value={startDate}
                        onChange={({ target: { value }}) => setStartDate(value)}/>

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
                        value={employees}
                        onChange={(item) => setEmployees(item)}
                        options={employeesOptions}/>

                        <div className="formButton">
                        <FormButton
                            type="submit"
                            text="Wyświetl"
                            onClick={console.log({startDate, locations, jobs, conditions, employees})}/>
                        </div>
                </FormGroup>
            </Card>
        </Container>
    )
}