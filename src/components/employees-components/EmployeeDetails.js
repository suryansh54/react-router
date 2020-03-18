import React, { useState, useEffect } from 'react';
import './Employee.css';
import useDocumentTitle from '../../custom-hooks/useDocumentTitle';

export function EmployeeDetails({ match }) {
    // useEffect runs when component mounts
    const empId = match.params.id;
    useEffect(() => {
        employeeDetails(empId);
    }, [empId])

    // Seting document title
    const [title, setTitle] = useState('Employee');
    useDocumentTitle(title)
    
    // Setting state of the application
    const [empDetails, setEmployeesDetails] = useState({});

    // API operation
    const employeeDetails = async (employeeId) => {
        const data = await fetch(
            `https://reqres.in/api/users/${employeeId}`
        )
        const employeeDetails = await data.json();
        setEmployeesDetails(employeeDetails.data);
        setTitle(employeeDetails.data.first_name)
    }

    // Click Handler
    function sendMessage() {
        console.log('Button Clicked');
    }

    return (
        <div className="employee-details-wrapper">
            <div className="employee-details clear">
                <div className="picture">
                    <img className="image" alt={empDetails.first_name} src={empDetails.avatar} />
                </div>
                <div className="basic-info">
                    <h2 className="name">{empDetails.first_name} {empDetails.last_name}</h2>
                    <p className="email">{empDetails.email}</p>
                    <div className="action-wrapper">
                        <button onClick={sendMessage}>Add friend</button>
                        <button onClick={sendMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}