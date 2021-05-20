import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import Filter from './Filter'
import FormToAdd from './FormToAdd'

const NetworkTable = (props) => {
    const { data } = props;
    const [networks, setNetworks] = useState([]);
    const [addForm, setAddForm] = useState(false);

    useEffect(() => {
        setNetworks(data);
        console.log(data)
    }, [data]);

    return (
        <div>
            <Container fluid>
            <Filter setFilter={setNetworks} data={data} />
            <Button onClick={() => setAddForm(!addForm)}> {addForm?"Get back to Network":"Add Networks"} </Button>
                {addForm?<FormToAdd />:(
                    <Table striped bordered hover className="table-color">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Company</th>
                                <th>City</th>
                                <th>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            {networks.map((el) => (
                                <tr key={el.id}>
                                    <td>{el.name ? el.name : ''}</td>
                                    <td>{el.company ? el.company : ''}</td>
                                    <td>{el.location.city ? el.location.city : ''}</td>
                                    <td>{el.location.country ? el.location.country : ''}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                )}
            </Container>
        </div>
    );
};

export default NetworkTable;