import React, { Component } from 'react'
import {Container,Button,Form,Table} from 'react-bootstrap';
import axios from 'axios';

export class Appointment extends Component {

    state = {docs:[]};

    componentDidMount(){
        axios.get('./doctors.json')
        .then(res=> this.setState({docs:res.data}))
    }

    render() {
        return (
            <>
            <Container>
                <h1 className='text-center my-3'>Appointment</h1>
                <Form>
                <h3>Book Your Appointment</h3>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter patient's name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Doctor</Form.Label>
                        <Form.Control type="text" placeholder="Enter doctor's name" />
                    </Form.Group>
  
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
            <Container>
            <h3 className='my-3'>List of doctors</h3>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Specialization</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.docs ? this.state.docs.map(doc=>{
                            console.log(doc);
                            return(<tr key={doc.id}>
                                <td>{doc.id}</td>
                                <td>{doc.fname}</td>
                                <td>{doc.lname}</td>
                                <td>{doc.specialization}</td>
                                </tr>)
                        }):
                        <tr> <td>Hey there is no data.</td> </tr>
                    }
                    </tbody>
                </Table>
            </Container>
            </>
        )
    }
}

export default Appointment
