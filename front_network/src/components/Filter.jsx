import React, { useState, useEffect } from 'react';
import {Form} from 'react-bootstrap'

const Filter = (props) => {
    const { setFilter, data } = props;
    const [country, setCountry] = useState('');

    const changeFilter = () => {
        if (!data.networks) return;
        var list = [];
        data.forEach((network) => {
             if (network.location.country.startsWith(country)) list.push(network);
        })
        setFilter(list)
    }

    useEffect(() => {
        changeFilter()
    }, [country])

    return (
        <Form className="Filter">
            <Form.Group controlId="FilterCountry">
                <Form.Label>Country Filter</Form.Label>
                <Form.Control
                    type="text"
                    onChange={(e) => {
                        setCountry(e.target.value);
                    }}
                    value={country}
                />
            </Form.Group>
        </Form>
     );
}
 
export default Filter;