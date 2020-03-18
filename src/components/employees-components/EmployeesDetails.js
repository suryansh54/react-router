import React, { useState, useEffect } from 'react';

export function EmployeesDetails({ match }) {
    // useEffect runs when component mounts
    const empId = match.params.id;
    useEffect(() => {
        employeeDetails(empId);
    }, [empId])

    // Setting state of the application
    const [empDetails, setemployeesDetails] = useState({});

    // API operation
    const employeeDetails = async (employeeId) => {
        const data = await fetch(
            `https://reqres.in/api/users/${employeeId}`
        )
        const employeeDetails = await data.json();
        setemployeesDetails(employeeDetails.data);
        console.log(employeeDetails.data);
    }
    return(
        <div>
            <img alt={empDetails.first_name} src={empDetails.avatar} />
            <h1>{empDetails.first_name} {empDetails.last_name}</h1>
            <p>{empDetails.email}</p>
        </div>
    )
}