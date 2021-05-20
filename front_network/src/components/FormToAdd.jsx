import React, { useState, useEffect } from 'react';
import {Form, Button} from 'react-bootstrap'
import { createNetwork } from '../api/method/station';

const FormToAdd = () => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    async function submitForm() {
        const res = await createNetwork(name, company, city, country);
    }

    useEffect(() => {

    });

    return (
        <Form className="AddForm">
            <Form.Group controlId="AddForm">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    value={name}
                />
            </Form.Group>
            <Form.Group controlId="AddForm">
                <Form.Label>Company</Form.Label>
                <Form.Control
                    type="text"
                    onChange={(e) => {
                        setCompany(e.target.value);
                    }}
                    value={company}
                />
            </Form.Group>
            <Form.Group controlId="AddForm">
                <Form.Label>City</Form.Label>
                <Form.Control
                    type="text"
                    onChange={(e) => {
                        setCity(e.target.value);
                    }}
                    value={city}
                />
            </Form.Group>
            <Form.Group controlId="AddForm">
                <Form.Label>Country</Form.Label>
                <Form.Control
                    type="text"
                    onChange={(e) => {
                        setCountry(e.target.value);
                    }}
                    value={country}
                />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={() => {
                submitForm()
            }}>
                Submit
            </Button>
        </Form>
    );
}
 
export default FormToAdd;