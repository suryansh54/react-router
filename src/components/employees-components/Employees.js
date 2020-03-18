import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Employees() {
    // useEffect runs when component mounts
    useEffect(() => {
        fetchEmployees();
    }, [])

    // Setting state of the application
    const [employees, setEmployees] = useState([]);

    // API operation
    const fetchEmployees = async () => {
        const data = await fetch(
            'https://reqres.in/api/users'
        )
        const employees = await data.json();
        setEmployees(employees.data);
        console.log(employees.data)
    }
    return(
        <ul>
            {employees.map((employee, i) => (
                <li key={employee.id}>
                    <Link to={`/employee/${employee.id}`}>{employee.first_name}</Link>
                </li>
            ))}
        </ul>
    )
}