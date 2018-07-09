import React, { Component } from 'react';
import {
    Form,
    Col,
    FormGroup,
    ControlLabel,
    FormControl,
    Button,
} from 'react-bootstrap';

class ContactUs extends Component {
    render() {
        return (
            <React.Fragment>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={4}>
                            Name
                        </Col>
                        <Col sm={5}>
                            <FormControl type="text" placeholder="Name" />
                            <FormControl.Feedback />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={4}>
                            Email
                        </Col>
                        <Col sm={5}>
                            <FormControl type="email" placeholder="Email" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalResume">
                        <Col componentClass={ControlLabel} sm={4}>
                            Contact Number
                        </Col>
                        <Col sm={5}>
                            <FormControl type="number" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={4}>
                            Attach Resume
                        </Col>
                        <Col sm={5}>
                            <FormControl type="file" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={8} sm={2}>
                            <Button type="submit">Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>;
            </React.Fragment>
        );
    }
}

export default ContactUs;